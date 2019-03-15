var express = require('express');
var router = express.Router();
var request = require('request');
var axios = require('axios');
var lacite;

async function callGeoCode(url) {
  return await axios.get(url);
}

router.post('/', async function(req, res) {
  try {
    lacite = req.body.nom_ville;
    const response = await callGeoCode(`https://geocode.xyz/${req.body.nom_ville}?json=1&auth=759315464425069903834x1979`);
    console.log(response.data);
    if(response.data.error == null || response.data.error == undefined){
      res.render('ville', {
        nom_ville: req.body.nom_ville,
        description: req.body.description,
        latitude: response.data.latt,
        longitude: response.data.longt,
        display: 'block'
      });
    }
    else {
      console.log('ERROR');
      res.render('ville', {
        nom_ville: 'La ville entrée est inconnue',
        display: 'none'
      });
    }
  } catch (error) {
    console.error(error);
    res.render('ville', {
      nom_ville: 'Geocode is down',
      display: 'none'
    });
  }
});

module.exports = router;
