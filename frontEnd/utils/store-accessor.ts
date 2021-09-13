import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import truck from '~/store/truck'
import generalData from '~/store/data'

let data: generalData
let truckStore: truck

function initialiseStores(store: Store<any>): void {
  truckStore = getModule(truck, store)
  data = getModule(generalData, store)
}

export { initialiseStores, truckStore, data }
