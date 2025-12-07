// src/main.ts
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './styles.css'

import VueFeather from 'vue-feather'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library,  } from '@fortawesome/fontawesome-svg-core'
import { faDownload,faFileCode, faTerminal, faPhone, 
        faLocationDot, faGlobe, faGlobeAsia,
        faClock, faLightbulb, faBrain, faHandshake, 
        faBriefcase, faUsers, faCloud} from '@fortawesome/free-solid-svg-icons'
import { faBootstrap } from '@fortawesome/free-brands-svg-icons'

// BRAND ICONS
import {  
  faHtml5, 
  faCss3, 
  faJs, 
  faReact, 
  faVuejs, 
  faNodeJs, 
  faGithub, 
  faGit,
  faFigma, 
  faAws,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'

// SOLID
import { 
  faEnvelope 
} from '@fortawesome/free-solid-svg-icons'

// SOLID ICONS
import { 
  faDatabase, 
  faServer, 
  faFire, 
  faCode, 
  faBolt, 
  faWind,
  faStar,
} from '@fortawesome/free-solid-svg-icons'

// ADD TO LIBRARY
library.add(
  faHtml5, 
  faCss3, 
  faJs, 
  faReact, 
  faVuejs, 
  faNodeJs, 
  faGit, 
  faFigma, 
  faAws,
  faDatabase, 
  faServer, 
  faFire, 
  faCode, 
  faBolt, 
  faWind,
  faStar,
  faGithub,
  faLinkedin,
  faEnvelope,
  faDownload,
  faFileCode,
  faDownload,
  faTerminal,
  faBootstrap,
  faPhone,
  faLocationDot,
  faGlobe,
  faGlobeAsia,
  faClock,
  faLightbulb,
  faBrain,
  faHandshake,
  faBriefcase,
  faUsers,
  faCloud,
)

const app = createApp(App)
app.use(router)

app.component(VueFeather.name, VueFeather)
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
