function playerTimes(latitude, longitude){
    fetch('http://api.aladhan.com/v1/calendar?latitude='+latitude+'&longitude='+longitude+'&method=2')
    ////fungsi .then (mengembalikan Promise dan menggunakan dua argumen: fungsi callback untuk kasus sukses dan gagal pada Promise) response di jadikan data json
    .then(response => response.json())
    .then(function(response) {
        let data    = new Date();
        let today   = data.getDate() - 1;
    
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
    alert('posisi tidak dapat di akses');
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