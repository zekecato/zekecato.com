<template>
  <layout>
    <div class="pagecontent">
      <div v-html="$page.data.content"></div>
      <hr class="m-2" />
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
export default {
  metaInfo() {
    return {
      title: this.$page.data.title,
    };
  },
};
</script>

<style></style>
