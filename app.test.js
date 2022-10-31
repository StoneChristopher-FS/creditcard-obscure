const card = require("./app");

describe('Credit Card Obscure Tests', () => {
    test('If a credit card number is not 14 or 16 characters in length it should report a error message', () => {
        expect(card("25364568985")).toEqual("Invalid credit card length, please try again!")
        expect(card("25364568985")).not.toEqual("xxxxxxx8985")
    })

    test('If a credit card number is 14 characters in length it should obscure the first 8 numbers and show the last 4', () => {
        expect(card("12348569456724")).toEqual("xxxxxxxx6724")
        expect(card("12348569456724")).not.toEqual("Invalid credit card length, please try again!")
    })

    test('If a credit card number is 16 characters in length it should obscure the first 8 numbers and show the last 4', () => {
        expect(card("1234856945679457")).toEqual("xxxxxxxxxxxx9457")
        expect(card("1234856945679457")).not.toEqual("Invalid credit card length, please try again!")
    })
})