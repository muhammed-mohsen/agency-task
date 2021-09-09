<template lang="">
  <label  :for="label" class="block  " :class="className">
         

      {{ label }}
  </label>
</template>
<script>
export default {
    props:{
          label:{
                requied:false,
                type:String,
                default:''
            },
          required:{
                required:false,
                type:Boolean,
                default:false
            },
          className:{
                required:false,
                type:String,
            },
            
           
    }
    
}
</script>
<style >
    .required:after {
  content:" *";
  color: red;
}
</style>