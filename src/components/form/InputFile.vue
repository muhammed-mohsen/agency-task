<template lang="">
<div>
    <LabelForm :label="label" />
    <input :id="label " @change="updateValue($event.target.files)" :type="type" :multiple="multiple" :accept="accept" :class="className" class="form-input mt-1 block w-full" :placeholder="placeHolder">
</div>
</template>

<script>
import LabelForm from './LabelForm'
export default {
    props: {
        type: {
            requied: false,
            type: String,
            default: 'text'
        },
        className: {
            requied: false,
            type: String,
            default: ''
        },
        placeHolder: {
            requied: false,
            type: String,
            default: ''
        },
        label: {
            requied: false,
            type: String,
            default: ''
        },
        accept: {
            requied: false,
            type: String,
            default: ''
        },
        multiple: {
            requied: false,
            type: Boolean,
            default: false
        },
        value: {
            requied: false,
            default: ''
        },
    },
    components: {
        LabelForm
    },
    methods: {
        updateValue: function (value) {
            if (this.multiple) {
                this.$emit('input', Object.values(value))
                return;
            }
                this.$emit('input', value[0]);

            
        }
    }

}
</script>

<style lang="">

</style>
