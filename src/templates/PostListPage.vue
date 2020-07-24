<template>
  <Layout>
    <img
      class="featuredimage flex-none"
      v-if="$page.data.featuredMedia"
      :src="$page.data.featuredMedia.sourceUrl"
      :alt="$page.data.featuredMedia.altText"
    />
    <div class="pagecontent flex-grow">
      <div class="inline" v-html="$page.data.content"></div>
      <div v-for="{node: post} in $page.posts.edges" :key="post.id">
        <hr />
        <h3 class="font-bold" v-html="post.title"></h3>
        <div v-html="post.content"></div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query WordPressPage ($id: ID!, $catId: ID!) {
  data: wordPressPage (id: $id)  {
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
  },
  posts: allWordPressPost (filter: { categories: { contains: [$catId] }}) {
    edges {
      node {
        id,
        content,
        title
      }
    }
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
