// server.js
import express from 'express'
import fs from 'fs'
import path from 'path'
import cors from 'cors'

const app = express()
app.use(cors())
app.use(express.json())

const DATA_DIR = path.resolve('./data')
const COMMENTS_PATH = path.join(DATA_DIR, 'comments.json')

// ensure data dir + file exist
if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true })
if (!fs.existsSync(COMMENTS_PATH)) fs.writeFileSync(COMMENTS_PATH, '[]', 'utf8')

app.post('/add-comment', (req, res) => {
  try {
    const { message } = req.body
    if (!message || !message.toString().trim()) {
      return res.status(400).json({ error: 'Empty message' })
    }

    const raw = fs.readFileSync(COMMENTS_PATH, 'utf8')
    const arr = JSON.parse(raw || '[]')

    const newComment = {
      id: Date.now(),
      message: message.toString(),
      time: new Date().toLocaleString()
    }

    arr.push(newComment)
    fs.writeFileSync(COMMENTS_PATH, JSON.stringify(arr, null, 2), 'utf8')

    console.log('Saved comment:', newComment) // debug log
    return res.json({ success: true, saved: newComment })
  } catch (err) {
    console.error('Error writing comment:', err)
    return res.status(500).json({ error: 'Internal server error' })
  }
})

const PORT = 3000
app.listen(PORT, () => console.log(`Backend running on http://localhost:${PORT}`))
