<template>
    <aside class="call-menu" @click="toggleCallMenu(false)">
        <div @click.stop class="call-menu__container container__1150px">
            <a href="tel:+37376011515" class="call-menu__contacts-call g-orange-btn">
                <svg><use xlink:href="@/assets/images/svg/sprite.svg#phoneIcon"></use></svg>
                <span>Позвонить +373 76 011 515</span>
            </a>
            <button @click="showModalCall" class="call-menu__order" type="button" data-modal-btn="call">Заказать звонок</button>
        </div>
    </aside>
</template>

<script>
import { mapActions, mapMutations } from 'vuex'
import './CallMenu.scss'

export default {
    name: 'CallMenu',
    methods: {
        ...mapActions(['hasCallMenuOpenedAction']),
        ...mapMutations(['hasCallMenuOpenedMutation']),
        toggleCallMenu(flag) {
            this.hasCallMenuOpenedMutation(flag)
        },
        showModalCall() {
            this.hasCallMenuOpenedMutation(false)
            this.$emit('showModalCall')
        },
    }
}
</script>
