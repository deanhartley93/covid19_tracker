/* 

Author: Dean Hartley
Date: August 2021
This script returns JSON covid data and updates the DOM accordingly.

*/

//Get Last Updated Date
const getUpdate = () =>{
    const today = new Date();
    document.getElementById('updated').innerHTML = today.toLocaleString();
}
getUpdate();
 
 //Get World Data and update DOM
 fetch('https://covid-api.mmediagroup.fr/v1/cases').then(response => response.json())
    .then(data => {
        data = Object.entries(data);
        let index = data.indexOf(data.find(name => name[0] === 'Global'));

        const worldConfirmed = data[index][1]['All']['confirmed'];
        const worldDeaths = data[index][1]['All']['deaths'];
        const worldPopulation = data[index][1]['All']['population'];
        document.getElementById('world-total').innerHTML = worldConfirmed.toLocaleString();
        document.getElementById('world-deaths').innerHTML = worldDeaths.toLocaleString();
        document.getElementById('world-pop').innerHTML = worldPopulation.toLocaleString();
    });

//Get All 50 States COVID Data and return as json
fetch('https://covid-api.mmediagroup.fr/v1/cases?country=US').then(response => response.json())
    .then(data => {
        filterStateNames(data);  
    });


//Filters out all non-states from the US API response and updates DOM
function filterStateNames(list){

    //Removes specific states not needed, and renames Washington DC.
    list = Object.entries(list);
    let index = list.indexOf(list.find(name => name[0]==='District of Columbia'));
    list[index][0] = 'D.C.';
    index = list.indexOf(list.find(name => name[0]==='All'));
    list.splice(index,1);
    index = list.indexOf(list.find(name => name[0]==='Diamond Princess'));
    list.splice(index,1);
    index = list.indexOf(list.find(name => name[0]==='Grand Princess'));
    list.splice(index,1);
    index = list.indexOf(list.find(name => name[0]==='Recovered'));
    list.splice(index,1);
    index = list.indexOf(list.find(name => name[0]==='Northern Mariana Islands'));
    list.splice(index,1);
    index = list.indexOf(list.find(name => name[0]==='Virgin Islands'));
    list.splice(index,1);
    index = list.indexOf(list.find(name => name[0]==='Guam'));
    list.splice(index,1);
    index = list.indexOf(list.find(name => name[0]==='Puerto Rico'));
    list.splice(index,1);
    list.sort();

    //New sorted list of states passed to DOM update function.
    updateDOM(list);
}

function updateDOM(list){
    //Update filtered state names and covid numbers to DOM
    let x = 1;
    try {
        for(let i=0; i<list.length; i++){
            document.getElementById(`A${x}`).innerHTML = `${x}. ${list[i][0]}`;
            document.getElementById(`B${x}`).innerHTML = list[i][1]['confirmed'].toLocaleString();
            document.getElementById(`C${x}`).innerHTML = list[i][1]['deaths'].toLocaleString();
            x++;
        }
    } catch (error) {
       // console.log('');
    } 
}


//If on mobile, state data will be removed.
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    const getUpdate = () =>{
        const today = new Date();
        document.getElementById('updated').innerHTML = today.toLocaleString();
    }
    getUpdate();
     
     //Get World Data and update DOM
     fetch('https://covid-api.mmediagroup.fr/v1/cases').then(response => response.json())
        .then(data => {
            data = Object.entries(data);
            let index = data.indexOf(data.find(name => name[0] === 'Global'));
    
            const worldConfirmed = data[index][1]['All']['confirmed'];
            const worldDeaths = data[index][1]['All']['deaths'];
            const worldPopulation = data[index][1]['All']['population'];
            document.getElementById('world-total').innerHTML = worldConfirmed.toLocaleString();
            document.getElementById('world-deaths').innerHTML = worldDeaths.toLocaleString();
            document.getElementById('world-pop').innerHTML = worldPopulation.toLocaleString();
        });

        document.getElementById('US-data').innerHTML = "Looks like you're on mobile! To view more COVID-19 data, and to have the best user experience, please visit deanh.io/covid on a desktop!";
   }
