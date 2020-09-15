const express = require('express');

const router = express.Router();

// Models
const Wishlist = require('../models/wishlist');

// Helpers
const { isAuthenticated } = require('../helpers/auth');
// New wishlist
router.get('/wishlists/add', isAuthenticated, (req, res) => {
  res.render('wishlists/new-wishlist');
});

router.post('/wishlists/new-wishlist', isAuthenticated, async (req, res) => {
  const { title, description } = req.body;
  const errors = [];
  if (!title) {
    errors.push({text: 'Please Write a Title.'});
  }
  if (!description) {
    errors.push({text: 'Please Write a Description'});
  }
  if (errors.length > 0) {
    res.render('wishlists/new-wishlist', {
      errors,
      title,
      description
    });
  } else {
    const newWishlist = new Wishlist({title, description});
    newWishlist.user = req.user.id;
    await newWishlist.save();
    req.flash('success_msg', 'wishlist Added Successfully');
    res.redirect('/wishlists');
  }
});

// Add to wishlist

router.post('/addToWishlist', isAuthenticated, async (req, res) => {
  console.log(req.body.cardId);
  let thisCard = req.body.cardId
  await Wishlist.update(req.params.id, { $push: { cards: thisCard  } });
});




// Get All wishlists
router.get('/wishlists', isAuthenticated, async (req, res) => {
  const wishlists = await Wishlist.find({user: req.user.id}).sort({date: 'desc'});
  res.render('wishlists/all-wishlists', { wishlists });
});

// Edit wishlists
router.get('/wishlists/edit/:id', isAuthenticated, async (req, res) => {
  const wishlist = await Wishlist.findById(req.params.id);
  if(wishlist.user != req.user.id) {
    req.flash('error_msg', 'Not Authorized');
    return res.redirect('/wishlists');
  } 
  res.render('wishlists/edit-wishlist', { wishlist });
});

router.put('/wishlists/edit-wishlist/:id', isAuthenticated, async (req, res) => {
  const { title, description } = req.body;
  await Wishlist.findByIdAndUpdate(req.params.id, {title, description});
  req.flash('success_msg', 'wishlist Updated Successfully');
  res.redirect('/wishlists');
});

// Delete wishlists
router.delete('/wishlists/delete/:id', isAuthenticated, async (req, res) => {
  await Wishlist.findByIdAndDelete(req.params.id);
  req.flash('success_msg', 'wishlist Deleted Successfully');
  res.redirect('/wishlists');
});

module.exports = router;
