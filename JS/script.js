const lg = function () {
	const hd = document.querySelector('header');
	const push = document.querySelector('.logo');
	hd.style.height = '10%';
	hd.style.transition = 'all 0.75s';
	push.style.top = '0%';
	push.style.fontSize = '4em';
	push.style.transition = 'all 1s';
}