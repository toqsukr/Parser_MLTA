<script setup>
    import css from './Message.module.css'
    defineProps(['text', 'isCorrect', 'isEmptyInput'])
</script>
<template>
    <div
        :class="{
            [css.wrong_window]: !isCorrect && !isEmptyInput,
            [css.correct_window]: isCorrect && !isEmptyInput,
            [css.empty_window]: isEmptyInput,
        }"
        :id="css.message_container">
        <p :id="css.message_text">{{ text }}</p>
    </div>
</template>
<style></style>
