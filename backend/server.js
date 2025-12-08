import express from 'express'
import cors from 'cors'
import { db } from './db.js'

const app = express()
app.use(cors())
app.use(express.json())

app.post('/add-comment', async (req, res) => {
  try {
    const { message } = req.body

    if (!message || !message.toString().trim()) {
      return res.status(400).json({ error: "Empty message" })
    }

    const time = new Date().toLocaleString()

    const result = await db.query(
      "INSERT INTO comments (message, time) VALUES (?, ?)",
      [message, time]
    )

    return res.json({
      success: true,
      saved: {
        id: result[0].insertId,
        message,
        time
      }
    })

  } catch (err) {
    console.error("DB error:", err)
    return res.status(500).json({ error: "Database error" })
  }
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log("Backend running on " + PORT))
