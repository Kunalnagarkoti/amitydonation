// document.querySelectorAll('.image-container img').forEach(image => {
//     image.onclick = () => {
//         document.querySelector('.pop-image').style.display = 'block';
//         document.querySelector('.pop-image img').src = image.getAttribute('src');
//     }
// });

// document.querySelector('.pop-image span').onclick = () => {
//     document.querySelector('.pop-image').style.display = 'none';
// }


// Handle the image click event using event delegation
document.querySelector('.image-container').addEventListener('click', (e) => {
    if (e.target.tagName === 'IMG') {
        const popImage = document.querySelector('.pop-image');
        popImage.style.display = 'block';
        popImage.querySelector('img').src = e.target.getAttribute('src');
        console.log("Pop-up opened for image:", e.target.src);  // Debugging line
    }
});

// Close the pop-up when the span (close button) is clicked
document.querySelector('.pop-image span').onclick = () => {
    document.querySelector('.pop-image').style.display = 'none';
    console.log("Pop-up closed.");  // Debugging line
};
