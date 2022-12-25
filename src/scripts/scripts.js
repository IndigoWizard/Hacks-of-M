let menu = document.querySelector('#menu-icon');
let navlinks = document.querySelector('.navlinks');
let icon = document.querySelector('.fa-solid');

// change navbar menu styling to open on the side
menu.onclick = () => {
	navlinks.classList.toggle('open');
  icon.classList.toggle('fa-xmark');  
}
