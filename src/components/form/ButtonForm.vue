<template lang="">
                        <button @click.prevent="$emit('clicked')" :type="buttonType" :class="className" class=" w-full text-center  text-white font-bold py-3 px-2 rounded " >
                            {{ label }}
                            <slot />

                        </button>
</template>
<script>
export default {
    props:{
        label:{
            required:false,
            type:String,
            
        },
        className:{
            required:false,
            type:String,
            
        },
        buttonType:{
            required:false,
            type:String,
            default:'',
            
        },
        
        
    }
    
}
</script>
<style lang="">
    
</style>