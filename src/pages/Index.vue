<template>
  <Layout>
    <img :src="$page.data.featuredMedia.sourceUrl" :alt="$page.data.featuredMedia.altText" fluid/>
    <h1>{{$page.data.title}}</h1>
    <div v-html="$page.data.content"></div>
  </Layout>
</template>

<page-query>
query AboutPageData {
  data: wordPressPage (id:54)  {
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
