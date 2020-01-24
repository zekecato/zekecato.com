<template>
        <div class="flex flex-col sm:flex-row p-3 justify-between h-auto">
            <div class="text-center sm:text-left sm:w-5/6 md:w-4/6">
                <div class="text-3xl font-semibold px-1">Zeke Cato Enterprise</div>
                <div class="subtitleparent flex flex-wrap justify-center sm:justify-start text-lg text-gray-700">
                    <div>
                        IT Consulting
                    </div>
                    <div>:</div>
                    <div>
                        Math, science, and technology tutoring
                    </div>
                    <div>
                        Sensitively Simple natural body care
                    </div>
                </div>
            </div>
            <div class="flex flex-row justify-center items-center sm:flex-col">
                <a href="mailto:zeke@zekecato.com" 
                   id="envelope" 
                   class="p-1"
                   content="zeke@zekecato.com"
                   v-tippy>
                    <fontawesome :icon="['fas','envelope']" size='2x' />
                </a>
                <a href="https://www.linkedin.com/in/roy-zeke-schultz-cato-8665a453/" 
                   id="linkedin" 
                   class="p-1">
                    <fontawesome :icon="['fab','linkedin']" size='2x' />
                </a>
            </div>
        </div>    
</template>

<script>
export default {
  
}
</script>
    
<style scoped>
    .subtitleparent>*{
        @apply px-1
    }

    @media (min-width: 640px){
        #linkedin {
            font-size: 1.1rem;
        }
    }
</style>