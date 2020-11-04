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
        v-on:remove-row=""
      ></cart-row>
      {{ JSON.stringify(this.cart) }}
    </div>
  </div>
</template>

<script>
import CartRow from "./CartRow.vue";
export default {
  props: {
    cart: Array,
  },
  components: {
    "cart-row": CartRow,
  },
  data() {
    return {
      showCart: false,
    };
  },
  computed: {
    cartQuantitySum: function() {
      console.log(this.cart);
      const cartQuantity = this.cart.reduce((accumulator, item) => {
        console.log(accumulator, item);
        return accumulator + item.quantity;
      }, 0);
      return cartQuantity;
    },
  },
  methods: {
    removeRow: function() {},
  },
};
</script>

<style></style>
