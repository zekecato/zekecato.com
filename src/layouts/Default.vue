<template>
  <div>
    <SiteHeader/>
    <SiteNav/>

    <slot/>

  </div>
</template>

<style>
  h1 {
    @apply text-4xl
  }

  h2 {
    @apply text-2xl
  }

  a {
    @apply text-teal-800 font-bold
  }

  a:hover {
    @apply underline
  }

  .antilink {
    @apply text-black;
    text-decoration: none !important;
  }

  .featuredimage {
    @apply py-4 px-8 bg-gray-300
  }

  .pagecontent {
    @apply px-12 pt-3
  }
</style>

<script>
import SiteHeader from '~/components/SiteHeader.vue'
import SiteNav from '~/components/SiteNav.vue'
export default {
  components: {
    SiteHeader,
    SiteNav,
  }
}
</script>