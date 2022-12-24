let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let navlinks = document.querySelector('.navlinks');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navbar.classList.toggle('open');
}