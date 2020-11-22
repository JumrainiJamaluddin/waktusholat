 //nama function callback
 //success
 function success(position){
     console.log(position);
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