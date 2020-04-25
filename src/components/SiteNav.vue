<template>
  <nav class="bg-black">
    <div class="flex flex-col sm:flex-row text-white justify-center sm:justify-start items-center">
      <div class="sm:hidden cursor-pointer" @click="menuOpen=!menuOpen">
        <fontawesome class="my-2" :icon="['fas','bars']" size="lg"></fontawesome>
      </div>
      <ul
        class="sm:h-auto flex flex-col sm:flex-row sm:px-4 sm:pb-0 items-stretch overflow-hidden sm:overflow-visible"
        :class="{'h-0':!menuOpen}"
      >
        <g-link
          v-for="{ node } in $static.navLinks.edges.filter( ({ node }) => node.slug !== 'tips-for-tips' )"
          :key="node.id"
          exact-active-class="focuslink"
          class="navlink"
          :to="node.slug"
          tag="li"
        >{{ node.title }}</g-link>
        <g-link
          to="/tips-for-tips"
          class="navlink"
          tag="li"
          exact-active-class="focuslink"
        >Tips For Tips!</g-link>
        <g-link
          to="/mailing-list"
          class="navlink"
          tag="li"
          exact-active-class="focuslink"
        >Mailing List</g-link>
        <a href="http://sensitivelysimple.com" class="navlink">Sensitively Simple</a>
      </ul>
    </div>
  </nav>
</template>

<static-query>
    query NavLinks {
        navLinks:allWordPressPage (sortBy: "menuOrder", order:ASC filter: {status: {eq: "publish"}}) {
            edges {
                node {
                    id,
                    title,
                    slug,
                    menuOrder
                }
            }
        }
    }
</static-query>

<script>
export default {
  data() {
    return {
      menuOpen: false
    };
  }
};
</script>

<style scoped>
.focuslink {
  @apply bg-gray-700;
}

.navlink {
  @apply py-1 mb-1 px-5 font-bold cursor-pointer select-none text-center;
  transition: 0.2s;
}

@screen sm {
  .navlink {
    @apply px-4 py-3 -my-1;
  }
}
.navlink:hover {
  @apply bg-gray-600;
}

.navlink:active {
  @apply bg-gray-800;
}
</style>