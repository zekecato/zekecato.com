<template>
    <nav class="">
        <ul class="bg-black h-10 flex justify-center sm:justify-start items-center p-2 pl-4 sm:px-4">
            <g-link exact-active-class="focuslink" 
                    class="navlink" 
                    to="/" 
                    tag="li">
                Home
            </g-link>
            <g-link v-for="{ node } in $static.navLinks.edges" :key="node.id" 
                    exact-active-class="focuslink" 
                    class="navlink" 
                    :to="node.slug"
                    tag="li">
                {{ node.title }}
            </g-link>
            <div class="navlink flex flex-col items-center" @click="toggleExtraLinks">

                <div class="flex">
                    <div>Extra Links</div>
                    <div class="pl-2 menucaret" :class="{'menucaret-open':showExtraLinks}">
                        <fontawesome :icon="['fas','caret-up']"></fontawesome>
                    </div>
                </div>
            </div>
        </ul>
    </nav>
</template>

<static-query>
    query NavLinks {
        navLinks:allWordPressPage (filter: {status: {eq: "publish"}}) {
            edges {
                node {
                    id,
                    title,
                    slug
                }
            }
        }
    }
</static-query>

<script>
export default {
  data () {
    return {showExtraLinks: false}
  },
  methods: {
      toggleExtraLinks () {
          this.showExtraLinks = !this.showExtraLinks;
      }
  }
}
</script>

<style scoped>
    
    .focuslink {
        @apply bg-gray-700
    }
    
    .navlink {
        @apply text-white px-4 py-3 font-bold cursor-pointer select-none;
        transition: 0.2s;
    }

    .menucaret {
        transition: 0.3s;
    }

    .menucaret-open {
        transform: rotate(180deg) translateY(-2px) translateX(-6px);
    }
    
    .navlink:hover {
        @apply bg-gray-600
    }

    .navlink:active {
        @apply bg-gray-800
    }

</style>