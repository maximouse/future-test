export default {
    actions: {
       async fetchCards(ctx, link){

            
            let res = await fetch(link)
            const cards = await res.json()
            ctx.commit('updateCards', cards)
        }
    },
    mutations: {
        updateCards(state, cards) {
            state.cards = cards
        },
        createCard(state, newCard){
            state.cards.unshift(newCard)
            console.log(state.cards)
        },
        deleteCard(state, id){
           state.cards = state.cards.filter(p => p.id !== id)   
        }
    },
    state: {
        cards: []
    },
    getters: {
        allCards(state){
            return state.cards
        },
        cardsCount(state){
            return state.cards.length
        }
    }
}