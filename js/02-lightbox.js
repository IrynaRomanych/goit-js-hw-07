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
    <a class="gallery__item" href=${original}>
        <img
            class="gallery__image"
            data-source="${original}"
            src="${preview}"
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
    const lightbox = new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionDelay: 250,
    });

    document.addEventListener('keydown', event => {
        if (event.key === 'Escape') instance.close();
    });
}
