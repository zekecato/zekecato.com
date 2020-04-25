<template>
  <layout>
    <div class="pagecontent">
      <div v-html="$page.data.content"></div>
      <hr class="m-2" />
      <TipsForTips />
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
import TipsForTips from "~/components/TipsForTips.vue";

export default {
  components: {
    TipsForTips
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