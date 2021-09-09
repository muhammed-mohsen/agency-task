<template>
   <div class="py-12">
          <h2 class="text-2xl font-bold">Create User</h2>
          <div class="mt-8 ">
            <div class="grid grid-cols-2 gap-6">
           
              <div>
                  <label-form label="Name" className="" />
                  <input-form  v-model="form.name" className="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black" />
              </div>
               <div>
                  <label-form label="Email address" className="" />
                  <input-form v-model="form.email" className="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black" />
              </div>
               <div>
                  <label-form label="Mobile" className="" />
                  <input-form v-model="form.mobile" className="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black" />
              </div>
               <div>
                  <label-form label="Password" className="" />
                  <input-form v-model="form.password" className="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black" />
              </div>
               <label class="block">
                <span class="text-gray-700">Role</span>
                <select @change="onChange($event)" class="block w-full mt-0 px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black">
                  <option value="0">User</option>
                  <option value="1">Admin</option>
                
                </select>
              </label>
              <div></div>
              
              
                   <div class="mt-4 items-center flex justify-between">
                <button  @click.prevent="create(form)" class="px-4 py-1 text-white font-light tracking-wider bg-gray-900 hover:bg-gray-800 rounded"
                  type="submit">Create</button>
                <a class="inline-block right-0 align-baseline font-bold text-sm text-500 text-white hover:text-red-400"
                  href="#">forgot password ?</a>
              </div>

              <!-- <label class="block">
                  
                <span class="text-gray-700">Email address</span>
                <input type="email" class="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black" placeholder="john@example.com">
              </label> -->
              <!-- <label class="block">
                <span class="text-gray-700">When is your event?</span>
                <input type="date" class="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black">
              </label>
              <label class="block">
                <span class="text-gray-700">What type of event is it?</span>
                <select class="block w-full mt-0 px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black">
                  <option>Corporate event</option>
                  <option>Wedding</option>
                  <option>Birthday</option>
                  <option>Other</option>
                </select>
              </label>
              <label class="block">
                <span class="text-gray-700">Additional details</span>
                <textarea class="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black" rows="2"></textarea>
              </label>
              <div class="block">
                <div class="mt-2">
                  <div>
                    <label class="inline-flex items-center">
                      <input type="checkbox" class="border-gray-300 border-2 text-black focus:border-gray-300 focus:ring-black">
                      <span class="ml-2">Email me news and special offers</span>
                    </label>
                  </div>
                </div>
              </div> -->
            </div>
          </div>
        </div>
</template>
<script>
import { mapActions } from 'vuex';
import InputForm from '../../components/form/InputForm.vue'
import LabelForm from '../../components/form/LabelForm.vue'

export default {
  components: { InputForm,LabelForm },
  methods:{
      ...mapActions('users',['create','getUsers']),
         onChange(event) {
             console.log("🚀 ~ file: Create.vue ~ line 91 ~ onChange ~ event.target.value ", event.target.value )
             this.form.is_admin =event.target.value 
        }
  },
  data:function() {
return {
      form:{
          name:"",
          mobile:"",
          password:"",
          email:"",
          is_admin:false,
      }
  };
},
mounted(){
    this.getUsers()
}

    
}
</script>