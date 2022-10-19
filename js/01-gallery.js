import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallerySet = document.querySelector('.gallery');
const galleryMarkUp = createGalleryMarkUp(galleryItems);
gallerySet.insertAdjacentHTML('afterbegin', galleryMarkUp);
gallerySet.addEventListener('click', onImgClick);

function createGalleryMarkUp(galleryItems) {
    return galleryItems
        .map(
            ({ description, preview, original }) => `<div class="gallery__item">
    <a class="gallery__link" href=${preview}>
        <img
            class="gallery__image"
            src="${original}"
            data-source="${original}"
            alt="${description}"
        />
    </a>
</div>`
        )
        .join('');
}
function onImgClick(event) {
    event.preventDefault();
    if (event.target.tagName !== 'IMG') {
        return;
    }

    const instance = basicLightbox.create(`
        <img src="${event.target.dataset.source}">
    `);
    instance.show();

    document.addEventListener('keydown', event => {
        if (event.key === 'Escape') instance.close();
    });
}
