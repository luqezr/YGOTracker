const express = require('express');
const router = express.Router();

// Models
const Deck = require('../models/Deck');

// Helpers
const { isAuthenticated } = require('../helpers/auth');

// New Deck
router.get('/decks/add', isAuthenticated, (req, res) => {
  res.render('decks/new-deck');
});

router.post('/decks/new-deck', isAuthenticated, async (req, res) => {
  const { title, description } = req.body;
  const errors = [];
  if (!title) {
    errors.push({text: 'Please Write a Title.'});
  }
  if (!description) {
    errors.push({text: 'Please Write a Description'});
  }
  if (errors.length > 0) {
    res.render('decks/new-deck', {
      errors,
      title,
      description
    });
  } else {
    const newDeck = new Deck({title, description});
    newDeck.user = req.user.id;
    await newDeck.save();
    req.flash('success_msg', 'Deck Added Successfully');
    res.redirect('/decks');
  }
});

// Get All Decks
router.get('/decks', isAuthenticated, async (req, res) => {
  const decks = await Deck.find({user: req.user.id}).sort({date: 'desc'});
  res.render('decks/all-decks', { decks });
});

// Edit decks
router.get('/decks/edit/:id', isAuthenticated, async (req, res) => {
  const deck = await Deck.findById(req.params.id);
  if(deck.user != req.user.id) {
    req.flash('error_msg', 'Not Authorized');
    return res.redirect('/decks');
  } 
  res.render('decks/edit-deck', { deck });
});

router.put('/decks/edit-deck/:id', isAuthenticated, async (req, res) => {
  const { title, description } = req.body;
  await Deck.findByIdAndUpdate(req.params.id, {title, description});
  req.flash('success_msg', 'Deck Updated Successfully');
  res.redirect('/decks');
});

// Delete decks
router.delete('/decks/delete/:id', isAuthenticated, async (req, res) => {
  await Deck.findByIdAndDelete(req.params.id);
  req.flash('success_msg', 'Deck Deleted Successfully');
  res.redirect('/decks');
});

module.exports = router;
