<template>
    <header class="admin-header">
        This is header
    </header>
</template>


<script type="text/babel">

    import Auth from '../../../services/auth'

    export default {
        data() {
            return {
                'header' : 'header'
            }
        },
        methods : {
            logout(){
                Auth.logout().then(() => {
                    this.$router.replace('/login')
                })
            }
        }

    }
</script>