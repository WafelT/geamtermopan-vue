import linksData from "@/data/links";

export default {
    actions: {
        fetchLinks(ctx) {
            ctx.commit('updateLinks', linksData);
        },
        changeActiveLinksAction(ctx, linkId) {
            ctx.commit('changeActiveLinksMutation', linkId);
        },
    },
    mutations: {
        updateLinks(state, links) {
            state.links = links;
        },
        changeActiveLinksMutation(state, linkId) {
            state.links.filter(l => {
                l.subThemesActive = false
                if (l.id === linkId) {
                    l.subThemesActive = true
                }
            });
        },
    },
    state: {
        links: [],
    },
    getters: {
        getLinks(state) {
            return state.links
        },
    },
}
