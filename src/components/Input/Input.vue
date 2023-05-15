<script setup>
    import css from './Input.module.css'
    defineProps(['inputData', 'isLoading'])
    const emit = defineEmits(['updateInputData', 'deleteMessage'])
</script>
<template>
    <input
        :id="css.input"
        :value="inputData"
        :disabled="isLoading"
        @input="$emit('updateInputData', $event.target.value)"
        @focusin="$emit('deleteMessage')" />
</template>
<style></style>
