

let category = 'Ocean';
let view = 'portrait';


/* ***********************
*
*   Switch between Portrait and Landscape view
*
*/
const gallery = document.querySelector('.gallery');

const portraitImages = document.querySelectorAll('.grid-images-portrait');
const portraitBtn = document.querySelector('.portrait-btn');

const landscapeImages = document.querySelectorAll('.grid-images-landscape');
const landscapeBtn = document.querySelector('.landscape-btn');

const navMenu = document.querySelector('.nav-menu');
const navItems = document.querySelectorAll('li');




// Event listener for the menu categories
navMenu.addEventListener('click', (e) => {
    if (e.target.tagName == 'LI') {

        category = e.target.textContent;
        loadImages(category, view);

        // Show which category is selected by keepingn its button colored
        navItems.forEach(li => li.classList.remove('active'));
        e.target.classList.add('active');
    }
});



// Function that load the images and create the elements for them
function loadImages(category, view) {
    // Make sure the gallery is clean first
    gallery.innerHTML = '';

    // Filter the images based on the category and view
    let imagesToLoad = images[category].filter(image => image.view == view);

    if (view === 'portrait') {
        gallery.classList.remove('landscape');
        gallery.classList.add('portrait');
    } else if (view === 'landscape') {
        gallery.classList.remove('portret');
        gallery.classList.add('landscape');
    }

    // Create the a and img elements with the respective classes and attributes
    imagesToLoad.forEach((image) => {
        // Lightbox <a>
        const lightboxA = document.createElement('a');
        lightboxA.setAttribute('data-lightbox', 'images');
        lightboxA.setAttribute('data-title', `${category} view`);

        // <img>
        const imageEl = document.createElement('img');
        imageEl.classList.add(`grid-images-${view}`);
        imageEl.setAttribute('src', `../images/${image.src}`);

        lightboxA.appendChild(imageEl);
        gallery.appendChild(lightboxA);

        lightboxA.href = `${imageEl.src}`;

        imageEl.style.opacity = '0';
        setTimeout(() => {
            imageEl.style.opacity = '1';
        }, 10);
    });

}
// Initialize the initial load of images
loadImages(category, view);



``
// Add the Portrait and Landscape buttons
portraitBtn.addEventListener('click', () => {
    view = 'portrait';
    loadImages(category, view);
});

landscapeBtn.addEventListener('click', () => {
    view = 'landscape';
    loadImages(category, view);
});


