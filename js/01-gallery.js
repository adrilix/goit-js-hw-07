
// Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.

// Реалізація делегування на div.gallery і отримання url великого зображення.

// Підключення скрипту і стилів бібліотеки модального вікна basicLightbox. Використовуй CDN сервіс jsdelivr і додай у проект посилання на мініфіковані (.min) файли бібліотеки.

// Відкриття модального вікна по кліку на елементі галереї. Для цього ознайомся з документацією і прикладами.

// Заміна значення атрибута src елемента <img> в модальному вікні перед відкриттям. Використовуй готову розмітку модального вікна із зображенням з прикладів бібліотеки basicLightbox.
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

console.log(galleryItems);
console.log(galleryImage);
console.log(stringGallery);

divGallery.addEventListener('click', onDivGalleryClick);

function onDivGalleryClick(event) {
    event.preventDefolt();
    if (!event.target.classList.contains('gallery__image')) {
        return;
    };

    // const instance = basicLightbox.create(
    //     <img src="${event.target.dataset.source}" width="800" height="600"/>
    // );
}


