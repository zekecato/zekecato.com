<template>
  <Layout class="">
    <div class="pagecontent">
      <h1>ZekeCato.com :)</h1>
      <ul>
        <li v-for="{ node } in $page.allWordPressPost.edges" :key="node.id">
          <Post :post="node" />
        </li>
      </ul>
    </div>
    <Pager :info="$page.allWordPressPost.pageInfo"/>
  </Layout>
</template>

<page-query>
query Home ($page: Int) {
  allWordPressPost (page: $page, perPage: 10) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        title
        path
        excerpt
      }
    }
  }
}
</page-query>

<script>
import { Pager } from 'gridsome'
import Post from '~/components/Post.vue'

export default {
  components: {
    Pager,
    Post
  },
  metaInfo: {
    title: 'ZekeCato.com :)'
  }
}
</script>
