//https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1
//https://deckofcardsapi.com/api/deck/<<deck_id>>/draw/?count=2
const axios = require("axios");

const card_draw = (number) => {
    return new Promise((resolve, reject) => {
        axios.get("https://deckofcardsapi.com/api/deck/new/draw/?count=" + number)
        .then(function (response) {
            resolve(response.data)
        })
        .catch(function (error) {
            reject(error);
        });
    });
}
module.exports = {
    card_draw
}