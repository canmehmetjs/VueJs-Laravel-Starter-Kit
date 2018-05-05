<template>
    <div class="template-container">
        <front-header></front-header>
        
        <div class="page-container">
            <transition name="fade" mode="out-in">
                <router-view></router-view>
            </transition>
        </div>
        
        <front-footer></front-footer>
    </div>
</template>

<script type="text/babel">

    import FrontHeader from './partials/frontHeader.vue'
    import FrontFooter from './partials/frontFooter.vue'

    export default {
        data() {
            return {
                'header': 'header'
            }
        },
        components: {
           'front-header' : FrontHeader,
           'front-footer' : FrontFooter
        }
    }
</script>
