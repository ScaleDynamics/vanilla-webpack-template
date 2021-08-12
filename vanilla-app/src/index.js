import '@warpjs/engine';
import backend from './.backend/backend';
import './styles/app.css';

// init module client
const { hello } = new backend();

// call module function
hello().then((msg) => {
  document.getElementById('message').innerHTML = msg;
});
