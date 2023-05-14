<script setup>
    import css from './Button.module.css'
    defineProps(['name'])
</script>
<template>
    <div>
        <button :id="css.button" @click="">{{ name }}</button>
    </div>
</template>
