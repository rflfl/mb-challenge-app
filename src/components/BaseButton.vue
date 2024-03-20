<template>
    <button :class="props.classe">{{ props.texto }}</button>
</template>

<script setup>
const props = defineProps(['texto', 'classe'])
</script>

<style scoped>
.default {
    width: 100%;
    padding: 10px;
    background-color: #ff9900;
    color: #ffffff;
    text-align: center;
    border-radius: 7px;
    border: none;
    transition: 0.1s all ease-in-out;
}
.default:hover {
    background-color: #d88200;
}
</style>
