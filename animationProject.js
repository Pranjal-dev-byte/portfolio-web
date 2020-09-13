// Projects scroll animation
gsap.registerPlugin(ScrollTrigger);
gsap.fromTo(
	'#projHeading',
	{ y: 180, opacity: 0 },
	{
		duration: 1,
		opacity: 1,
		y: 0,
		ease: 'ease',
		scrollTrigger: '#projHeading'
	}
);
gsap.fromTo(
	'#imgOne',
	{ x: -80, opacity: 0 },
	{
		duration: 2,
		opacity: 1,
		x: 0,
		ease: 'ease',
		scrollTrigger: '#one'
	}
);
gsap.fromTo(
	'#textOne',
	{ x: 80, opacity: 0 },
	{
		duration: 2,
		opacity: 1,
		x: 0,
		ease: 'ease',
		scrollTrigger: '#one'
	}
);
gsap.fromTo(
	'#imgTwo',
	{ x: -80, opacity: 0 },
	{
		duration: 3,
		opacity: 1,
		x: 0,
		ease: 'ease',
		scrollTrigger: '#two'
	}
);
gsap.fromTo(
	'#textTwo',
	{ x: 80, opacity: 0 },
	{
		duration: 3,
		opacity: 1,
		x: 0,
		ease: 'ease',
		scrollTrigger: '#two'
	}
);
gsap.fromTo(
	'#imgThree',
	{ x: -80, opacity: 0 },
	{
		duration: 3.5,
		opacity: 1,
		x: 0,
		ease: 'ease',
		scrollTrigger: '#three'
	}
);
gsap.fromTo(
	'#textThree',
	{ x: 80, opacity: 0 },
	{
		duration: 3.5,
		opacity: 1,
		x: 0,
		ease: 'ease',
		scrollTrigger: '#three'
	}
);
gsap.fromTo(
	'#imgFour',
	{ x: -80, opacity: 0 },
	{
		duration: 4,
		opacity: 1,
		x: 0,
		ease: 'ease',
		scrollTrigger: '#four'
	}
);
gsap.fromTo(
	'#textFour',
	{ x: 80, opacity: 0 },
	{
		duration: 4,
		opacity: 1,
		x: 0,
		ease: 'ease',
		scrollTrigger: '#four'
	}
);
gsap.fromTo(
	'#imgFive',
	{ x: -80, opacity: 0 },
	{
		duration: 4,
		opacity: 1,
		x: 0,
		ease: 'ease',
		scrollTrigger: '#five'
	}
);
gsap.fromTo(
	'#textFive',
	{ x: 80, opacity: 0 },
	{
		duration: 4,
		opacity: 1,
		x: 0,
		ease: 'ease',
		scrollTrigger: '#five'
	}
);
