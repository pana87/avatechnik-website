import { GetyourModal } from "./getyour-modal.js"
import { GetyourPictureSlider } from "./getyour-picture-slider.js"

export const addProductGalleryToButton = () => {

  const images = []
  for (let i = 1; i <= 22; i++) {
    const img = document.createElement("img")
    img.src = `./img/picture-${i}-1600.jpg`
    img.alt = `Produktbild ${i}`
    images.push(img)
  }

  const pictureSlider = document.createElement("getyour-picture-slider")

  images.forEach(image => pictureSlider.append(image))

  const modal = document.createElement("getyour-modal")

  modal.append(pictureSlider)
  document.body.append(modal)

  const getyourModal = document.querySelector("getyour-modal")
  const closeButton = getyourModal.shadowRoot.querySelector(".close-button")
  closeButton.setAttribute("src", "./img/close.svg")

  const buttons = document.querySelectorAll("div[class*='produktgalerie']")
  buttons.forEach(button => button.addEventListener("click", () => getyourModal.open()))

}
