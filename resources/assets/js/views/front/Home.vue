<template>
    <div class="homepage">
         <block-section
            includeSectionPadding
            centerText
            useContainer
            dataBgOpacity = ''>

            <block-title
                    titleAlign="center"
                    topTitle="Welcome to"
                    bigTitle="VueJs - Laravel Starter Kit"
                    description="VueJs & Laravel Starter Kit. This is a personal project but you are welcomed to fork and start working on your new project."
                    showButton
            >
              <div class="loycha_btn inline-buttons">
                        <router-link :to="'/form-elements'" class="loycha_btn btn-big bg--secondary">
                               Check Router Link
                        </router-link>
                        
              </div>
            </block-title>
            
            <block-features
                
            ></block-features>
         </block-section>
    </div>
   

</template>



<script>
  import Block_Section from '../../components/section';
  import Block_Title from '../../components/section-title';
  import Block_Features from '../../components/section-features';
    export default {
        name: 'homepage',
        data () {
            return {
            
            }
        },
        methods : {
            
        },
        components : {
             'block-section' : Block_Section,
             'block-title' : Block_Title,
             'block-features' : Block_Features
        },
        beforeUpdate() {
                
        },
        updated() {
            
        },
        beforeMount(){
            
        }

}
</script>
