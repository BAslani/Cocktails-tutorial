import {hideLoading} from './toggleLoading.js'
import get from './getElement.js';

const displayDrink = (data) => {
  hideLoading()
  const drink = data.drinks[0]
  const { strInstructions: instructions, strDrink: name, strDrinkThumb: img } = drink;
  const list = [
    drink.strIngredient1,
    drink.strIngredient2,
    drink.strIngredient3,
    drink.strIngredient4,
    drink.strIngredient5,
    drink.strIngredient6,
  ];
  const image = get('.drink-img')
  const drinkName = get('.drink-name')
  const drinkDesc = get('.drink-desc')
  const drinkIngredient = get('.drink-ingredients')

  image.src = img
  document.title =name
  drinkName.textContent = name
  drinkDesc.textContent = instructions
  drinkIngredient.innerHTML = list.map((item) => {
    if(!item) return;
    return `<li><i class="far fa-check-square"></i>${item}</li>` 
  }).join('')
}

export default displayDrink