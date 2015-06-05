/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var express = require('express');
var router = express.Router();

/* GET login page. */
router.get('/login', function(req, res, next) {
  res.render('index', { title: 'Login' });
});

/* GET authenticate page. */
router.post('/login', function(req, res, next) {
  res.render('index', { title: 'Authenticate' });
});

/* GET logout page. */
router.get('/logout', function(req, res, next) {
  res.render('index', { title: 'Logout' });
});


/* GET admin page. */
router.get('/admin', function(req, res, next) {
  res.render('index', { title: 'Admin' });
});


/* GET post page. */
router.get('/post', function(req, res, next) {
  res.render('index', { title: 'Post' });
});

/* GET postArticle page. */
router.post('/post', function(req, res, next) {
  res.render('index', { title: 'postArticle' });
});

/* GET articles page. */
router.get('/articles/:slug', function(req, res, next) {
  res.render('index', { title: 'articles' });
});

module.exports = router;
