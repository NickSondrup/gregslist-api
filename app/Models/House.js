import { generateId } from "../Utils/generateId.js";

export class House {
  constructor(houseData){
    this.houseId = houseData.houseId
    this.bedrooms = houseData.bedrooms
    this.bathrooms = houseData.bathrooms 
    this.levels = houseData.levels
    this.year = houseData.year 
    this.price = houseData.price 
    this.imgUrl = houseData.imgUrl 
    this.description = houseData.description
  }

get CardTemplate(){
  return /*html*/ `
  <div class="col-lg-3 mb-4 listing">
  <div class="card">
    <img src="${this.imgUrl}" alt="" class="rounded">
    <div class="card-body">
      <h5 class="d-flex justify-content-between">
        <span> rooms: ${this.bedrooms} - bath: ${this.bathrooms} - levels: ${this.levels}</span>
        <span>${this.year}--$${this.price} </span>
        <span>${this.description}</span>
      </h5>
      <p></p>
    </div>
  </div>
  <button onclick="app.housesController.deleteHouse('${this.houseId}')">Delete</button>
</div>
  `
}




}