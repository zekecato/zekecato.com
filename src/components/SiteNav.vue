<template>
    <nav class="bg-black h-10 ">
        <ul class="flex text-white ">
            <li class="p-1" v-for="{ node } in $static.navLinks.edges" :key="node.id">
                <g-link class="antilink" :to="node.slug">
                    <span class="text-white">{{ node.title }}</span>
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