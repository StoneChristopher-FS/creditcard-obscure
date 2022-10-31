const obscure = (card) => {
    console.log(card.length)
    if(card.length == 14) {
        return `xxxxxxxx${card.slice(-4)}`
    }
    else if(card.length == 16) {
        return `xxxxxxxxxxxx${card.slice(-4)}`
    }
    else {
        return `Invalid credit card length, please try again!`
    }
}

module.exports = obscure

// card.length != 14 || card.length != 16

