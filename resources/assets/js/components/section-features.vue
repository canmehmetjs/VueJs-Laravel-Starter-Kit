<template>
    <div class="box-features">
            <div class="row section-content">
                <template v-for="(feature_item, index) in features" >
                        <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4" :key="feature_item.index" >
                            <div class="box">
                                <template v-if="showIcons">
                                    <div class="box-content">
                                        <img :src="'/static/img/icons/' + feature_item.icon">
                                        <br>
                                    </div>
                                </template>
                            
                                <div class="box-content">  
                                    <h5>{{feature_item.title}}</h5>
                                     <p>{{feature_item.description}}</p>
                                </div>
                            </div>
                        </div>
                </template>
                
            </div>  
                

    </div>
</template>

<script>
    export default {
        name: 'Features_list',
        props: {
            showIcons: {
                type: Boolean
            }
            
        },
        data () {
            return {
                features : [
                    {
                        title : 'Axios Included',
                        description : 'Axios is a great http client library. It uses promises by default and runs on both the client and the server (which makes it appropriate for fetching data during server-side rendering).',
                        icon : 'your_icon_path.svg'
                    },
                    {
                        title : 'VueJS router',
                        description : 'vue-router is the official router for Vue.js. It deeply integrates with Vue.js core to make building Single Page Applications with Vue.js a breeze',
                        icon : 'your_icon_path.svg'
                    },
                    {
                        title : 'Search',
                        description : 'I have included a search option to search through your api request.',
                        icon : 'your_icon_path.svg'
                    },
                    {
                        title : 'Local Storage Included',
                        description : 'Keep user signed in using local stored info',
                        icon : 'your_icon_path.svg'
                    },
                    {
                        title : 'Component Sample',
                        description : 'I have included 3 sample components, that will help you creating your own.',
                        icon : 'your_icon_path.svg'
                    },
                    {
                        title : 'Form Validations',
                        description : 'Vue Validate plugin has been intergrated and ready to validate input fields.',
                        icon : 'your_icon_path.svg'
                    },
                    {
                        title : 'Meta Tags',
                        description : 'This package comes with ready meta tags, so you can customize : page title, facebook og image,etc, for each page you create.',
                        icon : 'your_icon_path.svg'
                    },
                    {
                        title : 'Ready Form Inputs',
                        description : 'I have created a page where you can find different form fields, in case you need to use something.',
                        icon : 'your_icon_path.svg'
                    },
                    {
                        title : 'Sample API Calls',
                        description : 'I have used ready json responses from "lists" to help you call your own apis.',
                        icon : 'your_icon_path.svg'
                    }
                    
                    

                    
                ]
            }
        },
        methods: {
            
        },
        mounted(){
           
        },
        updated(){
           
        }

    }
</script>
