<template>
    <nav class="bg-black h-12 ">
        <ul class="flex pt-2 px-3 navlinks">
            <li>
                <g-link class="antilink" to="/">
                    <span class="navlinktext">Home</span>
                </g-link>
            </li>
            <li v-for="{ node } in $static.navLinks.edges" :key="node.id">
                <g-link class="antilink" :to="node.slug">
                    <span class="navlinktext">{{ node.title }}</span>
                </g-link>
            </li>
        </ul>
    </nav>
</template>

<static-query>
    query NavLinks {
        navLinks:allWordPressPage {
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
    .navlinks>li {
        @apply pr-4 py-1 
    }

    .navlinktext {
        @apply text-white 
    }
</style>