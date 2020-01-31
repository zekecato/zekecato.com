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
            <a href="http://sensitivelysimple.com" class="navlink">Sensitively Simple</a>
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
    
    .navlink:hover {
        @apply bg-gray-600
    }

    .navlink:active {
        @apply bg-gray-800
    }

</style>