<template>
  <Layout>
    <img
      class="featuredimage flex-none"
      v-if="$page.data.featuredMedia"
      :src="$page.data.featuredMedia.sourceUrl"
      :alt="$page.data.featuredMedia.altText"
    />
    <div class="pagecontent flex-grow">
      <h1>{{$page.data.title}}</h1>
      <div class="inline" v-html="$page.data.content"></div>
    </div>
  </Layout>
</template>

<page-query>
query WordPressPost ($id: ID!) {
  data: wordPressPost (id: $id)  {
    id,
    title,
    content,
    featuredMedia {
      title,
      altText,
      sourceUrl
    },
    slug,
    status
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.data.title
    };
  }
};
</script>
