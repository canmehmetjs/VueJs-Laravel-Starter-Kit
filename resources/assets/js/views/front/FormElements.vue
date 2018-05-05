<template>
    <div class="homepage">
         <block-section
            includeSectionPadding
            centerText
            useContainer
            dataBgOpacity = ''>

            <block-title
                    titleAlign="center"
                    topTitle=""
                    bigTitle="Form Elements"
                    description="Below you can find some form elements that could be useful to you."
                    showButton
            >
            
            </block-title>
            
           
            
         </block-section>


        <!-- Validating Form -->
         <block-section
            includeSectionPadding
            useContainer
            dataBgOpacity = ''>

            <block-title
                    titleAlign="left"
                    topTitle=""
                    bigTitle="Form Validations"
                    description=""
                    
            >

            </block-title>
            
            
            <form class="form-type-1"  @submit.prevent="validateBeforeSubmit">
                    <div class="form__inline">
                             <div class="form__group">
                                    <label class="form__label">Name</label>
                                    <input 
                                        type="text" 
                                        v-model="form_name" 
                                        class="form__input" 
                                        placeholder="Type your name"> 
                            </div>
                            <div class="form__group">
                                    <label class="form__label" for="validation_email">Email</label>
                                    <input 
                                        v-model="form_email" 
                                        type="email" 
                                         v-validate="'required|email'"
                                        name="email" 
                                        class="form__input" 
                                        placeholder="john@youremail.com" 
                                        value="">
                                        <span v-show="errors.has('email')" class="form-error-notification error">{{ errors.first('email') }}</span>
 
                            </div>
                    </div>
                    <div class="form__inline">
                             <div class="form__group">
                                    <label class="form__label">Password</label>
                                    <input 
                                        v-validate="'required'" 
                                        type="password" 
                                        name="form_password" 
                                        v-model="form_password" 
                                        class="form__input" 
                                        placeholder="Type your name"> 
                                        <span v-show="errors.has('form_password')" class="form-error-notification error">{{ errors.first('form_password') }}</span>
                            </div>  
                            <div class="form__group">
                                    <label class="form__label">Confirm Password</label>
                                    <input 
                                        v-validate="'required|confirmed:form_password'" 
                                        type="password" 
                                        name="form_confirm_password"
                                        v-model="form_confirm_password" 
                                        class="form__input" 
                                        placeholder=""> 
                                       <span v-show="errors.has('form_confirm_password')" class="form-error-notification error">{{ errors.first('form_confirm_password') }}</span>
                            </div>
                    </div>

                    <div class="callout_btn">
                            <button type="submit" class="loycha_btn btn-small bg--secondary">{{button_title}}</button>
                    </div>
                   
            </form>
            
            
         </block-section>

    </div>
   

</template>



<script>
  import Block_Section from '../../components/section';
  import Block_Title from '../../components/section-title';
 
    export default {
        name: 'form_elements',
        data () {
            return {
                
              /* Form Validation */
               form_name : '',
               form_email : '',
               form_password : '',
               form_confirm_password : '',
               button_title : 'Submit'


            }
        },
        methods : {
           validateBeforeSubmit() {
            this.$validator.validateAll().then((result) => {
                    if (result) {
                        this.button_title = 'One moment ...';
                        alert('Everything is okay');
                        this.button_title = 'Submit';
                        // eslint-disable-next-line
                        /*MerchantServices.login(this.loginData).then(() => {
                                                this.$router.push('/app/dashboard')
                        })
                        */
                        return;
                    }
                });
            },
        },
        components : {
             'block-section' : Block_Section,
             'block-title' : Block_Title
             
        },
        beforeUpdate() {
                
        },
        updated() {
            
        },
        beforeMount(){
            
        }

}
</script>
