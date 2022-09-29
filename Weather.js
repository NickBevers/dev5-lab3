export default class Weather{
    constructor(){
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

    
}