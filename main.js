import './style.css'
import Weather from './Weather';

// https://www.fruityvice.com/api/fruit/ -> API to get fruits?

document.querySelector('#app').innerHTML = `
  <h1 class="title">What fruit to eat today!</h1>
  <div class="add_container"> </div>
`

const weather = new Weather();