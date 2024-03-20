<template>
    <header class="titulo-etapa">
        <div>
            Etapa <span>{{ props.step }}</span> de 4
        </div>
        <h2>{{ props.title }}</h2>
    </header>
</template>

<script setup>
const props = defineProps(['title', 'step'])
</script>

<style scoped></style>
