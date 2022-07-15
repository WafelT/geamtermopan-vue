<template>
    <header class="header">
        <div class="header__container container__1150px">
            <div class="header__contacts">
                <button class="burger" aria-label="burger" @click="toggleMobileMenu(true)">
                    <span></span>
                    <svg></svg>
                </button>
                <a href="./index.html" class="header__contacts-logo"><img src="@/assets/images/svg/logo.svg" alt="logo"></a>
                <a href="tel:+37376011515" class="header__contacts-phone">+373 76 011 515</a>
                <div class="lang-switcher lang-switcher--dk">
                    <button type="button" class="lang-switcher__btn active">Ro</button>
                    <button type="button" class="lang-switcher__btn">Ru</button>
                </div>
                <button @click="showModalCall" class="header__contacts-call">
                    <svg><use xlink:href="@/assets/images/svg/sprite.svg#phoneIcon"></use></svg>
                    <span>Заказать звонок</span>
                </button>
                <button @click="toggleCallMenu(true)" class="header__contacts-call header__contacts-call--mb"><svg><use xlink:href="@/assets/images/svg/sprite.svg#phoneIcon"></use></svg></button>
            </div>
            <nav class="header__nav">
                <ul>
                    <li v-for="link in links" :key="link.id">
                        <div class="header__nav-item-header">
                            <a href="#">{{ link.theme }}</a>
                            <svg v-if="link.subThemes.length > 0" class="link__arrow"><use xlink:href="@/assets/images/svg/sprite.svg#smallArrow"></use></svg>
                        </div>
                        <div v-if="link.subThemes.length > 0" class="header__drop-down">
                            <a v-for="subLink in link.subThemes" :key="subLink.id" href="#">{{ subLink.theme }}</a>
                        </div>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<script>
import { mapMutations } from 'vuex'
import './Header.scss'

export default {
    name: 'TheHeader',
    props: {
        links: {
            type: Object,
            default: () => {},
        }
    },
    methods: {
        ...mapMutations(['hasMobileMenuOpenedMutation', 'hasCallMenuOpenedMutation']),
        toggleMobileMenu(flag) {
            this.hasMobileMenuOpenedMutation(flag)
        },
        toggleCallMenu(flag) {
            this.hasCallMenuOpenedMutation(flag)
        },
        showModalCall() {
            this.$emit('showModalCall')
        },
    }
}
</script>