import {createGallery} from './gallery.js'
import {createUnitToggle} from './ingredients.js'

let handleWindowLoaded = () => {
  // Setup the gallery
  createGallery()
  // Setup the ingredient unit toggler
  createUnitToggle()
}

// When the entire browser is ready to go...
window.addEventListener(`load`, handleWindowLoaded)
