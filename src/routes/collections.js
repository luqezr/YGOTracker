const express = require("express");

const fetch = require("node-fetch");
const Bluebird = require("bluebird");

fetch.Promise = Bluebird;

const router = express.Router();

// Models
const Collection = require("../models/Collection");

// Helpers
const { isAuthenticated } = require("../helpers/auth");
// New collection

// sacar add y poner metodo post
router.get("/collections/add", isAuthenticated, (req, res) => {
  res.render("collections/new-collection");
});

router.post(
  "/collections/new-collection",
  isAuthenticated,
  async (req, res) => {
    const { title, description } = req.body;
    const errors = [];
    if (!title) {
      errors.push({ text: "Please Write a Title." });
    }
    if (!description) {
      errors.push({ text: "Please Write a Description" });
    }
    if (errors.length > 0) {
      res.render("collections/new-collection", {
        errors,
        title,
        description,
      });
    } else {
      const newCollection = new Collection({ title, description });
      newCollection.user = req.user.id;
      await newCollection.save();
      req.flash("success_msg", "collection Added Successfully");
      res.redirect("/collections");
    }
  }
);

// Add to collection

// router.post('/addToCollection/:id' . podria ser get
router.post("/addToCollection", isAuthenticated, async (req, res, next) => {
  try {
    const collection = await Collection.findById(req.user.collections[0]);

    const card = await Card.findOne({ set_code: req.body.set_code });

    if (card) {
      collection.cards.push(card);

      await collection.save();
      res.json({ error: null, message: "Card added!" });
      // https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Utilizando_Fetch
      //Collection.updateOne funciona pero la agrega a una sola coleccion
      console.log(
        "Card ID " +
          req.body.set_code +
          " added to collection " +
          req.user.collections[0]
      );
    } else {
      throw new Error("ke ase gil (°)>");
    }
  } catch (err) {
    console.error(err);
    next(err);
  }
});

// Edit Collections
router.get("/collections/edit/:id", isAuthenticated, async (req, res) => {
  const collection = await Collection.findById(req.params.id);
  console.log(collection._id + " linea 58");
  if (collection.user != req.user.id) {
    req.flash("error_msg", "Not Authorized");
    return res.redirect("/collections");
  }
  res.render("collections/edit-collection", { collection });
});

router.put(
  "/collections/edit-collection/:id",
  isAuthenticated,
  async (req, res) => {
    const { title, description } = req.body;
    await Collection.findByIdAndUpdate(req.params.id, { title, description });
    console.log(req.params.id + " linea 69");
    req.flash("success_msg", "collection Updated Successfully");
    res.redirect("/collections");
  }
);

// Get All Collections
router.get("/collections", isAuthenticated, async (req, res) => {
  const collection = await Collection.findById(req.user.collections[0]);
  const populatedCollection = collection.populate("cards");

  /* aca tendria que hacer un fetch de COLLECTIONS  
  https://db.ygoprodeck.com/api/v7/cardsetsinfo.php?setcode=jump-en006 
  con un for para cada item de la coleccion */

  // cambiar a collection : populatedCollection
  res.render("collections/all-collections", {
    collections: populatedCollection,
  });
});

// Delete Collections
router.delete("/collections/delete/:id", isAuthenticated, async (req, res) => {
  await Collection.findByIdAndDelete(req.params.id);
  req.flash("success_msg", "collection Deleted Successfully");
  res.redirect("/collections");
});

module.exports = router;
