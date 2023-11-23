const preloader = document.querySelector(".preloader");

window.addEventListener('load', () => {
    preloader.remove();
})

function validateEmail(){
    let x = document.forms["form"]["email"].value
    if (String(x).toLowerCase().match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )){
        alert("accepted!")
    }
    else{
        alert("type a real email")
    }
}
