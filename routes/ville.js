var express = require('express');
var router = express.Router();
var request = require("request");

/* GET users listing. */
router.post('/', function(req, res) {
  request(`https://geocode.xyz/${req.body.nom_ville}?json=1&auth=125570002384179154319x1962`, function(error, response, body) {
    let jsonParse = JSON.parse(body);
    res.render('ville', { nom_ville: req.body.nom_ville, description: req.body.description, latitude: jsonParse.latt, longitude: jsonParse.longt});
  });
});

module.exports = router;
