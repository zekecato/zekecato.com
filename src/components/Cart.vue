<template>
  <div>
    <div>
      <div v-on:click="showCart = !showCart" class="w-16 h-10">
        {{ showCart ? "Hide Cart" : "View Cart" }} {{ cartQuantitySum }}
      </div>
    </div>
    <div v-if="showCart" class="bg-white w-full rounded-lg">
      <cart-row
        v-for="line in cart"
        :line-data="line"
        :key="line.product.id"
      ></cart-row>
      {{ JSON.stringify(this.cart) }}
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import CartRow from "./CartRow.vue";
export default {
  components: {
    "cart-row": CartRow,
  },
  data() {
    return {
      showCart: false,
    };
  },
  computed: {
    ...mapState({
      cart: "cart",
    }),
    cartQuantitySum: function() {
      const cartQuantity = this.cart.reduce((accumulator, item) => {
        return accumulator + item.quantity;
      }, 0);
      return cartQuantity;
    },
  },
};
</script>

<style></style>
