function playerTimes(latitude, longitude){
    fetch('http://api.aladhan.com/v1/calendar?latitude='+latitude+'&longitude='+longitude+'&method=4')
    ////fungsi .then (mengembalikan Promise dan menggunakan dua argumen: fungsi callback untuk kasus sukses dan gagal pada Promise) response di jadikan data json
    .then(response => response.json())
    .then(function(response) {
        let date         = new Date();
        let today        = date.getDate();
        let data         = response.data[0].timings; 

        let app          = document.getElementById('app');
        let table        = document.createElement('table');
        let tableTbody   = document.createElement('tbody');
        
        for(i in data){
            let row          = tableTbody.insertRow();
            let name         = row.insertCell(0);
            let time         = row.insertCell(1);
            name.innerHTML   = i;
            time.innerHTML   = data[i];
            tableTbody.appendChild(row);
        }

        table.appendChild(tableTbody);
        app.appendChild(table);
    
      //  console.log(response.data);
    });
}
 //nama function callback
 //success
 function success(position){
     playerTimes(position.coords.latitude, position.coords.longitude);
 }

 //eror
function eror(position){
    //defaulut longtitude dan longtitude
    playerTimes('-6.200000', '106.816666');
}

 //akses geolocation di function
 function userLocation(){
    if(!navigator.geolocation){
        alert('geolocation tidak di dukung didalam browser anda, silahkan gunakan browser lain');
    }else{
        navigator.geolocation.getCurrentPosition(success, eror);
    }
}


function index (){
    let app         = document.getElementById('app');
    let h3          = document.createElement('h3');
    h3.innerHTML    = "player Time";

    app.appendChild(h3);

    userLocation();
}

index();