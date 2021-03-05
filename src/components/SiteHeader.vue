<template>
        <div class="flex flex-col sm:flex-row px-3 sm:pb-3 justify-between bg-gray-100">
            <div class="text-center sm:text-left sm:w-5/6 md:w-11/12">
                <g-link tag="div" to="/" class="text-3xl sm:text-5xl font-semibold cursor-pointer px-1">
                    Zeke Cato Enterprise
                </g-link>
                <div class="subtitleparent flex flex-wrap justify-center sm:justify-start -mt-2">
                    <div>
                        IT Consulting
                    </div>
                    <div>:</div>
                    <div>
                        Math, science, and technology tutoring
                    </div>
                </div>
            </div>
            <div class="flex flex-row justify-center items-center sm:flex-col sm:flex-wrap sm:mt-2 sm:mr-8 sm:h-24">
                <a href="mailto:zeke@zekecato.com" 
                   id="envelope" 
                   class="p-1 text-black"
                   content="<span style='user-select:all;'>zeke@zekecato.com</span>"
                   v-tippy="{
                       placement: 'left',
                       arrow: true,
                       distance: 5,
                       animation: 'shift-toward',
                       theme: 'dark',
                       interactive: true,
                       appendTo: 'parent',
                       flipBehavior: ['left','bottom'],
                   }">
                    <fontawesome :icon="['fas','envelope']" size='2x'></fontawesome>
                </a>
                <a href="https://github.com/zekecato/zekecato.com" class="p-1 text-black sm:ml-1 sm:order-last">
                    <fontawesome :icon="['fab','github-square']" size='2x'></fontawesome>
                </a>
                <a href="https://www.linkedin.com/in/roy-zeke-schultz-cato-8665a453/" 
                   id="linkedin" 
                   class="p-1 text-black">
                    <div content="Check out my LinkedIn profile..."
                       v-tippy="{
                       placement: 'right',
                       arrow: true,
                       distance: 10,
                       animation: 'shift-toward',
                       theme: 'dark',
                       interactive: true,
                       appendTo: 'parent',
                       flipBehavior: ['right','left','bottom'],
                    }"> 
                        <fontawesome :icon="['fab','linkedin']" size='2x'></fontawesome>
                    </div>
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
        @apply px-1 text-base text-gray-600;
    }

    @screen sm {
        #envelope {
            font-size: .9rem;
        }
    }

    

</style>