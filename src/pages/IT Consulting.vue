<template>
  <Layout>

    <div class="flex flex-grow">
      <b-img class="featuredimage" v-if="$page.data.featuredMedia" :src="$page.data.featuredMedia.sourceUrl" :alt="$page.data.featuredMedia.altText" fluid></b-img>
      <div class="pagecontent bg-gray-100" v-html="$page.data.content"></div>
    </div>
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
