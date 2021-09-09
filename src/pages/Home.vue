<template>
    <div id="home" style="height:500px">
         <breadcrumb/>
            <div class="lg:flex justify-between items-center mb-6">
              <p class="text-2xl font-semibold mb-2 lg:mb-0">welcome, {{ getUser.name }}</p>
            </div>
    </div>
</template>

<script>
import Breadcrumb from '../components/public/Breadcrumb.vue'
import {fields}   from '../data/users/fields.json'
import {  mapGetters } from 'vuex'
export default {
  components: { Breadcrumb },
    name: 'DashboardHome',
    data() {
        return {
        fields:fields,
        data:[
        ],

        }
       
    },
     computed: {
            ...mapGetters('auth',['getUser'])
        },
    mounted () {
      
}
}
</script>