const lg = function () {
	const hd = document.querySelector('header');
	const push = document.querySelector('.logo');
	hd.style.height = '10%';
	hd.style.transition = 'all 0.7s';
	push.style.transform = 'translateX(0px)';
	push.style.transition = 'all 1s';
}