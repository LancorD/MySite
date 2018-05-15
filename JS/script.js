

const lg = function () {
	const hd = document.getElementById('cla');
	hd.style.height = '10%';
	hd.style.transition = 'all 0.75s';
	const push = document.getElementsByClassName('logo');
	for (let i = 0; i < push.length; i++) {
		push[i].style.top = '0%';
		push[i].style.fontSize = '4em';
		push[i].style.transition = 'all 1s';
	}
	
}