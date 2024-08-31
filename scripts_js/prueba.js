
let slides = [
    {
        "url": "../Imagenes/Caminar.gif",
        "nombre": "Diseño de personaje",
        "descripcion": "Trabajo en el que se pedía crear un personaje desde cero, con un arquetipo muy definido. En el proceso hice pruebas de vestuario, de silueta y de color. La estética de la maleta intenta reafirmar este arquetipo y a continuación se adjunta el blueprint de la misma. También hice algunas expresiones del personaje.",
    },
    {
        "url": "../Imagenes/blueprint.png",
        "nombre": "",
        "descripcion": "",
    },
];

let previousButton = document.getElementById('anterior');
let nextButton = document.getElementById('siguiente');
let currentImageContainer = document.getElementById('imagenActual');
let indicators = document.getElementById('indicadores');
let descriptionContainer = document.getElementById('descripcion');
let currentIndex = 0;

function updateSlider() {
    // Update the image
    currentImageContainer.innerHTML = `<img class="imagenActual" src="${slides[currentIndex].url}" alt="Imagen del slider" loading="lazy"></img>`;
    
    // Update the text
    let title = slides[currentIndex].nombre ? `<h3>${slides[currentIndex].nombre}</h3>` : "";
    let description = slides[currentIndex].descripcion ? `<p>${slides[currentIndex].descripcion}</p>` : "";
    descriptionContainer.innerHTML = `${title}${description}`;
    
    // Update the navigation indicators
    updateIndicators();
}

function updateIndicators() {
    indicators.innerHTML = "";
    for (let i = 0; i < slides.length; i++) {
        if (i === currentIndex) {
            indicators.innerHTML += '<p class="bold">.</p>';
        } else {
            indicators.innerHTML += '<p>.</p>';
        }
    }
}

// Event listeners for the buttons
previousButton.addEventListener('click', function() {
    currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
    updateSlider();
});

nextButton.addEventListener('click', function() {
    currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
    updateSlider();
});

// Initialize the slider
updateSlider();
