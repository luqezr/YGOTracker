const fetch = require('node-fetch');
const Card = require("./models/Card");


async function fetchCards() {

    try {
        const cardInfo = await fetch("https://db.ygoprodeck.com/api/v7/cardinfo.php?&misc=yes")
        const results = (await cardInfo.json()).data
        console.log(results)
        for (let b = 0; b < results.length; b++) {
            // for (let b = 0; b < 10; b++) {
            // info gral de la carta
            const cc = results[b];
            // console.log(cc)
            cc._id = cc.id;
            const newCard = new Card(cc);
            // console.log(newCard)
            await newCard.save();

        }

    } catch (err) {
        console.error(err)
    }

}

 fetchCards()



async function updateCards() {

    try {
        const cardInfo = await fetch("https://db.ygoprodeck.com/api/v7/cardinfo.php?&misc=yes")
        const results = (await cardInfo.json()).data
        console.log(results)
        for (let b = 0; b < results.length; b++) {

            const cc = results[b];
            const _id = cc.id
            Card.findByIdAndUpdate(_id, { card_sets: cc.card_sets },
                function (err, docs) {
                    if (err) {
                        console.log("Card ", _id, " was not updated, error: ", err)
                    }
                    else {
                        // console.log("Updated card : ", _id);
                    }
                });

        }
    } catch (err) {
        console.error(err)
    }

}


setInterval(updateCards, (24 * 60 * 60 * 1000))