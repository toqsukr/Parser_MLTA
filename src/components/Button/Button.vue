<script setup>
    import css from './Button.module.css'
    defineProps(['name', 'inputData'])
    const emit = defineEmits(['updateInputData'])
    function clearInput() {
        emit('updateInputData', '')
    }
</script>
<template>
    <div>
        <button :id="css.button" @click="clearInput">{{ name }}</button>
    </div>
</template>
