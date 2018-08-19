const menuItens = document.querySelectorAll('.menu a');

menuItens.forEach(item => {
	item.addEventListener('click', scrollToId);
});

function scrollToId(event) {
	event.preventDefault();
	const element = event.target;
	const id = element.getAttribute('href');
	const section = document.querySelector(id).offsetTop;
	window.scroll({
		top: section - 50,
		behavior: "smooth"
	});
}