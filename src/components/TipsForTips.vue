<template>
  <form class="flex flex-col items-center">
    <div class="flex">
      <div class="flex flex-col items-center">
        <h3>Select Tip Amount</h3>
        <div id="tip-selection">
          <div class="flex items-center mr-4 mb-4">
            <input type="radio" id="tft05" name="tip" value="TFT05" v-model="tipSelection" />
            <label for="tft05">
              <span class="border-black flex-no-shrink"></span>$5
            </label>
          </div>
          <div class="flex items-center mr-4 mb-4">
            <input type="radio" id="tft10" name="tip" value="TFT10" v-model="tipSelection" />
            <label for="tft10">
              <span class="border-black flex-no-shrink"></span>$10
            </label>
          </div>
          <div class="flex items-center mr-4 mb-4">
            <input type="radio" id="tft20" name="tip" value="TFT20" v-model="tipSelection" />
            <label for="tft20">
              <span class="border-black flex-no-shrink"></span>$20
            </label>
          </div>
          <div class="flex flex-col">
            <div class="flex items-center mr-4">
              <input
                type="radio"
                id="tftcustom"
                name="tip"
                value="TFTCUSTOM"
                v-model="tipSelection"
              />
              <label for="tftcustom">
                <span class="border-black flex-no-shrink"></span>Enter
                custom amount
              </label>
            </div>
            <div class="flex items-center mr-4">
              <label for="custom-tip" class="text-lg ml-5 mb-1">$</label>
              <input
                type="number"
                id="custom-tip"
                class="ml-1 w-24 border-black p-1"
                v-model="customTip"
                :disabled="tipSelection !== 'TFTCUSTOM'"
              />
            </div>
          </div>
        </div>
      </div>
      <button
        type="submit"
        @click="onTipSubmit"
        class="w-36 flex-grow-none text-xl bg-black text-white p-3 rounded-lg"
      >
        <span :hidden="loading">Send a tip!</span>
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
    </div>
    <div class="flex self-stretch items-center pt-1 ml-20">
      <label for="note" class="text-lg ml-5 mb-1">Optional note</label>
      <input type="text" id="note" class="ml-1 w-56 border-black p-1" v-model="note" />
    </div>
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
      tipSelection: "",
      customTip: 0.5,
      loading: false,
      note: ""
    };
  },
  methods: {
    onTipSubmit: async function(event) {
      event.preventDefault();
      if (this.tipSelection === "") return null;
      if (this.tipSelection === "TFTCUSTOM" && this.customTip < 0.5) {
        alert("please enter an amount of at least 50 cents");
        return null;
      }
      this.loading = true;
      try {
        const { data } = await api.post("/.netlify/functions/create-checkout", {
          sku: this.tipSelection,
          details: { amount: this.customTip * 100, description: this.note }
        });

        const stripe = Stripe(data.publishableKey);
        const { error } = await stripe.redirectToCheckout({
          sessionId: data.sessionId
        });

        if (error) {
          console.error(error);
        }
        console.log(resp);
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

#custom-tip,
#note {
  transition: 0.2s;
  @apply border rounded-lg;
}

#custom-tip:focus {
  @apply border-2;
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
