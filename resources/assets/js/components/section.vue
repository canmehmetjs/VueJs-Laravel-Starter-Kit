<template>
    <section 
        :class="{'section_padding': includeSectionPadding == true, 
                'section-content-center': centerText == true }" 
        :data-overlay="dataOverlay"    
        :data-bg-primary-opacity="dataBgOpacity"    
        >
        <template v-if="useContainer">
            <div class="container-fluid">
                <slot></slot>
            </div>
        </template>
        <template v-else>
                <slot></slot>
        </template>
       
    </section>
</template>


<script>
    export default {
        name: 'loycha_container',
        props: {
            includeSectionPadding: {
                type: Boolean
            },
            centerText: {
                type: Boolean
            },
            extraClass : {
                type: String,
                required : false
            },
            dataOverlay: {
                type: String,
                required : false
            },
            dataBgOpacity: {
                type: String,
                required : false
            },
            useContainer: {
                type: Boolean
            }
        },
        data () {
            return {
                
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
