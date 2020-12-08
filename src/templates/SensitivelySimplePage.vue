<template>
  <layout>
    <div class="pagecontent">
      <div class="relative w-full">
        <cart class="sticky"></cart>
        <div v-html="$page.data.content"></div>
        <div class="flex flex-wrap justify-center">
          <product-card
            v-for="product in products"
            :key="product.id"
            :product="product"
          ></product-card>
        </div>
      </div>
    </div>
  </layout>
</template>

<page-query>
query WordPressPage ($id: ID!) {
  data: wordPressPage (id: $id)  {
        id,
        title,
        content,
        slug
    },
    
}
</page-query>

<script>
import axios from "axios";

import ProductCard from "../components/ProductCard";
import Cart from "../components/Cart";
import Cookies from "js-cookie";

import { mapActions, mapMutations, mapState } from "vuex";

const api = axios.create({
  baseURL: process.env.URL,
});

export default {
  metaInfo() {
    return {
      title: this.$page.data.title,
    };
  },
  components: {
    "product-card": ProductCard,
    cart: Cart,
  },
  mounted: function() {
    // api.get("/.netlify/functions/get-products").then((response) => {
    //   this.products = response.data.items || [];
    // });
    this.loadProducts();
    this.loadCart();
  },
  computed: {
    ...mapState(["products"]),
  },
  methods: {
    ...mapActions(["loadProducts"]),
    ...mapMutations(["loadCart"]),
    // loadCart: function() {
    //   let cart = Cookies.get("cart");
    //   cart = cart ? JSON.parse(cart) : null;
    //   this.cart = (Array.isArray(cart) && cart) || [];
    // },
    // saveCart: function() {
    //   if (this.cart.length > 0) {
    //     Cookies.set("cart", JSON.stringify(this.cart), { sameSite: "Lax" });
    //     return;
    //   }
    // },
    // validateCart: function() {
    //   //make sure that all of the items in the cart are valid product variants
    //   //collect valid variant ids
    //   const validVariants = this.products.reduce((variants, product) => {
    //     return [...variants, ...product.variation_ids];
    //   }, []);
    //   const validCart = this.cart.every((variant) => {
    //     return validVariants.contains(variant.id);
    //   });
    // },
    // addProductToCart: function({ product, variant, quantity }) {
    //   // check if the product is already in the cart
    //   const foundIndex = this.cart.findIndex(
    //     (elem) => elem.variant.id === variant.id
    //   );
    //   if (foundIndex > -1) {
    //     this.cart[foundIndex].quantity += quantity;
    //   } else {
    //     this.cart.push({ product, variant, quantity });
    //   }
    //   this.saveCart();
    // },
  },
};
</script>

<style></style>
