const express = require('express')
const router = express.Router()
const request = require('request');
const urllib = require('urllib');

router.get('/sanity', function (req, res) {
    console.log('OK')
})

router.get('/recipes/:ingredient', function (req, res) {
    const ingredient = req.params.ingredient
    request(`https://recipes-goodness.herokuapp.com/recipes/${ingredient}`, function (error, response, body) {
        const data = JSON.parse(response.body)
        res.send(data.results)
    });
})

module.exports = router