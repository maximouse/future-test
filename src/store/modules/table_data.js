export default {
    actions: {
       async fetchCards(ctx){
            const res = await fetch('http://www.filltext.com/?rows=10&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}')
            const cards = await res.json()
            ctx.commit('updateCards', cards)
        }
    },
    mutations: {
        updateCards(state, cards) {
            state.cards = cards
        },
        createCard(state, newCard){
            state.cards.push(newCard)
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