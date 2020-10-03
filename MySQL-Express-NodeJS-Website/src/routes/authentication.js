const express = require('express');
const router = express.Router();
//const { check, validationErrors, validationResult } = require('express-validator');
const passport = require('passport');
const { isLoggedIn } = require('../lib/auth');


router.get('/access', (req,res) => {
  res.render('auth/access');
});
// Register
router.get('/register', (req, res) => {
  res.render('auth/register');
});

router.post('/register', passport.authenticate('local.register', {
  successRedirect: '/profile',
  failureRedirect: '/register',
  failureFlash: true
}));

// Login
router.get('/login', (req, res) => {
  res.render('auth/login');
});

router.post('/login', (req, res, next) => {
  /*req.check('username', 'Username is Required').notEmpty();
  req.check('password', 'Password is Required').notEmpty();
  const errors = req.validationErrors();
  if (errors.length > 0) {
    req.flash('message', errors[0].msg);
    res.redirect('/signin');
  }*/
  passport.authenticate('local.login', {
    successRedirect: '/profile',
    failureRedirect: '/login',
    failureFlash: true
  })(req, res, next);
});

router.get('/logout', (req, res) => {
  req.logOut();
  res.redirect('/');
});

router.get('/profile', isLoggedIn, (req, res) => {
  res.render('profile');
});

module.exports = router;