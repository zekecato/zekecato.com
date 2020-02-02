
//Font Awesome icons
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { config, library } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'

// Site Icons
import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faCaretUp, faCaretDown, faBars } from '@fortawesome/free-solid-svg-icons'
library.add(faLinkedin, faGithubSquare)
library.add(faEnvelope, faCaretUp, faCaretDown, faBars)

import VueTippy from 'vue-tippy'

import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue) {
  Vue.use(VueTippy, {
    directive: "tippy", // => v-tippy
    flipDuration: 0,
    popperOptions: {
      modifiers: {
        preventOverflow: {
          enabled: false
        }
      }
    }
  })
  Vue.component('fontawesome', FontAwesomeIcon)
  Vue.component('Layout', DefaultLayout)
}
