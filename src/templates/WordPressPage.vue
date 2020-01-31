<template>
  <Layout>
      <img class="featuredimage flex-none" v-if="$page.data.featuredMedia" :src="$page.data.featuredMedia.sourceUrl" :alt="$page.data.featuredMedia.altText"/>
      <div class="pagecontent bg-gray-100 flex-grow" v-html="$page.data.content"></div>
  </Layout>
</template>

<page-query>
query WordPressPage ($path: String!) {
  data: wordPressPage (path: $path)  {
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
  metaInfo () {
    return {
      title: this.$page.data.title
    }
  }
}
</script>
