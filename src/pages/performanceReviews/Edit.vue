<template>
<div class="py-12">
    <h2 class="text-2xl font-bold">Edit performance reviews</h2>
    <div class="mt-8 ">
        <div class="grid grid-cols-2 gap-6">
            <!-- <label class="block">
                <span class="text-gray-700">Full name</span>
                <input type="text" class="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black" placeholder="">
              </label> -->
            <div>
                <label-form label="Title" className="" />
                <input-form v-model="form.title" className="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black" />
            </div>

          

            <div class="mt-2">
                <label-form label="reviewers" className="" />

                <v-select multiple :options="users" v-model="form.reviewers" label="name" :reduce="model=>model.id" />
            </div>
            <div>
                <label-form label="reviewees" className="" />

                <v-select  multiple :options="users" label="name" v-model="form.reviewees"  :reduce="model=>model.id" />

            </div>
            <div></div>
            <div class="mt-4 items-center flex justify-between">
                <button @click.prevent="edit(form)" class="px-4 py-1 text-white font-light tracking-wider bg-gray-900 hover:bg-gray-800 rounded" type="submit">Edit</button>

            </div>

        </div>
    </div>
</div>
</template>

<script>
import {
    mapActions, mapGetters
} from 'vuex';
import InputForm from '../../components/form/InputForm.vue'
import LabelForm from '../../components/form/LabelForm.vue'
import {performanceReviews} from '@/api/performanceReviews'

export default {
    components: {
        InputForm,
        LabelForm
    },
    computed:{
      ...mapGetters('users',['users'])
    },
    methods: {
        ...mapActions('users', [ 'getUsers']),
        // ...mapActions('performanceReviews', ['create']),
        edit(){
            //call api
        }
     
    },
    data: function () {
        return {
            form: {
              title:"",
              reviewers:[],
              reviewees:[],
           
            },
        };
    },
    mounted() {
        this.getUsers();
     
        const performanceReview = performanceReviews.find(perfRev => perfRev.id ==this.$route.params.id)

        this.form.title = performanceReview.title
        this.form.reviewers = performanceReview.reviewers
        this.form.reviewees = performanceReview.reviewees
    }

}
</script>
