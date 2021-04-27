// Object holding our ingredient quantities 
let ingredients = {
  flour: 500,
  water: 400,
  salt: 10,
  yeast: 7.5
}

// Select all document elements
let ingFlour = document.querySelector(`#flour`)
let ingWater = document.querySelector(`#water`)
let ingSalt = document.querySelector(`#salt`)
let ingYeast = document.querySelector(`#yeast`)
let btnMetric = document.querySelector('#toMetric')
let btnImperial = document.querySelector('#toImperial')

// Gets a value in grams, returns the equivalent ounces
let toOunces = (grams) => {
  return grams / 28.34952
}

// Gets a qty in g, returns a formatted string in lbs,oz
let getImperialStr = (qty) => {
  let qtyInOz = toOunces(qty)  // Convert g to oz
  let qtyInLbs = qtyInOz / 16  // Store the number of lbs
  let remainingOz = qtyInOz % 16  // Store the left over oz 
  return `${Math.floor(qtyInLbs)} lb, ${remainingOz.toFixed(2)} oz`
}

// Returns a formatted string of the quantity in grams
let getMetricStr = (qty) => {
  return `${qty} g`
}

// Update the ingredients list to display imperial units
let displayImperialUnits = () => {
  // Update the .switch button UI
  btnMetric.classList.remove(`active`)
  btnImperial.classList.add(`active`)

  // Update the quantities in lbs,oz
  ingFlour.textContent = getImperialStr(ingredients.flour)
  ingWater.textContent = getImperialStr(ingredients.water)
  ingSalt.textContent = getImperialStr(ingredients.salt)
  ingYeast.textContent = getImperialStr(ingredients.yeast)
}

// Update the ingredients list to display metric units
let displayMetricUnits = () => {
  // Update the .switch button UI
  btnImperial.classList.remove(`active`)
  btnMetric.classList.add(`active`)

  // Update the quantities in grams
  ingFlour.textContent = getMetricStr(ingredients.flour)
  ingWater.textContent = getMetricStr(ingredients.water)
  ingSalt.textContent = getMetricStr(ingredients.salt)
  ingYeast.textContent = getMetricStr(ingredients.yeast)
}

let createUnitToggle = () => {
  // Where will this event occur?           btnImperial
  // What type of event will it be?         `click`
  // How do we handle it, when it occurs?   displayImperialUnits
  btnImperial.addEventListener(`click`, displayImperialUnits)
  btnMetric.addEventListener(`click`, displayMetricUnits)
}

export {createUnitToggle}