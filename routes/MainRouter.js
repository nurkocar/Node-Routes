const express = require('express');
const router = express.Router();

router.get('/', (request, response) => {
    response.render('main', {name: request.query.name});
});

router.post('/', (req, res) => {
    res.send('post');
})

module.exports = router;