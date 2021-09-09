<template lang="">
<div>
<LabelForm :label="label" :required="required" />    
  <input :id="label "
   v-on:input="updateValue($event.target.value)"
    :type="type" :value="value" :required="required" :disabled="disabled" :max="max"  :class="className" class="form-input mt-1 block w-full "  :placeholder="placeHolder">
</div>
</template>
<script>
import LabelForm from './LabelForm'
export default {
        props:{
            type:{
                 required:false,
                type:String,
                default:'text'
            },
            className:{
                required:false,
                type:String,
                default:''
            },
            placeHolder:{
                 required:false,
                type:String,
                default:''
            },
            label:{
                 required:false,
                type:String,
                default:''
            },
            max:{
                 required:false,
                type:Number,
            },
            required:{
                 required:false,
                type:Boolean,
                default:false
            },
               value: {
       required:false,
                default:''
      },
        disabled:{
                 required:false,
                type:Boolean,
                default:false
            },
        },
        components:{
            LabelForm
        },
         methods: {
      updateValue: function (value) {
        this.$emit('input', value)
      }
         }
    
}
</script>
<style lang="">
    
</style>