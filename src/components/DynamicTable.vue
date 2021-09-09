<template>
<div class="overflow-x-auto">
        <div class=" bg-gray-100 flex items-center justify-center bg-gray-100 font-sans overflow-hidden">
            <div class="w-full lg:w-11/12">
                <div class="bg-white shadow-md rounded my-6">
  <table class="min-w-max w-full table-auto">
                        <thead>
                            <tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">

          <template v-for="header in headers">
            <slot :name="`header(${header.key})`" >
              <th :key="header.key" class="py-3 px-6 text-left"> {{ header.label }} </th>
            </slot>
          </template>
                            </tr>

    </thead>
                           <tbody class="text-gray-600 text-sm font-light">
                            <tr class="border-b border-gray-200 hover:bg-gray-100" :id="item.id" v-for="item in data" :key="item.id">

 
            <td v-for="header in headers" :key="header.key" class="py-3 px-6 text-left whitespace-nowrap">
              <slot :name="`cell(${header.key})`" v-bind:data="item">
                {{ getCellValue(header,item) }}
              </slot>
            </td>
        </tr>
    </tbody>
  </table>
                </div>
                </div>
                </div>
                </div>
</template>

<script>

export default {
  name: "ListView",
  props: {

    headers : {
      type:Array,
      required : true
    },
    data : {
      type: Array,
      required : true
    },
  
  },

  data() {
    return {
      selected:[]
    }
  },
  watch:{
      selected:{
        handler(val){
            this.$emit("selected",val)
        },
        deep:true
      }
  },

  methods:{
    getCellValue(header,item){
      return header.key.split('.').reduce( (obj,key) => {
      // console.log((obj[key]),key);
      if(!obj[key])
         {
           return "--------";
           }
          return  obj[key];
       } ,item);

    },
    selectAllRows(){
     this.selected =this.getDataInRefs();

    },
    getDataInRefs(){
      return this.$refs.items.map(item => parseInt(item.id))
    }
    ,
    clearSelected(){
      this.selected  = [];
    },

    isSelectedIncludeItem(item)
    {
      return this.selected.some(select => select === item ) ;
    }
,
    selectRow(selected){
        const index = this.selected.findIndex(item=>item ===selected);
        if(this.$parent.$refs.actionBox) this.$parent.$refs.actionBox.changeChecked();
      if(index !== -1)
      {
        this.selected.splice(index,1)
        return;
      }
      this.selected.push(selected);
    },


  },
  dragging: false,
}
</script>

<style scoped>
  tr, td:first-child { border-top-left-radius: 5px; border-bottom-left-radius: 5px;}
  tr, td:last-child { border-top-right-radius: 5px; border-bottom-right-radius: 5px; }
.list-view{
  border-spacing: 0 8px !important;
}
.actions a{
  margin-bottom: -50px;
  transition: all 0.3s ease-in 0s;
}
tr:hover > td > .actions a{
  @apply mb-0
}
</style>
