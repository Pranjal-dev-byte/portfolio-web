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

window.addEventListener('scroll', stickyNav);
const hamIcon = document.querySelector('#ham-icon');
let flag;
let list = document.querySelector('#list');
hamIcon.addEventListener('click', () => {
	if (flag) {
		flag = false;
		list.classList.add('u-hidden');
	} else {
		flag = true;
		list.classList.remove('u-hidden');
	}
});

const words = [ 'Web Developer', 'Full Stack Developer', 'Software Engineer' ];
let masterTL = gsap.timeline({ repeat: -1 });

words.forEach((word) => {
	let tl = gsap.timeline({ repeat: 1, yoyo: true, repeatDelay: 1.5 });
	tl.to('.heading__primary--sub', { duration: 1.5, text: word });
	masterTL.add(tl);
});
