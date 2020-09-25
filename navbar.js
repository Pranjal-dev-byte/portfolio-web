// Stcky Navbar
const nav = document.querySelector('.nav__container');
const topToNav = nav.offsetTop;
const main = document.querySelector('body');

function stickyNav() {
	if (window.scrollY >= topToNav) {
		main.style.paddingTop = nav.offsetHeight + 'px';
		main.classList.add('fixed');
	} else {
		main.style.paddingTop = 0;
		main.classList.remove('fixed');
	}
}

// Navbar navigation
const projects = document.querySelector('#projHeading');
const home = document.querySelector('#home');
const about = document.querySelector('#aboutHeading');

const projectLink = document.querySelector('.nav__project');
const homeLink = document.querySelector('.nav__home');
const aboutLink = document.querySelector('.nav__about');

const topProject = projects.offsetTop;
const topAbout = about.offsetTop;
const topHome = home.offsetTop;

function animateNav() {
	if (window.scrollY >= 0 && window.scrollY <= topAbout - 100 && window.scrollY <= topProject - 100) {
		homeLink.classList.add('nav__color');
		aboutLink.classList.remove('nav__color');
	} else if (window.scrollY >= topAbout - 100 && window.scrollY <= topProject - 100) {
		homeLink.classList.remove('nav__color');
		projectLink.classList.remove('nav__color');
		aboutLink.classList.add('nav__color');
	} else if (window.scrollY >= topProject - 100) {
		aboutLink.classList.remove('nav__color');
		projectLink.classList.add('nav__color');
	}
}

window.addEventListener('scroll', animateNav);
