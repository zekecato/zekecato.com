<template>
  <Layout>
    <img class="featuredimage" :src="$page.pageData.featuredMedia.sourceUrl" :alt="$page.pageData.featuredMedia.altText"/>
    <div class="pagecontent bg-gray-100" v-html="$page.pageData.content"></div>
  </Layout>
</template>

<page-query>
query AboutPageData {
  pageData: wordPressPage (id:54)  {
    title,
    content,
    featuredMedia {
      title,
      altText,
      sourceUrl
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: "About"
  }
}
</script>

