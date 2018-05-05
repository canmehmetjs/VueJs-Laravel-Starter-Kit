<template>
    <div class="template-container">
        <admin-header></admin-header>
        <transition name="fade">
            <router-view></router-view>
        </transition>
        <admin-footer></admin-footer>
    </div>
</template>

<script type="text/babel">

    import AdminHeader from './partials/adminHeader.vue'
    import AdminFooter from './partials/adminFooter.vue'

    export default {
        data() {
            return {
                'header': 'header'
            }
        },
        components: {
           'admin-header' : AdminHeader,
           'admin-footer' : AdminFooter
        }
    }
</script>