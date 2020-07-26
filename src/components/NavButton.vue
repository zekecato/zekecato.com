<template>
  <g-link
    v-if="!!to"
    :to="to"
    class="navlink"
    active-class="focuslink"
    exact-active-class="focuslink"
  >
    <slot />
  </g-link>
  <a v-else-if="!!href" :href="href" class="navlink">
    <slot />
  </a>
  <div v-else>
    <slot />
  </div>
</template>

<script>
export default {
  name: "NavButton",
  props: ["to", "href", "sublinks"]
};
</script>

<style>
.focuslink {
  @apply bg-gray-700;
}

.navlink {
  @apply py-1 mb-1 px-5 font-bold cursor-pointer select-none text-center flex flex-col items-center;
  transition: 0.2s;
}

@screen sm {
  .navlink {
    @apply px-4 py-3 -my-1 flex-row;
  }
}
.navlink:hover {
  @apply bg-gray-600;
}

.navlink:active {
  @apply bg-gray-800;
}
</style>
