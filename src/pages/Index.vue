<template>
  <Layout>
    <div class="w-full flex flex-col items-center">
      <div class="flex flex-col items-center max-w-5xl">
        <img class="featuredimage" :src="$page.pageData.featuredMedia.sourceUrl" :alt="$page.pageData.featuredMedia.altText"/>
        <div class="pagecontent" v-html="$page.pageData.content"></div>
      </div>
    </div>
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

