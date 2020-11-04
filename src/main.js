//Font Awesome icons
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { config, library } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

// Site Icons
import { faLinkedin, faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faCaretUp,
  faCaretDown,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
library.add(faLinkedin, faGithubSquare);
library.add(faEnvelope, faCaretUp, faCaretDown, faBars);

import VueTippy from "vue-tippy";

import DefaultLayout from "~/layouts/Default.vue";
import "./global.css";

import Vuex from 'vuex';
import Cookies from "js-cookie";
import axios from "axios";
const api = axios.create({
  baseURL: process.env.URL,
});


export default function(Vue, { head, appOptions }) {
  Vue.use(VueTippy, {
    directive: "tippy", // => v-tippy
    flipDuration: 0,
    popperOptions: {
      modifiers: {
        preventOverflow: {
          enabled: false,
        },
      },
    },
  });
  Vue.component("fontawesome", FontAwesomeIcon);
  Vue.component("Layout", DefaultLayout);
  head.script.push({
    src: "https://js.stripe.com/v3/",
  });
  head.script.push({
    src: "https://js.squareupsandbox.com/v2/paymentform",
  });

  Vue.use(Vuex);
  appOptions.store = new Vuex.Store({
    state: {
      cart: [],
      products:[],
    },
    actions: {
      addProductToCart(context, { product, variant, quantity }) {
        // check if the product is already in the cart
        const cart = [...context.state.cart]
        const foundIndex = cart.findIndex(
          (elem) => elem.variant.id === variant.id
        );
        if (foundIndex > -1) {
          cart[foundIndex].quantity += quantity;
        } else {
          cart.push({ product, variant, quantity });
        }
        context.commit('updateCart', cart);
        context.commit('saveCart');
      },
      removeProductFromCart(context, {variant}){
        const cart = [...context.state.cart]
        const foundIndex = cart.findIndex(
          (elem) => elem.variant.id === variant.id
        );
        if (foundIndex > -1) {
          cart.splice(foundIndex,1);
          context.commit('updateCart', cart);
          context.commit('saveCart');
        }
      },
      loadProducts(context) {
        api.get("/.netlify/functions/get-products").then((response) => {
          context.commit('updateProducts', response.data.items || []);
        });
      },
      
    },
    mutations: {
          loadCart(state) {
            let cart = Cookies.get("cart");
            cart = cart ? JSON.parse(cart) : null;
            state.cart = (Array.isArray(cart) && cart) || [];
          },
          saveCart(state) {
            if (state.cart.length > 0) {
              Cookies.set("cart", JSON.stringify(state.cart), { sameSite: "Lax" });
              return;
            }
          },
          updateCart(state, cart) {
            state.cart = cart;
          },
          updateProducts(state,products) {
            state.products = products;
          }
          
    }
  })
}
