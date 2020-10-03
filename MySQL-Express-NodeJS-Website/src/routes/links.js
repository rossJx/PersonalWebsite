const express = require('express');
const router = express.Router();

const pool = require('../database');
const { isLoggedIn } = require('../lib/auth');

router.get('/add', isLoggedIn, (req, res) => {
    res.render('links/add');
});

router.post('/add', isLoggedIn, async (req, res) => {
    const { title, description } = req.body;
    console.log(req.user.id);
    const newNote = {
        title,
        description,
        user_id: req.user.id
    };
    console.log(newNote)
    await pool.query('INSERT INTO notes set ?', [newNote]);
    req.flash('success', 'Note saved succesfully');

    res.redirect('/links');
});

router.get('/', isLoggedIn, async (req, res) => {
    const links = await pool.query('SELECT * FROM notes WHERE user_id = ?', [req.user.id]);
    console.log(links);
    res.render('links/list', {links});
});

router.get('/delete/:id', isLoggedIn, async (req, res) => {
    const { id } = req.params;
    await pool.query('DELETE FROM notes WHERE id = ?', [id]);
    req.flash('success', 'Note removed successfully');
    res.redirect('/links');
});

router.get('/edit/:id', isLoggedIn, async (req, res) => {
    const { id } = req.params;
    const links = await pool.query('SELECT * FROM notes WHERE id = ?', [id]);
    console.log(links[0]);
    res.render('links/edit', {link: links[0]});
});

router.post('/edit/:id', isLoggedIn, async (req, res) => {
    const { id } = req.params;
    const { title, description } = req.body;
    const newLink = {
        title,
        description
    };
    await pool.query('UPDATE notes set ? WHERE id = ?', [newLink, id]);
    req.flash('success', 'Note updated successfully');
    res.redirect('/links');
});

module.exports = router;