<template>
  <nav class="bg-black">
    <div
      class="flex flex-col sm:flex-row text-white justify-center sm:justify-start items-center"
    >
      <div class="sm:hidden cursor-pointer" @click="menuOpen = !menuOpen">
        <fontawesome
          class="my-2"
          :icon="['fas', 'bars']"
          size="lg"
        ></fontawesome>
      </div>
      <ul
        class="sm:h-auto flex flex-col sm:flex-row sm:px-4 sm:pb-0 items-stretch overflow-hidden sm:overflow-visible"
        :class="{ 'h-0': !menuOpen }"
      >
        <NavButton
          v-for="{ node } in $static.navLinks.edges"
          :key="node.id"
          :to="node.slug"
          >{{ node.title }}</NavButton
        >
        <NavButton to="/mailing-list">Mailing List</NavButton>
        <NavButton href="http://sensitivelysimple.com"
          >Sensitively Simple</NavButton
        >
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
import NavButton from "./NavButton";

export default {
  components: {
    NavButton,
  },
  data() {
    return {
      menuOpen: false,
    };
  },
};
</script>

<style></style>
