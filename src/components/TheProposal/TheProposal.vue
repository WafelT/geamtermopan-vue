<template>
    <section class="proposal">
        <div class="proposal__container container__1150px">
            <div class="proposal__wrapper" :style="{backgroundColor: `${bgColor}`}">
                <div class="proposal__wrapper-info">
                    <h2>{{ title }}</h2>
                    <p>{{ description }}</p>
                    <a href="#" class="g-green-btn">{{ btnText }}</a>
                </div>
                <img class="proposal__wrapper-illustration" :src="require(`@/assets/images/${illustration}`)" alt="illustration">
            </div>
        </div>
    </section>
</template>

<script>
import './TheProposal.scss'

export default {
    name: 'TheProposal',
    props: {
        title: {
            type: String,
            default: ''
        },
        description: {
            type: String,
            default: ''
        },
        illustration: {
            type: String,
            default: ''
        },
        btnText: {
            type: String,
            default: ''
        },
        bgColor: {
            type: String,
            default: ''
        },
    }
}
</script>
