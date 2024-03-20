<template>
    <transition name="slide-fade">
        <div v-if="etapa === 1" id="etapa-1" class="form-container">
            <StepHeader titulo="Seja bem vindo(a)" :etapa="etapa" />
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
                <BaseButton classe="btn-default w-full" texto="Continuar" @click="next()" />
            </div>
        </div>
    </transition>
    <transition name="slide-fade">
        <div v-if="etapa === 2 && tipoPessoa ==='fisica'" id="etapa-2" class="form-container">
            <StepHeader titulo="Pessoa Física" :etapa="etapa" />
            <BaseInput type="text" name="nome" label="Nome" v-model:valor="cadastro.nome" />
            <BaseInput
                type="text"
                name="cpf"
                label="CPF"
                v-model:valor="cadastro.numero_documento"
            />
            <BaseInput
                type="date"
                name="dataNascimaneto"
                label="Data de nascimento"
                v-model:valor="cadastro.data"
            />
            <BaseInput
                type="tel"
                name="telefone"
                label="Telefone"
                v-model:valor="cadastro.telefone"
            />
            <div class="secao-botoes">
                <BaseButton classe="btn-outline" texto="Voltar" @click="prev()" />
                <BaseButton classe="btn-default" texto="Continuar" @click="next()" />
            </div>
        </div>
    </transition>
    <transition name="slide-fade">
        <div v-if="etapa === 2 && tipoPessoa ==='juridica'" id="etapa-2" class="form-container">
            <StepHeader titulo="Pessoa Jurídica" :etapa="etapa" />
            <BaseInput
                type="text"
                name="razaoSocial"
                label="Razão Social"
                v-model:valor="cadastro.nome"
            />
            <BaseInput
                type="text"
                name="cnpj"
                label="CNPJ"
                v-model:valor="cadastro.numero_documento"
            />
            <BaseInput
                type="date"
                name="dataAbertura"
                label="Data de abertura"
                v-model:valor="cadastro.data"
            />
            <BaseInput
                type="tel"
                name="telefone"
                label="Telefone"
                v-model:valor="cadastro.telefone"
            />
            <div class="secao-botoes">
                <BaseButton classe="btn-outline" texto="Voltar" @click="prev()" />
                <BaseButton classe="btn-default" texto="Continuar" @click="next()" />
            </div>
        </div>
    </transition>
    <transition name="slide-fade">
        <div v-if="etapa === 3" id="etapa-3" class="form-container">
            <StepHeader titulo="Senha de acesso" :etapa="etapa" />
            <BaseInput
                type="password"
                name="senha"
                label="Sua senha"
                v-model:valor="cadastro.senha"
            />
            <div class="secao-botoes">
                <BaseButton classe="btn-outline" texto="Voltar" @click="prev()" />
                <BaseButton
                    classe="btn-default"
                    texto="Continuar"
                    @click="next()"
                    :disabled="true"
                />
            </div>
        </div>
    </transition>
</template>

<script setup>
import { ref } from 'vue'
import BaseInput from './BaseInput.vue'
import BaseButton from './BaseButton.vue'
import StepHeader from './StepHeader.vue'
const tipoPessoa = ref('fisica')
const cadastro = ref({
    email: '',
    tipo_pessoa: tipoPessoa,
    nome: '',
    numero_documento: '',
    data: '',
    telefone: '',
    senha: ''
})
let etapa = ref(1)
function next() {
    etapa.value++
}
function prev() {
    if (etapa.value > 1) etapa.value--
}
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
    margin-bottom: 20px;
}

.secao-botoes {
    column-gap: 15px;
}

.slide-fade-enter-active {
    transition: all 0.4s ease;
}

.slide-fade-leave-active {
    display: none;
    transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateX(10px);
    opacity: 0;
}
</style>
