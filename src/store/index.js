import links from '@/store/modules//links';
import Vuex from 'vuex';
import mobileMenu from '@/store/modules/mobile-menu';

export default new Vuex.Store({
    modules: {
        mobileMenu,
        links
    }
})