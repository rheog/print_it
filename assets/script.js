const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
];

// Index de la diapositive actuelle
let currentSlide = 0;

// Sélection des éléments HTML
const bannerImage = document.querySelector('.banner-img');
const tagLine = document.getElementById('tagLine');
const dots = document.querySelectorAll('.dot'); // Points indicateurs
const leftArrow = document.querySelector('.arrow_left');
const rightArrow = document.querySelector('.arrow_right');

// Fonction pour afficher une image en fonction de son index
function showSlide(index) {

	currentSlide = (index + slides.length) % slides.length;

	// Mettez à jour l'image de la bannière et le texte
	bannerImage.src = `./assets/images/slideshow/${slides[currentSlide].image}`;
	tagLine.innerHTML = slides[currentSlide].tagLine;

	// Mis à jour les points indicateurs
	updateDots();
}

// Fonction pour changer de l'image avec un décalage vers la gauche ou la droite
function changeSlide(offset) {
	showSlide(currentSlide + offset);
}

// Fonction pour mettre à jour les points en fonction de la diapositive actuelle
function updateDots() {
	// Supprimez d'abord la classe "dot_selected" de tous les points
	dots.forEach((dot) => {
		dot.classList.remove('dot_selected');
	});

	// Ajoutez la classe "dot_selected" au point correspondant à la diapositive actuelle
	dots[currentSlide].classList.add('dot_selected');
}

// Ajout d'écouteurs d'événements pour les flèches gauche et droite
leftArrow.addEventListener('click', () => changeSlide(-1));
rightArrow.addEventListener('click', () => changeSlide(1));

// Ajout d'écouteurs d'événements pour les points indicateurs
dots.forEach((dot, index) => {
	dot.addEventListener('click', () => showSlide(index));
});

// Affichage de la première diapositive au chargement de la page
showSlide(currentSlide);

// Définissez une variable pour stocker l'ID de l'intervalle du défilement automatique
let intervalId;

// Fonction pour démarrer le défilement automatique
function startAutoSlide() {
	intervalId = setInterval(() => {
		changeSlide(1); // Passe à la diapositive suivante
	}, 5000); // Défilement toutes les 5 secondes 
}

// Fonction pour arrêter le défilement automatique
function stopAutoSlide() {
	clearInterval(intervalId);
}

// Ajoutez des écouteurs d'événements pour le démarrage et l'arrêt du défilement automatique
document.addEventListener('DOMContentLoaded', startAutoSlide);
document.addEventListener('mouseleave', startAutoSlide); // Redémarrez lorsque la souris quitte le diaporama
/*document.addEventListener('mouseenter', stopAutoSlide); // Arrêtez lorsque la souris survole le diaporama*/

