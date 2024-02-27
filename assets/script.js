const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

/* Variables */

const dots = document.querySelector(".dots");
const flecheDroite = document.querySelector(".arrow_right");
const flecheGauche = document.querySelector(".arrow_left");
let imgCarrousel = document.querySelector(".banner-img");
let textCarrousel = document.querySelector("#banner p");
let nbSlides = slides.length;
let index = 0;

/* création des points */

function createDots() {
	for (let i = 0; i < nbSlides; i++) {
		const dot = document.createElement("div");
		dot.classList.add("dot");
		dots.appendChild(dot);
	}
}
createDots();


/* creer evenement click fleche droite */

flecheDroite.addEventListener("click", () => {
	if ( index === nbSlides -1){
		index = 0;
	} else {
		index++;
	}
	dotUpdate()
	slide()
})

/* creer evenement click fleche gauche */

flecheGauche.addEventListener("click", () => {
	if ( index === 0){
		index = nbSlides -1;
	} else {
		index--;
	}
	dotUpdate()
	slide()
})

/* gerer le point dot_selected */

function dotUpdate() {
	let dotList = document.querySelectorAll(".dot");

	for (let i = 0 ; i < dotList.length ; i++ ){
		let currentDot = dotList[i]
		if ( i === index){
			currentDot.classList.add("dot_selected")
		}else{
			currentDot.classList.remove("dot_selected")
		}
	}
}
dotUpdate()

/* changer image et texte du carrousel */

function slide () {
	imgCarrousel.src = `./assets/images/slideshow/${slides[index].image}` 
	textCarrousel.innerHTML = `${slides[index].tagLine}`
}
slide()