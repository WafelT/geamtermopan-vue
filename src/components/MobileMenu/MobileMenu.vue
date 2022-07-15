<template>
    <aside class="mobile-menu">
        <header class="container__1150px">
            <div class="lang-switcher lang-switcher--mb">
                <button type="button" class="lang-switcher__btn active">Ro</button>
                <button type="button" class="lang-switcher__btn">Ru</button>
            </div>
            <button type="button" class="mobile-menu__close" @click="toggleMobileMenu(false)"><svg><use xlink:href="@/assets/images/svg/sprite.svg#closeIcon"></use></svg></button>
        </header>
        <div class="mobile-menu__container container__1150px">
            <nav class="mobile-menu__nav">
                <ul>
                    <li v-for="link in links" :key="link.id">
                        <button @click="changeActiveLinksAction(link.id)" class="mobile-menu__nav-item-header">
                            <a href="#">{{ link.theme }}</a>
                            <svg v-if="link.subThemes.length > 0" class="link__arrow"><use xlink:href="@/assets/images/svg/sprite.svg#smallArrow"></use></svg>
                        </button>
                        <transition name="drop-down">
                            <div v-if="link.subThemes.length > 0 && link.subThemesActive" class="mobile-menu__drop-down">
                                <a v-for="subLink in link.subThemes" :key="subLink.id" href="#">{{ subLink.theme }}</a>
                            </div>
                        </transition>
                    </li>
                </ul>
            </nav>
        </div>
    </aside>
</template>

<script>
import { mapActions, mapMutations } from 'vuex'
import './MobileMenu.scss'

export default {
    name: 'MobileMenu',
    props: {
        links: {
            type: Object,
            default: () => {},
        }
    },
    methods: {
        ...mapActions(['hasMobileMenuOpenedAction', 'changeActiveLinksAction']),
        ...mapMutations(['hasMobileMenuOpenedMutation'], 'changeActiveLinksMutation'),
        toggleMobileMenu(flag) {
            this.hasMobileMenuOpenedMutation(flag)
        },
    }
}
</script>