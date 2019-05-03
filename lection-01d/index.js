new Vue({
    el: '#app',
    data: {
        cards: [
            {
                id: 1,
                title: 'Seitan polaroid flannel',
                subtitle: 'next level',
                favorite: false
            },
            { 
                id: 2,
                title: 'Street art swag',
                favorite: false
            },
            {
                id: 3,
                title: 'Deep v selvage tousled',
                subtitle: 'tousled copper mug, gochujang crucifix try-hard tbh',
                favorite: false
            },
        ],
        cardTitle: "",
        favoriteCards: []
    },
    methods: {
        removeCard(id) {
            this.cards.splice(id, 1);
            this.favoriteCards.splice(id, 1);
        },
        addCard() {
            this.cards.push({
                id: this.cards.length + 1,
                title: this.cardTitle,
                favorite: false
            });
            this.cardTitle = "";
        },
        addFavoriteCard(id) {
            const idCard = this.favoriteCards.indexOf(id);
            if(idCard === -1) {
                this.favoriteCards.push(id);
            } else {
                this.favoriteCards.splice(idCard, 1);
            }
        },
        isFavorite(id) {
            return this.favoriteCards.indexOf(id) !== -1;
        }
    },
});
