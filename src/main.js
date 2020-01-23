
//Font Awesome icons
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { config, library } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'

// Site Icons
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
library.add(faLinkedin)
library.add(faEnvelope)


config.autoAddCss = false;


import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue) {
  
  Vue.component('fontawesome', FontAwesomeIcon)
  Vue.component('Layout', DefaultLayout)
}
