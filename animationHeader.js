// Header scroll animation
gsap.fromTo(
	'#animateName',
	{ y: -100, opacity: 0 },
	{
		duration: 4,
		opacity: 1,
		y: 0,

		ease: 'bounce'
	}
);
gsap.fromTo(
	'#animateSocial',
	{ y: 100, opacity: 0 },
	{
		duration: 4.5,
		opacity: 1,
		y: 0,
		ease: 'bounce'
	}
);
