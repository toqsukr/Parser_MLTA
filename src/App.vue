<script setup>
    import Input from './components/Input/Input.vue'
    import Message from './components/Message/Message.vue'
    import { beginTest } from './util/parser'
    import { ref } from 'vue'

    const inputData = ref('')
    const answer = ref('')
    const isCorrect = ref(null)
    const isEmptyInput = ref(null)
    const isLoading = ref(false)
    const numberCorrectExample = ref(0)
    const numberWrongExample = ref(0)
    const correctExamples = [
        '[a+(b*c)/{([b*d]/[a+b+c])*a}]',
        '{[a-b-c-d]/[{a*a}*{b*b}]}*d',
        '[(a-b-c)*(a+b+c+d)]/([{[a+b]*[c-d]}*{d+c-a}]/b)',
        '([({a*b}-{c/d})*e]/{([e*d]*[a-b-c-d-e])/a})',
        '{(a+b+c+d+e)/(a-b-c-d-e)}*a*b*c*d*e',
    ]
    const wrongExamples = [
        '[(a)+(b*c)/{([d]/[b+c])*a}]',
        '([a-b-c-d]/[{a*a}*{b*b}]*[c*d])',
        '[(a-b-c)*(b+c+d)]/({[a+b]*[c]}*{d+c-a}/b)',
        '[{a*b}-{c/d}*{e}]/{([e*d]*[a-b-c-d-e])/[a]}*{a*b*e}',
        '(a+b+c+d+e)/(a-b-c-d-e)*(a*b*c*d*e)',
    ]
    const checkData = () => {
        if (inputData.value) {
            isEmptyInput.value = false
            answer.value = beginTest(inputData.value)
            if (
                answer.value.includes(' не ') ||
                answer.value.includes(' букв ')
            )
                isCorrect.value = false
            else isCorrect.value = true
        } else {
            isEmptyInput.value = true
            answer.value = 'Введите выражение для проверки!'
        }
    }
    const clearInput = () => {
        inputData.value = ''
        answer.value = ''
        isEmptyInput.value = ''
    }

    const showCorrectExample = () => {
        isLoading.value = true
        clearInput()
        inputData.value = correctExamples[numberCorrectExample.value]
        numberCorrectExample.value++
        numberCorrectExample.value %= 5
        setTimeout(() => (isLoading.value = false), 700)
        setTimeout(() => checkData(), 400)
    }

    const showWrongExample = () => {
        isLoading.value = true
        clearInput()
        inputData.value = wrongExamples[numberWrongExample.value]
        numberWrongExample.value++
        numberWrongExample.value %= 5
        setTimeout(() => (isLoading.value = false), 700)
        setTimeout(() => checkData(), 400)
    }
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

            <p1>Пример.</p1>

            <p1> Правильная запись:</p1>
            <p1>{(a+b*c)*(a-b)}/({b-d-a}*a-[(a-a)/(b+b)])</p1>
            <br />
            <p1>Неправильная запись:</p1>
            <p1>[{a+b}*(a-b)/(b+c)]*([c+b]*[c])*{a+c} </p1>
        </div>
        <Input
            :inputData="inputData"
            :isLoading="isLoading"
            @update-InputData="(data) => (inputData = data)"
            @delete-Message="() => (answer = '')" />
        <div id="button-container">
            <button :disabled="isLoading" class="button" @click="checkData">
                Проверить
            </button>
            <button :disabled="isLoading" class="button" @click="clearInput">
                Очистить
            </button>
            <button
                :disabled="isLoading"
                class="button"
                @click="showCorrectExample">
                Пример
            </button>
            <button
                :disabled="isLoading"
                class="button"
                @click="showWrongExample">
                Контрпример
            </button>
        </div>

        <Transition name="message-appearance">
            <div id="message_container" v-if="answer.length">
                <Message
                    :text="answer"
                    :isCorrect="isCorrect"
                    :isEmptyInput="isEmptyInput" />
            </div>
        </Transition>
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
        align-items: center;
        gap: 30px;
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
        flex-direction: column;
        justify-content: center;
        gap: 15px;
    }

    #button-container {
        display: flex;
        flex-direction: row;
        gap: 15px;
    }

    #title {
        margin: 0 20px 0 20px;
        padding: 5px 0 0 0;
        text-align: center;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

    .button {
        background-color: rgba(226, 246, 234, 0.833);
        color: black;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        padding: 10px 15px 10px 15px;
        border: 1px solid black;
        border-radius: 5px;
        opacity: 0.7;
        transition: all 0.5s;
    }

    .button:hover {
        transition: all 0.3s;
        opacity: 1;
    }

    #message_container {
        display: flex;
        justify-content: center;
    }

    @media (max-width: 510px) {
        #main-container {
            height: auto;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 30px;
            margin: 30px 30px 0 30px;
        }

        #button-container {
            display: flex;
            flex-direction: row;
            gap: 10px;
        }

        .button {
            background-color: rgba(226, 246, 234, 0.833);
            color: black;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            padding: 8px 12px 8px 12px;
            border: 1px solid black;
            border-radius: 5px;
            opacity: 0.7;
            transition: all 0.5s;
        }
    }

    .message-appearance-enter-from,
    .message-appearance-leave-to {
        opacity: 0;
        transform: scale(0);
    }

    .message-appearance-enter-active,
    .message-appearance-leave-active {
        transition: all 0.7s;
    }

    .message-appearance-enter-to,
    .message-appearance-leave-from {
        transform: scale(1);
        opacity: 1;
    }
</style>
