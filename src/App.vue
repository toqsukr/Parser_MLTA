<script setup>
    import Button from './components/Button/Button.vue'
    import Input from './components/Input/Input.vue'
    import { ref } from 'vue'

    const inputData = ref('')
</script>

<template>
    <h1 id="title">Программная реализация синтаксического анализатора</h1>
    <div id="main-container">
        <div id="text-container">
            <p1>
                Правильная скобочная запись арифметических выражений с тремя
                видами скобок.</p1
            >
            <p1
                >На каждом уровне вложенности не может быть больше двух идущих
                подряд скобок.</p1
            >

            <p1>
                В правильной записи не могут присутствовать "лишние" (двойные)
                скобки, но одна буква не может браться в скобки.</p1
            >
            <br />

            <p1>Пример.</p1>

            <p1> Правильная запись:</p1>
            <p1>{(a+b*c)*(a-b)}/({b-d-a}*a-[(a-a)/(b+b)])</p1>
            <br />
            <p1>Неправильная запись:</p1>
            <p1>[{a+b}*(a-b)/(b+c)]*([c+b]*[c])*{a+c} </p1>
        </div>
        <div id="input-container">
            <Input
                :inputData="inputData"
                @update-InputData="(data) => (inputData = data)" />
            <div id="button-container">
                <Button name="Проверить" />
                <Button
                    @update-InputData="(data) => (inputData = data)"
                    name="Очистить" />
            </div>
        </div>
    </div>
</template>

<style>
    #app {
        background-color: #d1f0fd8b;
        min-width: 335px;
        height: 100%;
    }

    #main-container {
        height: auto;
        display: flex;
        flex-direction: column;
        text-align: center;
        gap: 40px;
        margin: 30px 30px 0 30px;
    }

    #text-container {
        display: flex;
        text-align: start;
        flex-direction: column;
        gap: 8px;
        margin: 0 auto 0 auto;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

    #input-container {
        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: 15px;
    }

    #title {
        margin: 0 20px 0 20px;
        padding: 5px 0 0 0;
        text-align: center;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

    #button-container {
        display: flex;
        flex-direction: row;
        gap: 10px;
    }
</style>
