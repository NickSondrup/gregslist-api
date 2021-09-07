import { ProxyState } from "../AppState.js"
import { House } from "../Models/House.js"

// @ts-ignore
const api = axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api/houses"
})
class HousesService{
  async deleteHouse(houseId) {
    await api.delete(houseId)
    ProxyState.houses = ProxyState.houses.filter(c => c.houseId !== houseId)
}
  async addNewHouse(houseData){
   let res = await api.post('', houseData)
   ProxyState.houses = [...ProxyState.houses, new House(res.data)]
   }
   async getHouses(){
    let response = await api.get()
    ProxyState.houses = response.data.map(h => new House(h))
   }


  }
  

export const housesService = new HousesService()