<template>
    <div 
    class="g-input"
    :class="[
        { 'input--filled': filled },
    ]"
    >
        <input 
            v-if="!phone"
            autocomplete="off" type="text" 
            :placeholder="placeholder" 
            @input="updateInput" 
            :value="modelValue"
        >
        <imask-input 
            v-if="phone"
            autocomplete="off" type="tel" 
            :placeholder="placeholder" 
            @input="updateInput" 
            :value="modelValue"
            :mask="phoneNumberMask.mask"
        ></imask-input>
        <label for="name" v-if="!isStar">{{ label }}</label>
        <label for="name" v-if="isStar">{{ label }}<b>*</b></label>
        <transition name="hint">
            <div class="g-input__hint" v-if="isValid">{{ phone ? 'Заполните полностью номер телефона' : 'Это поле обязательно!' }}</div>
        </transition>
    </div>
</template>

<script>
import { IMaskComponent } from 'vue-imask';

export default {
    name: 'my-input',
    data() {
        return {
            phoneNumberMask: {
                mask: '+{373} (000) 000-00',
                lazy: true,
            }
        }
    },
    components: {
      'imask-input': IMaskComponent
    },
    props: {
        modelValue: [String, Number],
        placeholder: {
            type: String,
            default: ''
        },
        label: {
            type: String,
            default: ''
        },
        isStar: {
            type: Boolean,
            default: false
        },
        isEmpty: {
            type: Boolean,
            default: false
        },
        isValid: {
            type: Boolean,
            default: true
        },
        filled: {
            type: Boolean,
            default: false
        },
        phone: {
            type: Boolean,
            default: false
        },
    },
    methods: {
        updateInput(e) {
            this.$emit('update:modelValue', e.target.value)
        },
        initError() {
            this.error;
        }
    },
}
</script> 

<style lang="scss" scoped>
.hint-enter-active,
.hint-leave-active {
    transition: .4s;
    opacity: 1;
}

.hint-enter-from,
.hint-leave-to {
    transition: .4s;
    opacity: 0;
}
</style>