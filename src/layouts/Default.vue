<template>
  <div class="relative flex flex-col justify-start items-center min-h-screen">
    <SiteHeader class="w-full"/>
    <SiteNav class="w-full"/>
    <div class="flex flex-col items-center flex-grow mb-16 pt-3 sm:pl-2 sm:pr-1 w-full max-w-5xl">
      <div class="flex flex-col flex-grow w-full py-2">
        <slot/>
      </div>
    </div>
    <SiteFooter class="absolute bottom-0 inset-x-0"/>
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

  h3 {
    @apply text-xl
  }

  p {
    @apply pb-2
  }

  .featuredimage {
    @apply pb-4 px-8
  }

  .pagecontent {
    @apply mx-6 mt-2 px-6 pb-3 flex-grow
  }

  .pagecontent ul {
    @apply list-disc ml-6
  }

  .pagecontent a {
    @apply text-teal-800 font-bold
  }

  .pagecontent a:hover {
    @apply underline
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