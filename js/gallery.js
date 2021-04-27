// Select both gallery elements
let imgGallery = document.querySelector(`#gallery`)
let imgControls = document.querySelector(`#controls`)

// Runs once for each galleryImage
let addImageToGallery = (image, i) => {
  // Create a new gallery image
  let galImg = document.createElement(`img`)
  galImg.setAttribute(`src`, image.filename)
  galImg.setAttribute(`alt`, image.caption)
  galImg.setAttribute(`id`, `img${i+1}`)
  galImg.classList.add(`gallery-img`)

  // Append the new image to the existing gallery
  imgGallery.append(galImg)

  // Create a new button control for our image
  let galBtn = document.createElement(`button`)
  galBtn.classList.add(`gallery-btn`)
  galBtn.setAttribute(`aria-controls`, `img${i+1}`)
  galBtn.setAttribute(`aria-label`, `Image ${i+1}`)

  // Create a new list item to hold the button
  let galCtrl = document.createElement(`li`)

  // Append the btn to the li
  galCtrl.append(galBtn)

  // Append the li to the unorderedlist
  imgControls.append(galCtrl)

  // If this is the first image added, then ensure it's active
  if (i === 0) {
    galImg.classList.add(`active`)
    galBtn.classList.add(`active`)
  }
}

// Can fetch any file, returning JSON as a JS Object or Array
let getJsonData = async (url) => {
  // Find a file at the specified url
  let response = await fetch(url)

  // Process the content of the file, then return the result
  return await response.json()
}

// When the button controls list is clicked, determine the button and image and make them active
let handleCtrlsClicked = (event) => {
  // The element that was clicked
  let galBtn = event.target

  // Ensure the element was a .gallery-btn, if so...
  if (galBtn.matches(`.gallery-btn`)) {
    // Remove ".active" from the currn image and btn-control
    let prevActiveImg = document.querySelector('.gallery-img.active')
    let prevActiveBtn = document.querySelector('.gallery-btn.active')
    prevActiveImg.classList.remove('active')
    prevActiveBtn.classList.remove('active')

    // Add ".active" to the desired image and btn-control
    let imgId = galBtn.getAttribute(`aria-controls`)
    let galImg = document.querySelector(`#${imgId}`)
    galImg.classList.add(`active`)
    galBtn.classList.add(`active`)
  }
}

// Setup the request and build the application interface
let createGallery = async () => {
  // Request JSON data
  let galleryImages = await getJsonData(`data/images.json`)

  // Call addImageToGallery once for each galleryImages, passing the value and index as arguments
  galleryImages.forEach(addImageToGallery)

  // Wait for the controls to be clicked
  imgControls.addEventListener(`click`, handleCtrlsClicked)
}

export {createGallery}