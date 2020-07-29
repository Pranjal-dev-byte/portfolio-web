const nav = document.querySelector('.nav__container');
const topToNav = nav.offsetTop;
const main = document.querySelector('body');

function stickyNav() {
	if (window.scrollY >= topToNav) {
		main.style.paddingTop = nav.offsetHeight + 'px';
		console.log(window.scrollY, topToNav, nav.offsetHeight);
		main.classList.add('fixed');
	} else {
		main.style.paddingTop = 0;
		main.classList.remove('fixed');
	}
}

window.addEventListener('scroll', stickyNav);
