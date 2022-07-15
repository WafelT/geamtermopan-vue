<template>
    <section class="make-order">
        <div class="make-order__container container__1150px">
            <div class="make-order__wrapper">
                <div class="make-order__wrapper-info">
                    <h2>Закажи бесплатный замер</h2>
                    <p>Процесс покупки пластиковых окон начинается с консультации и замера. Укажи свой номер телефона, наш специалист свяжется для уточнения деталей и удобного времени для выезда замерщика.</p>
                    <form class="contact-form" action="/" @submit.prevent>
                        <my-input
                            :label="'Номер телефона'"
                            :placeholder="'+_ (___) __-__-___'"
                            :isStar="true"
                            v-model="form.phone"
                            :filled="v$.form.phone.$model.length > 0 && true"
                            :isValid="!form.getSubmited ? false : v$.form.phone.$invalid"
                            :phone="true"
                        ></my-input>
                        <button @click="onSubmit" class="contact-form-submit g-orange-btn" type="submit">Заказать бесплатный замер</button>
                    </form>
                </div>
                <img class="make-order__wrapper-picture" src="@/assets/images/make-order-img.png" alt="make-order">
            </div>
        </div>
    </section>
</template>

<script>
import useVuelidate from '@vuelidate/core'
import { required, minLength } from '@vuelidate/validators'
import MyInput from '@/components/UI/MyInput.vue'
import './MakeOrder.scss'

export default {
    name: 'MakeOrder',
    setup () {
        return { v$: useVuelidate() }
    },
    components: { MyInput },
    data() {
        return {
            form: {
                phone: '',
                getSubmited: false, 
            },
        }
    },
    validations: {
        form: {
            phone: {
                required,
                minLength: minLength(17)
            },
        }
    },
    methods: {
        async onSubmit() {
            this.form.getSubmited = true;
            this.v$.form.$touch()
            if (this.v$.$invalid) {
                console.log('error')
            } else {
                try {
                    this.$emit('onSubmit')
                } catch(error) {
                    console.log(error);
                }
            }
        },
    }
}
</script>
