<template>
    <div :class="{ 'section_title' : true , 'align-left': titleAlign == 'left' }">
            <h6>{{topTitle}}</h6>
            <h2>{{bigTitle}}</h2>
            <p class="lead">
               {{description}}
            </p>
            <template v-if="showButton">
                <div class="section_anchor">
                    <slot></slot>
                </div>
            </template>
            
    </div>
</template>

<script>
    export default {
        name: 'Loycha_Title',
        props: {
            titleAlign: {
                type: String,
                required: false,
                default: ''
            },
            topTitle: {
                type: String,
                required: false,
                default: 'Why Loycha is a game changer in loyalty?'
            },
            bigTitle: {
                type: String,
                required: false,
                default: '15 Solutions to<br>15 problems loyalties have.'
            },
            description: {
                type: String,
                required: false,
                default: 'We are engineers. We solve problems. Below you can find 15 problems and 15 solutions to these problems propossed from our side.'
            },
            showButton: {
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
