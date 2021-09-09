<template>
<div>
    <breadcrumb pageName="Users" />
  <div class="flex flex-row-reverse ">
        <router-link to="users/create" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded mr-12">
            create
        </router-link>
    </div>
    <DynamicTable :headers="fields" :data="users">

        <template #cell(is_admin)='data'>
            {{ data.data.is_admin ?"Admin":"User" }}
        </template>
        <template #cell(actions)='data'>

            <div class="flex item-center justify-center">

                <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                    <router-link :to="{ name: 'showUser', params: { id: data.data.id } }" class="px-2" href="">
                        <eye-icon />
                    </router-link>
                </div>
                <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                    <a @click.stop.prevent="destroy(data.data.id)" class="px-2" href="">

                        <delete-icon />
                    </a>

                </div>
                <router-link :to="{ name: 'editUser', params: { id: data.data.id } }" class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">

                    <a class="px-2" href="">
                        <edit-icon />
                    </a>

                </router-link>

            </div>

        </template>
    </DynamicTable>
</div>
</template>

<script>
import DynamicTable from '@/components/DynamicTable.vue'
import {
    fields
} from '@/data/users/fields.json'

import Breadcrumb from '../../components/public/Breadcrumb.vue'
import {
    mapActions,
    mapGetters
} from 'vuex';
import EyeIcon from '../../components/icons/EyeIcon.vue';
import DeleteIcon from '../../components/icons/DeleteIcon.vue';
import EditIcon from '../../components/icons/EditIcon.vue';

export default {

    components: {
        DynamicTable,
        Breadcrumb,
        EyeIcon,
        DeleteIcon,
        EditIcon
    },
    name: 'DashboardHome',
    data() {
        return {
            fields: fields,
            // data: []
        }
    },
    computed: {
        ...mapGetters('users', ['users'])
    },
    methods: {
        ...mapActions('users', ['getUsers', 'destroy']),
        // remove(){
        //     this.destroy()
        // }
    },
    mounted() {
        this.getUsers();

    }
}
</script>
