import { ProxyState } from "../AppState.js"
import { housesService} from "../Services/HousesService.js"
import { House } from '../Models/House.js'
import { getHouseFormTemplate } from "../forms/houseform.js"
function _drawHouses() {
  let template = ''
  ProxyState.houses.forEach(house => template += house.CardTemplate )
  document.getElementById('listings').innerHTML = template
}

export class HousesController {
  constructor() {
    // TODO register the listener for houses
    ProxyState.on('houses', _drawHouses)
    housesService.getHouses()
  }

  async addNewHouse(){
    event.preventDefault()

    /**
     * @type {HTMLFormElement}
     */
    // @ts-ignore
    const form = event.target

    const houseData = {
    bedrooms: form.bedrooms.value,
    bathrooms: form.bathrooms.value,
    levels: form.levels.value,
    year: form.year.value,
    price: form.price.value,
    imgUrl: form.imgUrl.value,
    description: form.description.value,
    }
    try{
      await housesService.addNewHouse(houseData)
    } catch (e){
      console.error('this is like an error man.', e)
      return
    }

    form.reset()
  }

  showHouses() {
    _drawHouses()
    document.getElementById('controls').innerHTML = `
      <button class="btn btn-success" onclick="app.housesController.toggleHouseForm()">Add House</button>
    `
    // TODO build the house form
    // abstract it if you want
    document.getElementById('forms').innerHTML = getHouseFormTemplate()
    
  }

  toggleHouseForm() {
    document.getElementById('house-form').classList.toggle('visually-hidden')
  }
  async deleteHouse(houseId){
    try{
      await housesService.deleteHouse(houseId)
    }catch (error){
      alert(error.message)
    }
  }
}