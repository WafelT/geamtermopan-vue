<template>
    <div class="modal" @click="closeModal">
        <div @click.stop class="modal__container">
            <header>
                <h4>{{ title }}</h4>
                <button @click="closeModal" class="modal__close"><svg><use xlink:href="@/assets/images/svg/sprite.svg#closeIcon"></use></svg></button>
            </header>
            <div v-if="isSuccess" class="modal__wrapper">
                <p>Твоя заявка на консультацию была успшено отправлена. В скором времени один из наших специалистов свяжется с тобой</p>
                <button @click="closeModal" type="button" class="modal__close-text modal-close-btn">Заркыть</button>
            </div>
            <slot v-else></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'my-modal',
    props: {
        title: {
            type: String,
            default: '',
        },
        isSuccess: {
            type: Boolean,
            default: false,
        },
    },
    methods: {
        closeModal() {
            this.$emit('closeModal')
        },
    }
}
</script> 