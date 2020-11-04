<template>
  <div class="h-24 relative shadow my-1 flex flex-row">
    <div
      v-on:click="removeProductFromCart(lineData)"
      class="absolute top-0 right-0 h-6 w-6 "
    >
      X
    </div>
    <img
      :src="product.image ? product.image.url : '/no-image-icon.png'"
      alt
      class="h-24 w-24 p-1"
    />
    <div>
      <div class="text-bold">{{ product.name }}</div>
      <div>{{ priceFormatted }}</div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: {
    lineData: Object,
  },
  computed: {
    product() {
      return this.lineData.product;
    },
    variant() {
      return this.lineData.variant;
    },

    quantity() {
      return this.lineData.quantity;
    },
    priceFormatted() {
      return `$${this.variant.price_money.amount / 100}`;
    },
  },
  methods: {
    ...mapActions(["removeProductFromCart"]),
  },
};
</script>

<style></style>
