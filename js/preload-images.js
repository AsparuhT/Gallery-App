// Loop through each key in the images object and preload the images there by settings their src
window.onload = function () {
    for (let category in images) {
        // Loop through each image object in the current category's array
        images[category].forEach(image => {
            // Create a new image element for preloading
            let img = new Image();
            // Set the src of the image element to the src of the current image object
            img.src = `../images/${image.src}`;
        });
    }
};
