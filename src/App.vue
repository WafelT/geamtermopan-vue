<template>
  <header-vue @showModalCall="showModalCall" :links="getLinks"></header-vue>

  <transition name="call-menu">
    <call-menu
      v-if="getIsCallMenuOpen"
      @showModalCall="showModalCall"
    ></call-menu>
  </transition>

  <transition name="mobile-menu">
    <mobile-menu v-if="getIsMobileMenuOpen" :links="getLinks"></mobile-menu>
  </transition>

  <transition name="modal">
    <my-modal 
      v-if="isModalCall"
      @closeModal="closeModalCall"
      :title="'Заказать звонок'"
    >
      <my-form
        @onSubmit="onSubmit"
      ></my-form>
    </my-modal>
  </transition>

  <transition name="modal">
    <my-modal
      @closeModal="closeModalConsultation"
      v-if="isModalConsultation"
      :title="'Заказать консультацию'"
    >
      <my-form
        @onSubmit="onSubmit"
      ></my-form>
    </my-modal>
  </transition>

  <transition name="modal">
    <my-modal 
      @closeModal="closeModalSuccess"
      v-if="isModalSuccess"
      :title="'Заявка отправлена'"
      :isSuccess="true"
    ></my-modal>
  </transition>

  <div class="page" id="page">
    <the-main @showModalConsultation="showModalConsultation" @showModalSuccess="showModalSuccess"></the-main>
  </div>

  <footer-vue></footer-vue>
</template>

<script>
  import HeaderVue from '@/components/Header/Header.vue'
  import FooterVue from '@/components/Footer/Footer.vue'
  import MobileMenu from '@/components/MobileMenu/MobileMenu.vue'
  import MyModal from './components/UI/MyModal.vue'
  import MyForm from './components/UI/MyForm.vue'
  import CallMenu from './components/CallMenu/CallMenu.vue'

  import TheMain from '@/views/TheMain.vue'
  import { mapActions, mapGetters } from 'vuex'

  export default {
    name: 'App',
    components: { HeaderVue, FooterVue, TheMain, MobileMenu, MyModal, MyForm, CallMenu },
    data() {
      return {
        isModalCall: false,
        isModalConsultation: false,
        isModalSuccess: false,
      }
    },
    computed: { ...mapGetters(['getIsMobileMenuOpen', 'getIsCallMenuOpen', 'getLinks']) },
    mounted() {
      this.fetchLinks();
    },
    methods: {
      ...mapActions(['fetchLinks']),
      showModalCall() {
        this.isModalCall = true;
      },
      showModalConsultation() {
        this.isModalConsultation = true;
      },
      showModalSuccess() {
        console.log('app')
        this.isModalSuccess = true;
      },
      onSubmit() {
        this.isModalCall = false;
        this.isModalConsultation = false;
        
        this.isModalSuccess = true;
      },
      closeModalCall() {
        this.isModalCall = false;
      },
      closeModalSuccess() {
        this.isModalSuccess = false;
      },
      closeModalConsultation() {
        this.isModalConsultation = false;
      },
    },
  }
</script>

<style lang="scss">
  @import '@/assets/styles/_mixins.scss';
  @import '@/assets/styles/_vars.scss';
  @import '@/assets/styles/_fonts.scss';

  @import '@/assets/styles/global.scss';
  @import '@/assets/styles/style.scss';

  @import '@/assets/styles/blocks/burger.scss';
  @import '@/assets/styles/blocks/lang-switcher.scss';
  @import '@/assets/styles/blocks/modal.scss';
  @import '@/components/CallMenu/CallMenu.scss'
</style>
