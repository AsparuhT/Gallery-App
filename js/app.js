

// Initialize initial values, so they can be used for the first load
let category = 'Ocean';
let view = 'portrait';






// Get reference to the elements we will need
const gallery = document.querySelector('.gallery');

const portraitImages = document.querySelectorAll('.grid-images-portrait');
const portraitBtn = document.querySelector('.portrait-btn');

const landscapeImages = document.querySelectorAll('.grid-images-landscape');
const landscapeBtn = document.querySelector('.landscape-btn');

const navMenu = document.querySelector('.nav-menu');
const navItems = document.querySelectorAll('li');





// Function that load the images and create the elements for them
function loadImages(category, view) {
    // Make sure the gallery is clean first
    gallery.innerHTML = '';

    // Filter the images based on the category and view
    // We start with the Ocean category and portrait vew
    let imagesToLoad = images[category].filter(image => image.view == view);

    // We check the view and apply differet CSS-grid style for the gallery
    if (view === 'portrait') {
        gallery.classList.remove('landscape');
        gallery.classList.add('portrait');
    } else if (view === 'landscape') {
        gallery.classList.remove('portret');
        gallery.classList.add('landscape');
    }

    // We have filtered the desired images and prepared the layout.
    // Now we can create the a and img elements with the respective classes and attributes
    imagesToLoad.forEach((image) => {
        // Lightbox <a>
        const lightboxA = document.createElement('a'); // create <a> element
        lightboxA.setAttribute('data-lightbox', 'images'); // Set its lighbox group. 'images'
        lightboxA.setAttribute('data-title', `${category} view`); // The tile for the image when zoomed

        // <img>
        const imageEl = document.createElement('img'); // create the image el
        imageEl.classList.add(`grid-images-${view}`); // add its view class
        imageEl.setAttribute('src', `../images/${image.src}`); // add its src attribute

        lightboxA.appendChild(imageEl); // append the image to the <a> element
        gallery.appendChild(lightboxA); // append the <a> element to the gallery

        lightboxA.href = `${imageEl.src}`; // href with the image path, so the lightbox can load it

        // Add animation for the image to appear smoothly
        imageEl.style.opacity = '0';
        setTimeout(() => {
            imageEl.style.opacity = '1';
        }, 10);
    });

}
// Initialize the initial load of images
loadImages(category, view);






// Event listener for the menu categories
navMenu.addEventListener('click', (e) => {
    if (e.target.tagName == 'LI') {

        category = e.target.textContent; // Get the category name from the menu 
        loadImages(category, view);

        // Show which category is selected by keepingn its button colored
        navItems.forEach(li => li.classList.remove('active'));
        e.target.classList.add('active'); // The <li> el with calls active is colored
    }
});






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


