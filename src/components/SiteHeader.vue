<template>
        <div class="flex flex-col sm:flex-row px-3 sm:pb-3 justify-between h-auto">
            <div class="text-center sm:text-left sm:w-5/6 md:w-4/6">
                <g-link to="/" class="text-3xl sm:text-5xl font-semibold antilink px-1">
                    <span class="">Zeke Cato Enterprise</span>
                </g-link>
                <div class="subtitleparent flex flex-wrap justify-center sm:justify-start -mt-2">
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
                   class="p-1 antilink"
                   content="<span style='user-select:all; font-weight:bold;'>zeke@zekecato.com</span>"
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
                    <fontawesome :icon="['fas','envelope']" size='2x' />
                </a>
                <a href="https://www.linkedin.com/in/roy-zeke-schultz-cato-8665a453/" 
                   id="linkedin" 
                   class="p-1 antilink">
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
                        <fontawesome :icon="['fab','linkedin']" size='2x' />
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

    @media (min-width: 640px){
        #linkedin {
            font-size: 1.1rem;
        }
    }

    

</style>