<template>
  <div class="shadow-md my-4 bg-gray-400 rounded-lg">
    <div class="p-3 flex flex-col items-start">
      <div class="py-1 px-2 rounded shadow bg-gray-200">
        <h2 v-html="post.title"></h2>
      </div>
      <div class="bg-gray-200 rounded mt-2 shadow">
        <div class="px-1" v-html="post.content"></div>
      </div>
      <g-link :to="post.path">
        Read More
      </g-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  }
}
</script>
