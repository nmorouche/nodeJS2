import test from 'ava';
var axios = require('axios');
/*
test('test form', async t => {
  await request('https://evening-eyrie-83553.herokuapp.com/', (error, response, body) => {
    console.log(body);
    t.pass();
  });
});
*/

test('Test form exist', async t => {
  const res = await axios.get('http://localhost:3000/');
  let test = res.data.toString().includes('<form');
  t.is(test, true);
});

test('Test ville identique', async t => {
  try {
    let ville = 'Villepinte'
    const res = await axios.post('http://localhost:3000/ville', {
      nom_ville: ville
    });
    var test = res.data.toString().includes(ville);
  }
  catch (error) {
    console.log('error');
  }
  t.is(test, true);
})
