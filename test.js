import test from 'ava';
var axios = require('axios');

test('Test form exist', async t => {
  const res = await axios.get('https://evening-eyrie-83553.herokuapp.com/');
  let test = res.data.toString().includes('<form');
  t.is(test, true);
});

test('Test ville identique', async t => {
  try {
    let ville = 'Villepinte'
    const res = await axios.post('https://evening-eyrie-83553.herokuapp.com/ville', {
      nom_ville: ville
    });
    var test = res.data.toString().includes(ville);
  }
  catch (error) {
    console.log('error');
  }
  t.is(test, true);
})

test('Test ville error', async t => {
  try {
    let ville = 'zefkjhzefkjnzef'
    const res = await axios.post('https://evening-eyrie-83553.herokuapp.com/ville', {
      nom_ville: ville
    });
    var test = res.data.toString().includes('La ville entrée est inconnue');
  }
  catch (error) {
    console.log('error');
  }
  t.is(test, true);
})
