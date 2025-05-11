import { galleryItems } from './app.js';

const galleryContainer = document.querySelector('.js-gallery');
const lightbox = document.querySelector('.js-lightbox');
const lightboxImage = document.querySelector('.lightbox__image');
const closeButton = document.querySelector('[data-action="close-lightbox"]');
const lightboxOverlay = document.querySelector('.lightbox__overlay');


const createGalleryItemMarkup = ({ preview, original, description }) => {
  return `
    <li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </li>
  `;
};

const renderGallery = items => {
  const markup = items.map(createGalleryItemMarkup).join('');
  galleryContainer.innerHTML = markup;
};

renderGallery(galleryItems);

// делегування і модальне вікно
galleryContainer.addEventListener('click', onGalleryClick);

function onGalleryClick(event) {
  event.preventDefault();

  const isImageEl = event.target.classList.contains('gallery__image');
  if (!isImageEl) return;

  const largeImageURL = event.target.dataset.source;
  openModal(largeImageURL, event.target.alt);
}

function openModal(src, alt) {
  lightbox.classList.add('is-open');
  lightboxImage.src = src;
  lightboxImage.alt = alt;
  window.addEventListener('keydown', onEscKeyPress);
}

closeButton.addEventListener('click', closeModal);
lightboxOverlay.addEventListener('click', closeModal);

function closeModal() {
  lightbox.classList.remove('is-open');
  lightboxImage.src = '';
  lightboxImage.alt = '';
  window.removeEventListener('keydown', onEscKeyPress);
}

function onEscKeyPress(event) {
  if (event.code === 'Escape') {
    closeModal();
  }
}
