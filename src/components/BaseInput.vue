<template>
    <div class="input-group">
        <label :for="props.name">{{ props.label }}</label>
        <input
            :type="props.type"
            :name="props.name"
            :id="props.name"
            v-model="inputValue"
            @input="handleInput"
            :maxlength="
                props.name === 'cpf'
                    ? 11
                    : props.name === 'cnpj'
                      ? 14
                      : props.type === 'tel'
                        ? 15
                        : null
            "
        />
        <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
    </div>
</template>

<script setup>
import { watch } from 'vue'
const props = defineProps(['type', 'name', 'label', 'valor'])
const emit = defineEmits(['update:valor'])
let inputValue = defineModel()
let errorMessage = ''
watch(
    () => props.valor,
    (newValue) => {
        inputValue.value = newValue
    }
)
function handleInput(event) {
    const newValue = event.target.value
    switch (props.name) {
        case 'email':
            inputValue.value = newValue
            errorMessage = !isValidEmail(newValue) ? 'Por favor, insira um email válido.' : ''
            break
        case 'cpf':
            inputValue.value = formatCPF(newValue)
            errorMessage = !isValidCPF(newValue) ? 'Por favor, insira um CPF válido.' : ''
            break
        case 'cnpj':
            inputValue.value = formatCNPJ(newValue)
            errorMessage = !isValidCNPJ(newValue) ? 'Por favor, insira um CNPJ válido.' : ''
            break
        case 'telefone':
            inputValue.value = formatTelefone(newValue)
            break
        case 'senha':
            inputValue.value = newValue
            errorMessage = !isValidSenha(newValue)
                ? 'A senha deve conter pelo menos 8 caracteres, incluindo pelo menos um número, uma letra maiúscula, uma letra minúscula e um caractere especial.'
                : ''
            break
        default:
            break
    }

    emit('update:valor', inputValue.value)
}
function isValidEmail(email) {
    // Expressão regular para validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
}
function isValidCPF(cpf) {
    cpf = cpf.replace(/\D/g, '') // Remove caracteres não numéricos

    if (cpf.length !== 11) return false

    let sum = 0
    for (let i = 0; i < 9; i++) {
        sum += parseInt(cpf.charAt(i)) * (10 - i)
    }
    let remainder = 11 - (sum % 11)
    if (remainder === 10 || remainder === 11) remainder = 0
    if (remainder !== parseInt(cpf.charAt(9))) return false

    sum = 0
    for (let i = 0; i < 10; i++) {
        sum += parseInt(cpf.charAt(i)) * (11 - i)
    }
    remainder = 11 - (sum % 11)
    if (remainder === 10 || remainder === 11) remainder = 0
    if (remainder !== parseInt(cpf.charAt(10))) return false

    return true
}

function isValidCNPJ(cnpj) {
    cnpj = cnpj.replace(/\D/g, '') // Remove caracteres não numéricos

    if (cnpj.length !== 14) return false

    let size = cnpj.length - 2
    let numbers = cnpj.substring(0, size)
    let digits = cnpj.substring(size)
    let sum = 0
    let pos = size - 7
    for (let i = size; i >= 1; i--) {
        sum += numbers.charAt(size - i) * pos--
        if (pos < 2) pos = 9
    }
    let result = sum % 11 < 2 ? 0 : 11 - (sum % 11)
    if (result !== parseInt(digits.charAt(0))) return false

    size = size + 1
    numbers = cnpj.substring(0, size)
    sum = 0
    pos = size - 7
    for (let i = size; i >= 1; i--) {
        sum += numbers.charAt(size - i) * pos--
        if (pos < 2) pos = 9
    }
    result = sum % 11 < 2 ? 0 : 11 - (sum % 11)
    if (result !== parseInt(digits.charAt(1))) return false

    return true
}

function formatCPF(cpf) {
    cpf = cpf.replace(/\D/g, '')
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4')
}

function formatCNPJ(cnpj) {
    cnpj = cnpj.replace(/\D/g, '')
    return cnpj.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5')
}

function formatTelefone(telefone) {
    telefone = telefone.replace(/\D/g, '')
    if (telefone.length === 11) {
        return telefone.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3')
    } else if (telefone.length === 10) {
        return telefone.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3')
    } else {
        return telefone
    }
}
function isValidSenha(senha) {
    if (senha.length < 5) {
        return false
    }
    if (!/\d/.test(senha)) {
        return false
    }
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(senha)) {
        return false
    }
    return true
}
</script>

<style scoped>
@media screen and (min-width: 764px) {
    .input-group {
        width: 300px;
        display: flex;
        flex-direction: column;
        margin: 20px 0;
    }
}
.input-group {
    display: flex;
    flex-direction: column;
    margin: 20px 0;
}
.input-group label {
    font-size: 0.9rem;
    font-weight: 500;
    margin-bottom: 5px;
}

input {
    padding: 10px;
    border-radius: 7px;
    border: 2px solid #1b1b1b;
}

.error-message {
    font-size: 0.8rem;
    color: #b40000;
}
</style>
