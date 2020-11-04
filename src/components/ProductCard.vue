<template>
  <div
    class="relative border rounded-lg w-4/5 sm:w-2/5 md:w-1/3 shadow-lg sm:m-1 mb-3 overflow-hidden pb-10"
  >
    <div>
      <img
        :src="product.image ? product.image.url : '/no-image-icon.png'"
        alt
      />

      <div>
        <div class="relative flex">
          <div class="flex flex-col">
            <div class="pt-2 px-2 flex flex-col">
              <h3>{{ product.name }}</h3>
              <div v-if="product.variation_ids.length === 1">
                <p>{{ formattedPrice }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="px-2 pb-1">
          <p v-if="product.description">{{ product.description }}</p>
        </div>
      </div>
      <div
        class="flex bg-purple-200 h-12 md:h-10 items-center absolute bottom-0 w-full"
      >
        <div
          class="flex flex-grow items-center justify-center p-1 h-full hover:bg-purple-400"
          v-on:click="addToCart"
        >
          Add to Cart
        </div>
        <div>
          <div
            class="flex flex-row border h-12 md:h-10 w-24 rounded-lg border-gray-400 relative"
          >
            <button
              class="font-semibold border-r bg-purple-600 hover:bg-purple-700 text-white border-gray-400 h-full w-20 flex rounded-l focus:outline-none cursor-pointer"
              v-on:click="decrementQuantity"
            >
              <span class="m-auto">-</span>
            </button>
            <input
              type="hidden"
              class="md:p-2 p-1 text-xs md:text-base border-gray-400 focus:outline-none text-center"
              readonly
              name="custom-input-number"
            />
            <div
              class="bg-white w-24 text-xs md:text-base flex items-center justify-center cursor-default"
            >
              <span>{{ quantity }}</span>
            </div>
            <button
              class="font-semibold border-l bg-purple-600 hover:bg-purple-700 text-white border-gray-400 h-full w-20 flex rounded-r focus:outline-none cursor-pointer"
              v-on:click="incrementQuantity"
            >
              <span class="m-auto">+</span>
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- {{JSON.stringify(product)}} -->
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      _selectedVariant: "",
      quantity: 1,
      showDetails: false,
    };
  },
  computed: {
    selectedVariant() {
      return (
        this.product.variations.find((variant) => {
          variant.id === this._selectedVariant;
        }, this) || this.product.variations[0]
      );
    },
    formattedPrice() {
      return this.selectedVariant.pricing_type === "VARIABLE_PRICING"
        ? "var price"
        : `$${this.selectedVariant.price_money.amount / 100}`;
    },
  },
  methods: {
    ...mapActions(["addProductToCart"]),
    incrementQuantity() {
      if (this.quantity > 4) {
        this.quantity = 5;
      } else {
        this.quantity++;
      }
    },
    decrementQuantity() {
      if (this.quantity < 2) {
        this.quantity = 1;
      } else {
        this.quantity--;
      }
    },
    addToCart() {
      this.addProductToCart({
        product: this.product,
        variant: this.selectedVariant,
        quantity: this.quantity,
      });
    },
  },
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style></style>
