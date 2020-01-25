<template>
  <Layout>
    <b-img class="featuredimage" v-if="$page.data.featuredMedia" :src="$page.data.featuredMedia.sourceUrl" :alt="$page.data.featuredMedia.altText" fluid></b-img>
    <div class="pagecontent" v-html="$page.data.content"></div>
  </Layout>
</template>

<page-query>
query ITConsultingPageData {
  data: wordPressPage (id:21)  {
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
    title: "IT Consulting"
  }
}
</script>
