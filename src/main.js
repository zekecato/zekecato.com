import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

//Font Awesome icons
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { config, library } from '@fortawesome/fontawesome-svg-core'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

import '@fortawesome/fontawesome-svg-core/styles.css'

config.autoAddCss = false;
library.add(faLinkedin)
library.add(faEnvelope)

import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue) {
  Vue.use(BootstrapVue)

  Vue.component('font-awesome', FontAwesomeIcon)
  Vue.component('Layout', DefaultLayout)
}
