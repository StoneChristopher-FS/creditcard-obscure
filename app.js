const obscure = (card) => {
    if(card.length >= 12 && card.length <= 16) {
        return card.slice(-4).padStart(card.length, "*")
    }
    else {
        return `Invalid credit card length, please try again!`
    }
}

module.exports = obscure