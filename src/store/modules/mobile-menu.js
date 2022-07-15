export default {
    actions: {
        hasMobileMenuOpenedAction(ctx, isOpen) {
            ctx.commit('hasMobileMenuOpenedMutation', isOpen);
        },
        hasCallMenuOpenedAction(ctx, isOpen) {
            ctx.commit('hasCallMenuOpenedMutation', isOpen);
        },
    },
    mutations: {
        hasMobileMenuOpenedMutation(state, isOpen) {
            return state.isMobileMenuOpen = isOpen;
        },
        hasCallMenuOpenedMutation(state, isOpen) {
            return state.isCallMenuOpen = isOpen;
        },
    },
    state: {
        isMobileMenuOpen: false,
        isCallMenuOpen: false,
    },
    getters: {
        getIsMobileMenuOpen(state) {
            return state.isMobileMenuOpen
        },
        getIsCallMenuOpen(state) {
            return state.isCallMenuOpen
        },
    },
}
