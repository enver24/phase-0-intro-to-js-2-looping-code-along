let cards = [];

function writeCards(names) {
    for (let i = 0; i < names.length; i++) {
        cards.push (`Thank you, ${names[i]}, for the wonderful surprise gift!`);
    };
    return cards;
};

function countDown (integer) {
    while (integer >= 0) {
        console.log(integer--);
    };
}