<template>
    <form action="/" class="contact-form" @submit.prevent>
        <my-input
            :label="'Полное имя'"
            v-model="form.name"
            :filled="v$.form.name.$model.length > 0 && true"
            :isValid="!form.getSubmited ? false : v$.form.name.$invalid"
        ></my-input>
        <my-input
            :label="'Номер телефона'"
            :placeholder="'+_ (___) __-__-___'"
            :isStar="true"
            v-model="form.phone"
            :filled="v$.form.phone.$model.length > 0 && true"
            :isValid="!form.getSubmited ? false : v$.form.phone.$invalid"
            :phone="true"
        ></my-input>
        <div :class="
            [
                { 'modal__policy': true },
                { 'policy-error': form.getSubmited },
            ]">
            <input id="policyCheckboxConsultation" type="checkbox" v-model="form.policyAgreement">
            <label for="policyCheckboxConsultation">
                <p>Я согласен с условиями и <a href="#">политикой конфиденциальности</a></p>
            </label>
        </div>
        <button class="contact-form-submit g-orange-btn" @click="onSubmit">Отправить заявку</button>
    </form>
</template>

<script>
import useVuelidate from '@vuelidate/core'
import { required, minLength } from '@vuelidate/validators'
import MyInput from '@/components/UI/MyInput.vue'

export default {
    name: 'my-form',
    components: { MyInput },
    setup () {
        return { v$: useVuelidate() }
    },
    data() {
        return {
            form: {
                name: '',
                phone: '',
                policyAgreement: false,
                getSubmited: false, 
            },
        }
    },
    validations: {
        form: {
            name: {
                required,
                minLength: minLength(2)
            },
            phone: {
                required,
                minLength: minLength(17)
            },
        }
    },
    methods: {
        onSubmit() {
            this.form.getSubmited = true;
            this.v$.form.$touch()
            if (this.v$.$invalid || !this.form.policyAgreement) {
                console.log('error')
            } else {
                try {
                    // alert('DATA HAS SENDED')
                    this.$emit('onSubmit')
                } catch(error) {
                    console.log(error);
                }
            }
        },
    }
}
</script> 