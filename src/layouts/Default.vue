<template>
  <div>
    <SiteHeader/>
    

    <div class="container">
      <slot/>
    </div>

  </div>
</template>

<style>

</style>

<script>
import SiteHeader from '~/components/SiteHeader.vue'
export default {
  components: {
    SiteHeader,
  }
}
</script>