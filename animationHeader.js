// Header scroll animation
gsap.fromTo(
	'#animateName',
	{ y: -100, opacity: 0 },
	{
		duration: 3,
		opacity: 1,
		y: 0,

		ease: 'bounce',
		scrollTrigger: '#animateName'
	}
);
gsap.fromTo(
	'#animateSocial',
	{ y: 100, opacity: 0 },
	{
		duration: 3,
		opacity: 1,
		y: 0,

		ease: 'bounce',
		scrollTrigger: '#animateSocial'
	}
);
