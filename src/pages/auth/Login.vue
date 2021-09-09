<template>
<div class="h-screen font-sans login bg-cover">
<div class="container mx-auto h-full flex flex-1 justify-center items-center">
    <div class="w-full max-w-lg">
      <div class="leading-loose">
        <form class="max-w-sm m-4 p-10 bg-white bg-opacity-25 rounded shadow-xl">
            <p class="text-white font-medium text-center text-lg font-bold">LOGIN</p>
              <div class="">

                  <LabelForm   label="E-mail"/>
                  <InputForm v-model="form.email" className="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white" type="email" placeHolder="enter your email" required />
              </div>
              <div class="mt-2">
                  <LabelForm   label="Password"/>
                  <InputForm  v-model="form.password" className="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white" type="password" placeHolder="enter your password" required />

                </div>

              <div class="mt-4 items-center flex justify-between">
                <button  @click.prevent="login(form)" class="px-4 py-1 text-white font-light tracking-wider bg-gray-900 hover:bg-gray-800 rounded"
                  type="submit">Login</button>
                <a class="inline-block right-0 align-baseline font-bold text-sm text-500 text-white hover:text-red-400"
                  href="#">forgot password ?</a>
              </div>
              <div class="text-center">
                <a class="inline-block right-0 align-baseline font-light text-sm text-500 hover:text-red-400">
                  create account
                </a>
              </div>

        </form>

      </div>
    </div>
  </div>
</div>
</template>
<script>
import LabelForm from '@/components/form/LabelForm'
import InputForm from '@/components/form/InputForm'
import {mapActions} from 'vuex'
export default {
 components:{
     LabelForm,
     InputForm
 },
 data(){
   return{
         form:{
         email:"",
         password:""
     }}
 },
 methods:{
     ...mapActions('auth',['login'])

 }   
}
</script>
<style>
  .login{
  /*
    background: url('https://tailwindadmin.netlify.app/dist/images/login-new.jpeg');
  */
  background: url('http://bit.ly/2gPLxZ4');
  background-repeat: no-repeat;
  background-size: cover;
}
</style>