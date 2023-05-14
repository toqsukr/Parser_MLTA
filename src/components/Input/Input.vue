<script setup>
    import css from './Input.module.css'
    defineProps(['inputData'])
    const emit = defineEmits(['updateInputData'])
</script>
<template>
    <input
        :id="css.input"
        :value="inputData"
        @input="$emit('updateInputData', $event.target.value)" />
</template>
<style></style>
