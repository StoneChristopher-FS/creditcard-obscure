const card = require("./app");

describe('Credit Card Obscure Tests', () => {
    test('If a credit card number is not 12 - 16 characters in length it should report a error message', () => {
        expect(card("25364568")).toEqual("Invalid credit card length, please try again!")
        expect(card("25364568")).not.toEqual("****4568")
    })

    test('If a credit card number is between 12-16 characters in length it should obscure the first 8 numbers and show the last 4', () => {
        expect(card("12348569456724")).toEqual("**********6724")
        expect(card("156482566238942")).toEqual("***********8942")
        expect(card("12348569456724")).not.toEqual("Invalid credit card length, please try again!")
    })
})