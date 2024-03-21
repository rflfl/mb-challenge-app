<template>
    <button :class="props.classe">{{ props.texto }}</button>
</template>

<script setup>
const props = defineProps(['texto', 'classe'])
</script>

<style scoped>
.btn-default {
    min-width: 55%;
    padding: 10px 0;
    background-color: #ff9900;
    color: #ffffff;
    text-align: center;
    border-radius: 7px;
    border: none;
    cursor: pointer;
    transition: 0.1s all ease-in-out;
}
.btn-default:hover {
    background-color: #d88200;
}
.btn-outline {
    width: 45%;
    padding: 10px 0;
    background-color: #ffffff;
    color: #ff9900;
    text-align: center;
    border-radius: 7px;
    border: 1px solid #ff9900;
    cursor: pointer;
    transition: 0.1s all ease-in-out;
}
.w-full {
    width: 100%;
}
.disabled {
    opacity: 0.8;
    cursor: not-allowed;
}
</style>
