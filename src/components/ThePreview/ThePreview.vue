<template>
    <section class="preview">
        <div class="preview__container container__1150px">
            <div class="preview__wrapper" :style="{backgroundImage: `url(${require('@/assets/images/preview-1.png')})`}">
                <div class="preview__wrapper-info">
                    <h1>Закажи пластиковые окна и двери ПВХ Саламандер</h1>
                    <p>Отправьте заявку и мы бесплатно приедем и снимим мерки</p>
                    <a href="#" class="g-orange-btn" data-modal-btn="consultation" @click="showModalConsultation">Отправить заявку</a>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import './ThePreview.scss'

export default {
    name: 'ThePreview',
    methods: {
        showModalConsultation() {
            this.$emit('showModalConsultation')
        },
    }
}
</script>
