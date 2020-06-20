<template>
  <form class="flex flex-col items-center border border-black rounded-lg p-1 w-3/5">
    <div class="flex">
      <div class="flex flex-col items-center">
        <h3>Choose your sliding scale price</h3>
        <label for="price-slider">{{'$'+ maskPrice.toString()}}</label>
        <input
          id="price-slider"
          class="rounded-lg overflow-hidden appearance-none bg-gray-400 h-3 w-128"
          type="range"
          min="5"
          max="10"
          step=".5"
          value="5"
          v-model="maskPrice"
        />
        <div id="quantity-select">
          <div class="flex items-center my-1">
            <label for="quantity" class="text-lg ml-5 mb-1">Quantity:</label>
            <input
              type="number"
              id="quantity"
              class="ml-1 w-10 border-black p-1 text-center"
              v-model="quantity"
            />
          </div>
        </div>
        <div class="pb-1">
          <label class="flex justify-start items-start">
            <div
              class="bg-white border-2 rounded w-6 h-6 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-blue-500"
              :class="{ 'border-black' : addShipping, 'border-gray-400': !addShipping }"
            >
              <input type="checkbox" class="opacity-0 absolute" v-model="addShipping" />
              <svg
                class="fill-current hidden w-4 h-4 text-black pointer-events-none"
                viewBox="0 0 20 20"
              >
                <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
              </svg>
            </div>
            <div class="select-none">Add Shipping ($8 USPS Priority Mail)</div>
          </label>
        </div>
      </div>
    </div>
    <button
      type="submit"
      @click="onTipSubmit"
      class="w-36 flex-grow-none text-xl bg-black text-white p-2 rounded-lg"
    >
      <span :hidden="loading">Pay {{'$'+ total.toString()}}</span>
      <div class="sk-circle-fade m-6" :hidden="!loading">
        <div class="sk-circle-fade-dot"></div>
        <div class="sk-circle-fade-dot"></div>
        <div class="sk-circle-fade-dot"></div>
        <div class="sk-circle-fade-dot"></div>
        <div class="sk-circle-fade-dot"></div>
        <div class="sk-circle-fade-dot"></div>
        <div class="sk-circle-fade-dot"></div>
        <div class="sk-circle-fade-dot"></div>
        <div class="sk-circle-fade-dot"></div>
        <div class="sk-circle-fade-dot"></div>
        <div class="sk-circle-fade-dot"></div>
        <div class="sk-circle-fade-dot"></div>
      </div>
    </button>
  </form>
</template>

<script>
import axios from "axios";
const api = axios.create({
  baseURL: process.env.URL
});

export default {
  data() {
    return {
      maskPrice: 5,
      quantity: 1,
      loading: false,
      note: "",
      addShipping: false
    };
  },
  computed: {
    total: function() {
      return this.maskPrice * this.quantity + (this.addShipping ? 8 : 0);
    }
  },
  methods: {
    onTipSubmit: async function(event) {
      event.preventDefault();
      this.loading = true;
      try {
        const { data } = await api.post(
          "/.netlify/functions/create-square-checkout",
          {
            sku: "MASK",
            details: {
              amount: this.maskPrice * 100,
              quantity: this.quantity,
              description: this.note,
              addShipping: this.addShipping
            }
          }
        );
        window.location.href = data.data.checkout.checkout_page_url;
      } catch (e) {
        console.log(e);
      } finally {
        this.loading = false;
      }
    }
  }
};
</script>

<style>
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

#quantity,
#note {
  transition: 0.2s;
  @apply border rounded-lg;
}

#quantity:focus {
  @apply border-2;
}

input[type="range"]::-webkit-slider-thumb {
  width: 15px;
  -webkit-appearance: none;
  appearance: none;
  height: 15px;
  cursor: ew-resize;
  background: black;
  box-shadow: -405px 0 0 400px #605e5c;
  border-radius: 50%;
}

input[type="radio"] {
  display: none;
}

input[type="radio"] + label {
  @apply flex items-center text-lg;
}

input + label span {
  @apply w-6 h-6 inline-block mr-2 rounded-full border;
}

input[type="radio"] + label span {
  transition: background 0.2s, transform 0.2s;
}

input[type="radio"] + label span:hover,
input[type="radio"] + label:hover span {
  @apply bg-gray-500;
  box-shadow: 0px 0px 0px 2px white inset;
}

input[type="radio"]:checked + label span {
  @apply bg-black;
  box-shadow: 0px 0px 0px 2px white inset;
}

input[type="radio"]:checked + label {
  @apply font-bold;
}

input:checked + svg {
  display: block;
}

:root {
  --sk-size: 40px;
  --sk-color: #333;
}
.sk-circle-fade {
  width: var(--sk-size);
  height: var(--sk-size);
  position: relative;
}

.sk-circle-fade-dot {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
}

.sk-circle-fade-dot:before {
  content: "";
  display: block;
  width: 15%;
  height: 15%;
  background-color: var(--sk-color);
  border-radius: 100%;
  animation: sk-circle-fade 1.2s infinite ease-in-out both;
}

.sk-circle-fade-dot:nth-child(1) {
  transform: rotate(30deg);
}
.sk-circle-fade-dot:nth-child(2) {
  transform: rotate(60deg);
}
.sk-circle-fade-dot:nth-child(3) {
  transform: rotate(90deg);
}
.sk-circle-fade-dot:nth-child(4) {
  transform: rotate(120deg);
}
.sk-circle-fade-dot:nth-child(5) {
  transform: rotate(150deg);
}
.sk-circle-fade-dot:nth-child(6) {
  transform: rotate(180deg);
}
.sk-circle-fade-dot:nth-child(7) {
  transform: rotate(210deg);
}
.sk-circle-fade-dot:nth-child(8) {
  transform: rotate(240deg);
}
.sk-circle-fade-dot:nth-child(9) {
  transform: rotate(270deg);
}
.sk-circle-fade-dot:nth-child(10) {
  transform: rotate(300deg);
}
.sk-circle-fade-dot:nth-child(11) {
  transform: rotate(330deg);
}
.sk-circle-fade-dot:nth-child(1):before {
  animation-delay: -1.1s;
}
.sk-circle-fade-dot:nth-child(2):before {
  animation-delay: -1s;
}
.sk-circle-fade-dot:nth-child(3):before {
  animation-delay: -0.9s;
}
.sk-circle-fade-dot:nth-child(4):before {
  animation-delay: -0.8s;
}
.sk-circle-fade-dot:nth-child(5):before {
  animation-delay: -0.7s;
}
.sk-circle-fade-dot:nth-child(6):before {
  animation-delay: -0.6s;
}
.sk-circle-fade-dot:nth-child(7):before {
  animation-delay: -0.5s;
}
.sk-circle-fade-dot:nth-child(8):before {
  animation-delay: -0.4s;
}
.sk-circle-fade-dot:nth-child(9):before {
  animation-delay: -0.3s;
}
.sk-circle-fade-dot:nth-child(10):before {
  animation-delay: -0.2s;
}
.sk-circle-fade-dot:nth-child(11):before {
  animation-delay: -0.1s;
}

@keyframes sk-circle-fade {
  0%,
  39%,
  100% {
    opacity: 0;
    transform: scale(0.6);
  }
  40% {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
