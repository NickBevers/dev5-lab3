export default class Weather{
    constructor(){
        this.getWeather();
    }

    

    static setAdvert(title, productUrl, gifUrl){
        document.querySelector('#app').innerHTML = `
            <h1 class="title"><a href="${productUrl}" target="_blank">${title}</a></h1>
            <img class="gif" style="width:200px; height:200px" src="${gifUrl}">
        `
    }
}