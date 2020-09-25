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

// Typewriter Animation
const words = [ 'Web Developer', 'Full Stack Developer', 'Software Engineer' ];
let masterTL = gsap.timeline({ repeat: -1 });

words.forEach((word) => {
	let tl = gsap.timeline({ repeat: 1, yoyo: true, repeatDelay: 1.5 });
	tl.to('.heading__primary--sub', { duration: 1.5, text: word });
	masterTL.add(tl);
});

// Hiding bg-video for mobile resolution
const bgImg = document.querySelector('#bg-img');
const bgVid = document.querySelector('#bg-vid');
if (window.screen.width <= 767) {
	bgVid.classList.add('u-hidden');
	bgImg.classList.remove('u-hidden');
}
