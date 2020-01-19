<template>
  <Layout>
    <b-img v-if="$page.data.featuredMedia" :src="$page.data.featuredMedia.sourceUrl" :alt="$page.data.featuredMedia.altText" fluid></b-img>
    <h1>{{$page.data.title}}</h1>
    <div v-html="$page.data.content"></div>
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
