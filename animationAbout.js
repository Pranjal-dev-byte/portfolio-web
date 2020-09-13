// About scroll animation
gsap.fromTo(
	'#aboutHeading',
	{ y: 180, opacity: 0 },
	{
		duration: 1,
		opacity: 1,
		y: 0,
		ease: 'ease',
		scrollTrigger: '#aboutHeading'
	}
);
gsap.fromTo(
	'#blockOne',
	{ x: 180, opacity: 0 },
	{
		duration: 2.5,
		opacity: 1,
		x: 0,
		ease: 'bounce',
		scrollTrigger: '#blockOne'
	}
);
gsap.fromTo(
	'#blockTwo',
	{ x: -180, opacity: 0 },
	{
		duration: 3,
		opacity: 1,
		x: 0,
		ease: 'bounce',
		scrollTrigger: '#blockTwo'
	}
);
gsap.fromTo(
	'#blockThree',
	{ x: 180, opacity: 0 },
	{
		duration: 4,
		opacity: 1,
		x: 0,
		ease: 'bounce',
		scrollTrigger: '#blockThree'
	}
);
