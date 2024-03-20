<template>
    <div class="input-group">
        <label :for="props.name">{{ props.label }}</label>
        <input :type="props.type" :name="props.name" :id="props.name" />
    </div>
</template>

<script setup>
const props = defineProps(['type', 'name', 'label'])
</script>

<style scoped>
.input-group {
    display: flex;
    flex-direction: column;
    margin: 20px 0;
}

.input-group label {
    font-size: 0.9rem;
    font-weight: normal;
    margin-bottom: 5px;
}

input {
    padding: 10px;
    border-radius: 7px;
    border: 2px solid #1b1b1b;
}
</style>
