<template>
    <div class="form-container">
        <div id="etapa-1" class="etapa">
            <StepHeader title="Seja bem vindo(a)" step="3" />
            <BaseInput type="email" name="email" label="Endereço de e-mail" />
            <div class="secao-tipo-pessoa">
                <div>
                    <input
                        type="radio"
                        id="pessoa-fisica"
                        value="fisica"
                        name="tipo-pessoa"
                        v-model="tipoPessoa"
                    />
                    <label for="pessoa-fisica">Pessoa física</label>
                </div>
                <div>
                    <input
                        type="radio"
                        id="pessoa-juridica"
                        value="juridica"
                        name="tipo-pessoa"
                        v-model="tipoPessoa"
                    />
                    <label for="pessoa-juridica">Pessoa jurídica</label>
                </div>
            </div>
            <div class="secao-botoes">
                <BaseButton classe="default" texto="Continuar" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import BaseInput from './components/BaseInput.vue'
import BaseButton from './components/BaseButton.vue'
import StepHeader from './components/StepHeader.vue'
const tipoPessoa = ref('fisica')
</script>

<style scoped>
.form-container {
    width: 300px;
    margin: 0 auto;
    padding-top: 150px;
}

.secao-tipo-pessoa,
.secao-botoes {
    display: flex;
    justify-content: space-between;
    column-gap: 10px;
    margin-bottom: 20px;
}
</style>
