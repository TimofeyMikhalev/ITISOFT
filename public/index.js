//Слайдер
const slider = document.querySelector(".items");
const slides = document.querySelectorAll(".item");
const button = document.querySelectorAll(".button");

let current = 0,
	prev = 4,
	next = 1;

for (let i = 0; i < button.length; i++) {
	button[i].addEventListener("click", () => i == 0 ? gotoPrev() : gotoNext());
}

const gotoPrev = () => current > 0 ? gotoNum(current - 1) : gotoNum(slides.length - 1);

const gotoNext = () => current < 4 ? gotoNum(current + 1) : gotoNum(0);

const gotoNum = number => {
	current = number;
	prev = current - 1;
	next = current + 1;

	for (let i = 0; i < slides.length; i++) {
		slides[i].classList.remove("active");
		slides[i].classList.remove("prev");
		slides[i].classList.remove("next");
	}

	if (next == 5) {
		next = 0;
	}

	if (prev == -1) {
		prev = 4;
	}

	slides[current].classList.add("active");
	slides[prev].classList.add("prev");
	slides[next].classList.add("next");
}




//Закрытие блока
let t = document.querySelector('.disclamer'),
	n = document.querySelector('.close');

n.addEventListener('click', () => {
	t.classList.add("active");
});


let header = document.querySelector('.header');


//Box-shadow hedear при скролле
window.addEventListener('scroll', function() {
	var scrolled = window.pageYOffset;
    
	if (scrolled > 1){
		header.classList.add('scroll');
	} else {
		header.classList.remove('scroll');
	}
});


//меню открыть/закрыть
let open = document.querySelector('.menu'),
	close = document.querySelector('.menu_close'),
	closeTwo = document.querySelector('.menu_close2'),
	burger = document.querySelector('.menu__full'),
	wrapper = document.querySelector('.wrapper');

open.addEventListener('click', () => {
	burger.classList.remove('an_fade');
	burger.classList.add('fade');
	wrapper.classList.add('close_wrapper');
});

close.addEventListener('click', () => {
	burger.classList.remove('fade');
	burger.classList.add('an_fade');
	wrapper.classList.remove('close_wrapper');
});

closeTwo.addEventListener('click', () => {
	burger.classList.remove('fade');
	burger.classList.add('an_fade');
	wrapper.classList.remove('close_wrapper');
});



AOS.init();