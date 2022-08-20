
import { galleryItems } from './gallery-items.js';
// Change code below this line

const divGallery = document.querySelector('.gallery');

const galleryImage = galleryItems.map(({ preview, original, description })=>{
    const photoEl = `
    <div class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
        />
        </a>
    </div>
    `;
    return photoEl;
});

const stringGallery = galleryImage.join('');
divGallery.innerHTML = stringGallery;

divGallery.addEventListener('click', onDivGalleryClick);

function onDivGalleryClick(event) {
    event.preventDefault();
    if (!event.target.classList.contains('gallery__image')) {
        return;
    };

    const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600"/>
`);
instance.show();

divGallery.addEventListener('keydown', onEscPressModalClose);
    
    function onEscPressModalClose(event) {
        if (event.code === "Escape") {
        instance.close();
        divGallery.removeEventListener('keydown', onEscPressModalClose);
        }
    };
};
