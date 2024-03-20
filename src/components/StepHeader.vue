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
.info-etapa {
    font-size: 1rem;
}
.info-etapa span {
    color: #ff9900;
}
.info-etapa h2 {
    padding-top: 4px;
}
</style>
