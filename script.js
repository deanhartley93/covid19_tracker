//API return data for each individual city
//city_cases, city_deaths
//https://covid-api.mmediagroup.fr/v1
 
 
//World Country API data
//UK
const ukCasesRequest = fetch('https://covid-api.mmediagroup.fr/v1/cases?country=United Kingdom').then(response => 
    response.json()).then(data => {
        let ukData = data['All'];

        //Get and covert total cases to string
        let ukConfirmed = ukData['confirmed'].toString();
        document.getElementById('uk_cases').innerHTML = ukConfirmed;

        //Get and covert total deaths to string
        let ukDeaths = ukData['deaths'].toString();
        document.getElementById('uk_deaths').innerHTML = ukDeaths;
    });

//Italy
const italyRequest = fetch('https://covid-api.mmediagroup.fr/v1/cases?country=Italy').then(response => 
    response.json()).then(data => {
    let italyData = data['All'];
    let italyConfirmed = italyData['confirmed'].toString();
    document.getElementById('italy_cases').innerHTML = italyConfirmed;

    //Get and covert total deaths to string
    let italyDeaths = italyData['deaths'].toString();
    document.getElementById('italy_deaths').innerHTML = italyDeaths;
});

//Mexico
const mexicoRequest = fetch('https://covid-api.mmediagroup.fr/v1/cases?country=Mexico').then(response => 
    response.json()).then(data => {
    let mexicoData = data['All'];

    let mexicoConfirmed = mexicoData['confirmed'].toString();
    document.getElementById('mexico_cases').innerHTML = mexicoConfirmed;

    //Get and covert total deaths to string
    let mexicoDeaths = mexicoData['deaths'].toString();
    document.getElementById('mexico_deaths').innerHTML = mexicoDeaths;
});

//Canada
const canadaRequest = fetch('https://covid-api.mmediagroup.fr/v1/cases?country=Canada').then(response => 
    response.json()).then(data => {
    let canadaData = data['All'];

    let canadaConfirmed = canadaData['confirmed'].toString();
    document.getElementById('canada_cases').innerHTML = canadaConfirmed;

    //Get and covert total deaths to string
    let canadaDeaths = canadaData['deaths'].toString();
    document.getElementById('canada_deaths').innerHTML = canadaDeaths;
});

//Japan
const japanRequest = fetch('https://covid-api.mmediagroup.fr/v1/cases?country=Japan').then(response => 
    response.json()).then(data => {
    let japanData = data['All'];

    let japanConfirmed = japanData['confirmed'].toString();
    document.getElementById('japan_cases').innerHTML = japanConfirmed;

    //Get and covert total deaths to string
    let japanDeaths = japanData['deaths'].toString();
    document.getElementById('japan_deaths').innerHTML = japanDeaths;
});

//China
const chinaRequest = fetch('https://covid-api.mmediagroup.fr/v1/cases?country=China').then(response => 
    response.json()).then(data => {
    let chinaData = data['All'];

    let chinaConfirmed = chinaData['confirmed'].toString();
    document.getElementById('china_cases').innerHTML = chinaConfirmed;

    //Get and covert total deaths to string
    let chinaDeaths = chinaData['deaths'].toString();
    document.getElementById('china_deaths').innerHTML = chinaDeaths;
});

//United States API data
//California
const californiaRequest = fetch('https://covid-api.mmediagroup.fr/v1/cases?country=US').then(response => 
    response.json()).then(data => {
    let californiaData = data['California'];

    let californiaConfirmed = californiaData['confirmed'].toString();
    document.getElementById('california_cases').innerHTML = californiaConfirmed;

    //Get and covert total deaths to string
    let californiaDeaths = californiaData['deaths'].toString();
    document.getElementById('california_deaths').innerHTML = californiaDeaths;
});

//New York
const newyorkRequest = fetch('https://covid-api.mmediagroup.fr/v1/cases?country=US').then(response => 
    response.json()).then(data => {
    let newyorkData = data['New York'];

    let newyorkConfirmed = newyorkData['confirmed'].toString();
    document.getElementById('newyork_cases').innerHTML = newyorkConfirmed;

    //Get and covert total deaths to string
    let newyorkDeaths = newyorkData['deaths'].toString();
    document.getElementById('newyork_deaths').innerHTML = newyorkDeaths;
});

//Washington D.C.
const washdcRequest = fetch('https://covid-api.mmediagroup.fr/v1/cases?country=US').then(response => 
    response.json()).then(data => {
    let washdcData = data['District of Columbia'];

    let washdcConfirmed = washdcData['confirmed'].toString();
    document.getElementById('washdc_cases').innerHTML = washdcConfirmed;

    //Get and covert total deaths to string
    let washdcDeaths = washdcData['deaths'].toString();
    document.getElementById('washdc_deaths').innerHTML = washdcDeaths;
});

//Oregon
const oregonRequest = fetch('https://covid-api.mmediagroup.fr/v1/cases?country=US').then(response => 
    response.json()).then(data => {
    let oregonData = data['Oregon'];

    let oregonConfirmed = oregonData['confirmed'].toString();
    document.getElementById('oregon_cases').innerHTML = oregonConfirmed;

    //Get and covert total deaths to string
    let oregonDeaths = oregonData['deaths'].toString();
    document.getElementById('oregon_deaths').innerHTML = oregonDeaths;
});

//Texas
const texasRequest = fetch('https://covid-api.mmediagroup.fr/v1/cases?country=US').then(response => 
    response.json()).then(data => {
    let texasData = data['Texas'];

    let texasConfirmed = texasData['confirmed'].toString();
    document.getElementById('texas_cases').innerHTML = texasConfirmed;

    //Get and covert total deaths to string
    let texasDeaths = texasData['deaths'].toString();
    document.getElementById('texas_deaths').innerHTML = texasDeaths;
});

//Colorado
const coloradoRequest = fetch('https://covid-api.mmediagroup.fr/v1/cases?country=US').then(response => 
    response.json()).then(data => {
    let coloradoData = data['Colorado'];

    let coloradoConfirmed = coloradoData['confirmed'].toString();
    document.getElementById('colorado_cases').innerHTML = coloradoConfirmed;

    //Get and covert total deaths to string
    let coloradoDeaths = coloradoData['deaths'].toString();
    document.getElementById('colorado_deaths').innerHTML = coloradoDeaths;
});


//Pennsylvania API
const pennRequest = fetch('https://covid-api.mmediagroup.fr/v1/cases?country=US').then(response => 
    response.json()).then(data => {
    let pennData = data['Pennsylvania'];

    //Get and covert total cases
    let pennConfirmed = pennData['confirmed'].toString();
    document.getElementById('penn_cases').innerHTML = pennConfirmed;

    //Get and covert total recovered to string
    let pennDeaths = pennData['deaths'].toString();
    document.getElementById('penn_deaths').innerHTML = pennDeaths;

    //Get and covert total deaths to string
    let pennUpdated = pennData['updated'].toString();
    document.getElementById('penn_updated').innerHTML = pennUpdated;
});

//Get Last Updated
const getUpdate = () =>{
    const today = new Date();
    document.getElementById('updated').innerHTML = today;
}

getUpdate();



 
 
 
 
 
 
 