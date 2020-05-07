<template>
  <layout>
    <div class="pagecontent">
      <div v-html="$page.data.content"></div>
      <hr class="m-2" />
      <MaskPay class="m-auto" />
    </div>
  </layout>
</template>

<page-query>
query WordPressPage ($id: ID!) {
  data: wordPressPage (id: $id)  {
        id,
        title,
        content,
        slug
    },
    
}
</page-query>

<script>
import MaskPay from "~/components/MaskPay.vue";

export default {
  components: {
    MaskPay
  },
  metaInfo() {
    return {
      title: this.$page.data.title
    };
  }
};
</script>

<style>
</style>