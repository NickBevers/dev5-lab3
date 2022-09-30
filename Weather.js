export default class Weather{
    constructor(){
        this.getWeather();
    }

    static getWeather(){
        const lastWeatherCall = localStorage.getItem('lastWeatherCall');
        const now = new Date().getTime()/1000;
        const diff = now - lastWeatherCall;
        let weatherData, animalUrl;

        if(diff > 3600){ 
            localStorage.setItem('lastWeatherCall', new Date().getTime()/1000);
            navigator.geolocation.getCurrentPosition(position => {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;
    
                fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude.toFixed(4)}&longitude=${longitude.toFixed(4)}&daily=weathercode,rain_sum,windspeed_10m_max&timezone=auto`)
                .then(response => response.json())
                .then(data => {
                    weatherData = data;
                    localStorage.setItem('weatherData', JSON.stringify(data));

                    if (weatherData.daily.rain_sum[1] > 3){
                        console.log('It will rain tomorrow');
                        animalUrl = this.getAnimalGif("fish");
                    } else{
                        console.log('It will not rain tomorrow');
                        animalUrl = this.getAnimalGif("vulture");
                    }
                })
            });
        } else{
            weatherData = JSON.parse(localStorage.getItem('weatherData'));

            if (weatherData.daily.rain_sum[1] > 3){
                console.log('It will rain tomorrow');
                animalUrl = this.getAnimalGif("Feel like a fish in the rain with Dior", "https://www.dior.com/nl_be/fashion/products/293B103CB041_C800-zwemshort-met-dior-oblique-motief-grijs-technisch-canvas?objectID=293B103CB041_C800&query=zwem&queryID=e895fbc2265fc711eec25a4cd2a5f7fd", "fish");
            } else{
                console.log('It will not rain tomorrow');
                animalUrl = this.getAnimalGif("Protect your eyes with the Dior sunglasses","https://www.dior.com/nl_be/fashion/products/DSGTB3UXR_10A0-diorsignature-b3u-zonnebril-zwarte-vlinderzonnebril?objectID=DSGTB3UXR_10A0&query=zonnebril&queryID=2dabb9de753ddd5ae82c74dd8b1ccaf9" , "vulture");
            }
        };
    }


    static setAdvert(title, productUrl, gifUrl){
        document.querySelector('#app').innerHTML = `
            <h1 class="title"><a href="${productUrl}" target="_blank">${title}</a></h1>
            <img class="gif" style="width:200px; height:200px" src="${gifUrl}">
        `
    }
}