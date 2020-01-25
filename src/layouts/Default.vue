<template>
  <div class="flex flex-col justify-between min-h-screen">
    <SiteHeader/>
    <SiteNav/>

    <slot/>

    <SiteFooter/>
  </div>
</template>

<style>
  body {
    @apply bg-gray-300
  }

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

  .featuredimage {
    @apply py-4 px-8
  }

  .pagecontent {
    @apply mx-6 px-6 mt-2 py-2 bg-gray-100 flex-grow
  }
</style>

<script>
import SiteHeader from '~/components/SiteHeader.vue'
import SiteNav from '~/components/SiteNav.vue'
import SiteFooter from '~/components/SiteFooter.vue'

export default {
  components: {
    SiteHeader,
    SiteNav,
    SiteFooter
  }
}
</script>