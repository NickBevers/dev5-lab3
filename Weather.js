export default class Weather{
    constructor(){
        this.getWeather();
    }
    
    checkLastCall(){
        if(localStorage.getItem('lastWeatherCall')){
            const lastWeatherCall = localStorage.getItem('lastWeatherCall');
            const now = new Date().getTime()/1000;
            const diff = now - lastWeatherCall;
            console.log(diff);
            (diff > 3600) ? ()=>{ return false; } : ()=>{ localStorage.setItem('lastWeatherCall', new Date().getTime()/1000); return true; };
        }else{
            localStorage.setItem('lastWeatherCall', new Date().getTime()/1000);
            return false;
        }
    };

    getWeather(){
        if(!this.checkLastCall()){
            navigator.geolocation.getCurrentPosition(position => {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;

                fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude.toFixed(4)}&longitude=${longitude.toFixed(4)}&daily=weathercode,rain_sum,windspeed_10m_max&timezone=auto`)
                .then(response => response.json())
                .then(data => {
                    localStorage.setItem('weatherData', JSON.stringify(data));
                    console.log(data);
                })
            });
        }else{
            let data = JSON.parse(localStorage.getItem('weatherData'));
            console.log(data);
        }
    }
}