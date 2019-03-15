import test from 'ava';
var axios = require('axios');
const nock = require('nock');
const port = 3000;
const app = require('./app.js');

app.listen(port, () => {

  test('Test form exist', async t => {
    const res = await axios.get('http://localhost:3000/');
    let test = res.data.toString().includes('<form');
    t.true(test);
  });

  test.serial('Test ville identique', async t => {
    nock.cleanAll();
    try {
      const city = 'berlin';
      const longt = 26;
      const latt = 22;
      nock('https://geocode.xyz')
      .get(`/${city}?json=1&auth=759315464425069903834x1979`)
      .reply(200, { longt: longt, latt: latt});

      const res = await axios.post('http://localhost:3000/ville', {
        nom_ville: city
      });
      var test = res.data.toString().includes(city);
      t.true(test);
    }
    catch (error) {
      console.log(error);
      t.fail();
    }
  });

  test.serial('Test ville error', async t => {
    nock.cleanAll();
    try {
      const city = 'zefkjhzefkjnzef';
      const longt = 26;
      const latt = 22;
      nock('https://geocode.xyz')
      .get(`/${city}?json=1&auth=759315464425069903834x1979`)
      .reply(200, { error:1});

      const res = await axios.post('http://localhost:3000/ville', {
        nom_ville: city
      });
      var test = res.data.toString().includes('La ville entrée est inconnue');
      t.true(test);
    }
    catch (error) {
      console.log(error);
      t.fail();
    }

  });

  test.serial('test geocode 404', async t => {
    nock.cleanAll();
    try {
      const city = 'zefkjhzefkjnzef';
      const longt = 26;
      const latt = 22;
      nock('https://geocode.xyz')
      .get(`/${city}?json=1&auth=759315464425069903834x1979`)
      .reply(404, { error:1 });

      const res = await axios.post('http://localhost:3000/ville', {
        nom_ville: city
      });
      var test = res.data.toString().includes('Geocode is down');
    }
    catch (error) {
      console.log(error);
    }
    t.is(test, true);
  });

  test.serial('Test ville nock', async t => {
    nock.cleanAll();
    try {
      const city = 'berlin';
      const longt = 26;
      const latt = 22;
      nock('https://geocode.xyz')
      .get(`/${city}?json=1&auth=759315464425069903834x1979`)
      .reply(200, { longt: longt, latt: latt});

      const { data } = await axios.post('http://localhost:3000/ville', { nom_ville: city });
      t.true(data.toString().includes(`https://maps.google.com/maps?q=${latt},${longt}&hl=es;z=14&amp;output=embed`))
    }
    catch (error) {
      console.log('error');
      t.fail();
    }
  });
});
