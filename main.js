import './style.css'
import javascriptLogo from './javascript.svg'
// import { setupCounter } from './counter.js'

// https://www.fruityvice.com/api/fruit/ -> API to get fruits7
// https://open-meteo.com/en/docs#latitude=50.8371&longitude=4.3676&hourly=temperature_2m -> API to get weather
// https://api.open-meteo.com/v1/forecast?latitude=50.8371&longitude=4.3676&hourly=temperature_2m,rain,weathercode -> API to get weather better

document.querySelector('#app').innerHTML = `
  <h1 class="title">What fruit to eat today!</h1>
  <div class="add_container"> </div>
`
