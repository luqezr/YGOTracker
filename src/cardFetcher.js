const fetch = require('node-fetch');
const Card = require("./models/Card");
const ObjectId = require('mongoose').Types.ObjectId;

async function fetchCards() {

    try {
        const cardInfo = await fetch("https://db.ygoprodeck.com/api/v7/cardinfo.php?&misc=yes")
        const results = (await cardInfo.json()).data
        console.log(results)
        for (let b = 0; b < results.length; b++) {
            // for (let b = 0; b < 10; b++) {
            // info gral de la carta
            const cc = results[b];
            if (!cc.card_sets)
                continue;
            const common = {
                archetype: cc.archetype, desc: cc.desc, cardId: cc.id, name: cc.name, race: cc.race,
                type: cc.type, level: cc.level, atk: cc.atk, def: cc.def, link: cc.link,
                linkval: cc.linkval, linkmarker: cc.linkmarker, card_images: cc.card_images, misc_info: cc.misc_info
            };

            try {
                // la parte de card_sets
                for (let i = 0; i < cc.card_sets.length; i++) {
                    const set = cc.card_sets[i];
                    set.set_price = parseFloat(set.set_price);
                    Object.assign(set, common);

                    const card = await Card.findOneAndUpdate({ set_code: set.set_code }, set, { upsert: true });
                    /*                    if (!card) {
                                           const newCard = new Card(set);
                                           await newCard.save();
                                       }
                    */

                }
            } catch (err) {
                console.error(err)
            }
            //const newCards = new Card(results[b])
        }

    } catch (err) {
        console.error(err)
    }

}

fetchCards()



setInterval(fetchCards, (24 * 60 * 60 * 1000))