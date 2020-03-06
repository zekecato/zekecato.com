<template>
  <layout>
    <div class="pagecontent">
        <h1>Sign up for notices about classes, workshops, and other updates from Zeke Cato</h1>
        <!-- Begin Mailchimp Signup Form -->
        <div id="mc_embed_signup">
        <form action="https://SensitivelySimple.us17.list-manage.com/subscribe/post?u=d7c4fb0efbae907bfb52dbfdf&amp;id=0a12e576ba" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
        <div id="mc_embed_signup_scroll">
        
        <div class="indicates-required"><span class="asterisk">*</span> indicates required</div>
        <div class="mc-field-group">
        <label for="mce-EMAIL">Email Address  <span class="asterisk">*</span>
        </label>
        <input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL">
        </div>
        <div class="mc-field-group">
        <label for="mce-FNAME">First Name </label>
        <input type="text" value="" name="FNAME" class="" id="mce-FNAME">
        </div>
        <div class="mc-field-group">
        <label for="mce-LNAME">Last Name </label>
        <input type="text" value="" name="LNAME" class="" id="mce-LNAME">
        </div>
        <div class="mc-field-group input-group">
        <strong>Mailing Lists </strong>
        <ul><li><input type="checkbox" value="1" name="group[8229][1]" id="mce-group[8229]-8229-0" v-model="allLists"><label for="mce-group[8229]-8229-0">All messages related to Zeke Cato Enterprise</label></li>
        <li><input type="checkbox" value="2" name="group[8229][2]" id="mce-group[8229]-8229-1" :disabled="_allLists" v-model="otherLists"><label for="mce-group[8229]-8229-1">Sensitively Simple Natural Body Care</label></li>
        <li><input type="checkbox" value="4" name="group[8229][4]" id="mce-group[8229]-8229-2" :disabled="_allLists" v-model="otherLists"><label for="mce-group[8229]-8229-2">House Shows, Popups, and Workshops</label></li>
        </ul>
        </div>
        <div id="mce-responses" class="clear">
        <div class="response" id="mce-error-response" style="display:none"></div>
        <div class="response" id="mce-success-response" style="display:none"></div>
        <div>{{allLists}}</div>
        </div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
        <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_d7c4fb0efbae907bfb52dbfdf_0a12e576ba" tabindex="-1" value=""></div>
        <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button"></div>
        </div>
        </form>
        </div>
        
        <!--End mc_embed_signup-->
    </div>
  </layout>
</template>

<script>
export default {
    data(){
        return {
            _allLists: false,
            otherLists: []
        }
    },
    computed: {
        allLists: {
            get() {
                return this._allLists;
            },
            set(val) {
                this.otherLists = []
                this._allLists = val
            }
        }
    },
    mounted() {
        //Load mailchimp css
        let mcCss = document.createElement('link')
        mcCss.setAttribute('href','//cdn-images.mailchimp.com/embedcode/classic-10_7.css')
        mcCss.setAttribute('rel','stylesheet')
        mcCss.setAttribute('type','text/css')
        document.head.appendChild(mcCss)
    }
}
</script>

<style>
    #mc_embed_signup {
        @apply bg-gray-200 rounded-lg mt-3 border-gray-400 border
    }

    .indicates-required {
        @apply -mb-4
    }
</style>