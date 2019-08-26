
var mainNav = document.getElementById('js-menu');

var navBarOpen = document.getElementById('js-navbar-open');

var navBarClose = document.getElementById('js-navbar-close');

navBarOpen.addEventListener('click', function(){
	mainNav.classList.toggle('active');
	navBarOpen.classList.remove('active');//DEACTIVATE
	navBarClose.classList.toggle('active');//activate
});

navBarClose.addEventListener('click', function(){
	mainNav.classList.remove('active');//DECTIVATE
	navBarOpen.classList.toggle('active');//active
	navBarClose.classList.remove('active');//deactivate
});