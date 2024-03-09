let menuIcon = document.querySelector('#menu');
let navbar = document.querySelector('.navbar');






menuIcon.onClick = () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}