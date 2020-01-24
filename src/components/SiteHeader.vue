<template>
        <div class="flex flex-col sm:flex-row p-3 justify-between">
            <div class="text-center sm:text-left">
                <div class="text-3xl">Zeke Cato Enterprise</div>
                <div class="text-lg">IT Consulting — Math, science, and technology tutoring — Sensitively Simple natural body care</div>
            </div>
            <div class="flex flex-row justify-center sm:flex-col text-center">
                <div class="iconlink">
                    <fontawesome :icon="['fas','envelope']" size='2x' />
                </div>
                <div class="iconlink">
                    <fontawesome :icon="['fab','linkedin']" size='2x' />
                </div>
            </div>
        </div>    
</template>

<script>
export default {
  
}
</script>

<style scoped>
    .iconlink {
        @apply p-2;
    }
</style>