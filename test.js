import test from 'ava';
import axios from 'axios'
/*
test('test form', async t => {
  await request('https://evening-eyrie-83553.herokuapp.com/', (error, response, body) => {
    console.log(body);
    t.pass();
  });
});
*/
test('Test requete', async t => {
  const res = await axios.get('https://evening-eyrie-83553.herokuapp.com');
  let test = res.data.toString().includes('<form');
  t.is(test, true);

});
