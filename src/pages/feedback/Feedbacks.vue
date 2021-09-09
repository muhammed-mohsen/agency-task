<template>
<div style="height:500px">
    <breadcrumb pageName="Feedback" />

    <DynamicTable  :headers="fields" :data="feedbacks">

      
        <!-- <template #cell(reviewee)='data'>
            <span v-for="reviewer in  data.data.reviewers" :key="reviewer.id" >
            {{reviewer.name}}
            </span>
        </template> -->
        <template #cell(status)='data'>
            <span @click="change(data.data)" :class="statusClass(data.data.status)" class=" py-1 px-3 cursor-pointer rounded-full text-xs">
           {{ data.data.status }}
            </span>
        </template>


     
    </DynamicTable >
</div>
</template>

<script>
import DynamicTable  from '@/components/DynamicTable.vue'
import {
    fields
} from '@/data/feedbacks/fields.json'

import Breadcrumb from '@/components/public/Breadcrumb.vue'
import { mapActions, mapGetters } from 'vuex';

export default {

    components: {
        DynamicTable ,
        Breadcrumb
    },
    name: 'DashboardHome',
    data() {
        return {
            fields: fields,
        }
    },
    computed:{
        ...mapGetters('feedbacks',['feedbacks']),
       
    },
    methods:{
        ...mapActions('feedbacks',['getFeedbacks','changeStatus']),
          statusClass(status){
              console.log(status)
              return{
                 'bg-red-200 text-red-600':status=="pending" ,
                 'bg-green-200 text-green-600':status=="submitted" 
              }
           
        },
        change(data)
        {
            if(data.status =="pending")
            {
                this.changeStatus(data.id)
                
            }
            return;
        }
    
    },
    mounted() {
        this.getFeedbacks();

    }
}
</script>
