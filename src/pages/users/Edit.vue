<template>
   <div class="py-12">
          <h2 class="text-2xl font-bold">Edit User</h2>
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
                  <input-form v-model="form.phone" className="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black" />
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
                <button  @click.prevent="edit(form)" class="px-4 py-1 text-white font-light tracking-wider bg-gray-900 hover:bg-gray-800 rounded"
                  type="submit">Edit</button>
              
              </div>

            </div>
          </div>
        </div>
</template>
<script>
import InputForm from '../../components/form/InputForm.vue'
import LabelForm from '../../components/form/LabelForm.vue'
import {users} from '@/api/users'
export default {
  components: { InputForm,LabelForm },
  methods:{
         onChange(event) {
             console.log("🚀 ~ file: Create.vue ~ line 91 ~ onChange ~ event.target.value ", event.target.value )
             this.form.is_admin =event.target.value ;
             
        },
          edit(){
    
    //call api for edit 


  }
  },
  data:function() {
return {
      form:{
          name:"",
          phone:"",
          password:"",
          email:"",
          is_admin:false,
      }
  };
},


mounted(){
     const user = users.find(edit => edit.id ==this.$route.params.id)

        this.form.phone = user.phone
        this.form.name = user.name
        this.form.email = user.email
}

    
}
</script>