<template lang="">
<p v-if="message">
   {{ message}}
</p>
</template>
<script>
export default {
 props:{
     message:{
         type:String,
         default:"",
         required:false,
     }
 }   
}
</script>
<style lang="">
    
</style>