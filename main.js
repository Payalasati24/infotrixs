let bars=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');
bars.onclick=()=>{
    bars.classList.toggle('fa-times');
    navbar.classList.toggle('active')
}
window.onscroll=()=>{
    bars.classList.remove('fa-times');
    navbar.classList.remove('active')
}
