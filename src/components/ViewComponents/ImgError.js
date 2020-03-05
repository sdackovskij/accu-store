import imageNotAvailable from '../../../public/img/image_not_available.png';

export default function imgError(e) {
  e.target.onerror = null;
  e.target.src = imageNotAvailable;
}
