<template>
     <header>
        <div class="header_container">
            <div class="container-fluid">
                <div class="loycha_navigation_container">
                    <div class="loycha_logo" data-kui-anim="fadeInDown">
                        <router-link :to="'/'">
                              <img src="/assets/img/logo-color.svg" >
                        </router-link>
                    </div>
                    <div class="loycha_navigation" >
                        <div class="navigation_middle">
                            <ul>
                                <li class="has-dropdown nav-highlighted">
                                   <router-link :to="'/'">
                                         Home
                                    </router-link>

                                </li>
                                <li class="has-dropdown nav-highlighted">
                                    <router-link :to="'/form-elements'">
                                         Form Elements
                                    </router-link>
                                   
                                </li>
                               
                            </ul>
                        </div>
                        <div class="navigation_right" data-kui-anim="fadeIn">
                            <ul>
                                <li>
                                    <router-link :to="'/login'" class="signup_button">
                                         Login
                                    </router-link>
                                   
                                </li>
                                <li>
                                    <router-link :to="'/register'" class="">
                                         Signup
                                    </router-link>
                                    
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                

                
            </div>
        </div>
    </header>
</template>


<script type="text/babel">

    import Auth from '../../../services/auth'

    export default {
        data() {
            return {
                
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