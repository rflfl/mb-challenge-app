<template>
    <header>
        <div class="info-etapa">
            Etapa <span>{{ props.etapa }}</span> de 4
        </div>
        <h2>{{ props.titulo }}</h2>
    </header>
</template>

<script setup>
const props = defineProps(['titulo', 'etapa'])
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat@0,400;1,700&display=swap');
.info-etapa {
    font-size: 14px;
}
.info-etapa span {
    color: #ff9900;
}
h2 {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    font-family: 'Montserrat', sans-serif;
    font-optical-sizing: auto;
    font-weight: 700;
    font-style: normal;
    font-size: 1.8rem;
}
</style>
