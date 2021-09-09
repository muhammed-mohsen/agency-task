<template lang="">
<div>
    <LabelForm :label="label" :required="required" />

    <textarea class="form-textarea mt-1 block w-full border border-gray-300 " :rows="rows" :id="label " v-on:input="updateValue($event.target.value)"   :disabled="disabled" :value="value" :class="className"></textarea>

</div>
</template>

<script>
import LabelForm from './LabelForm'
export default {
    props: {
        type: {
            required: false,
            type: String,
            default: 'text'
        },
        className: {
            required: false,
            type: String,
            default: ''
        },
        placeHolder: {
            required: false,
            type: String,
            default: ''
        },
        label: {
            required: false,
            type: String,
            default: ''
        },

        required: {
            required: false,
            type: Boolean,
            default: false
        },
        value: {
            required: false,
            default: ''
        },
        rows: {
            required: false,
            default: 3
        },
        disabled: {
            required: false,
            type: Boolean,
            default: false
        },
    },
    components: {
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
