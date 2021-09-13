import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators'
import {
  equipment,
  state,
  equipmentModel,
  equipmentPositionHistory,
} from '~/models'
import { $axios } from '~/utils/nuxt-instance'

@Module({
  name: 'data',
  namespaced: true,
  stateFactory: true,
})
export default class generalData extends VuexModule {
  public equipment: equipment[] = []
  public equipmentModel: equipmentModel[] = []
  public equipmentPositionHistory: equipmentPositionHistory[] = []
  public equipmentState: state[] = []
  public equipmentStateHistory: any[] = []

  public get $equipment() {
    return this.equipment
  }

  public get $equipmentModel() {
    return this.equipmentModel
  }

  public get $equipmentPositionHistory() {
    return this.equipmentPositionHistory
  }

  public get $equipmentState() {
    return this.equipmentState
  }

  public get $equipmentStateHistory() {
    return this.equipmentStateHistory
  }

  //-------------------------------------------------------------------------------------

  @Mutation
  private SET_EQUIPMENT(payload: equipment[]) {
    this.equipment = payload
  }

  @Mutation
  private SET_EQUIPMENT_MODEL(payload: equipmentModel[]) {
    this.equipmentModel = payload
  }

  @Mutation
  private SET_EQUIPMENT_POSITION_HISTORY(payload: equipmentPositionHistory[]) {
    this.equipmentPositionHistory = payload
  }

  @Mutation
  private SET_EQUIPMENT_STATE(payload: state[]) {
    this.equipmentState = payload
  }

  @Mutation
  private SET_EQUIPMENT_STATE_HISTORY(payload: any) {
    this.equipmentStateHistory = payload
  }

  //--------------------------------------------------------------- ACTIONS

  @Action
  public async fetchEquipment() {
    const data = await $axios.$get('/equipment')
    this.context.commit('SET_EQUIPMENT', data)
  }

  @Action
  public async fetchEquipmentModel() {
    const data = await $axios.$get('/equipmentModel')
    this.context.commit('SET_EQUIPMENT_MODEL', data)
  }

  @Action
  public async fetchEquipmentPositionHistory() {
    const data = await $axios.$get('/equipmentPositionHistory')
    await data.forEach((item: equipmentPositionHistory) => {
      item.positions.forEach((item: any) => {
        item.date = new Date(item.date).toLocaleString('pt-BR')
      })
    })
    this.context.commit('SET_EQUIPMENT_POSITION_HISTORY', data)
  }

  @Action
  public async fetchEquipmentState() {
    const data = await $axios.$get('/equipmentState')
    this.context.commit('SET_EQUIPMENT_STATE', data)
  }

  @Action
  public async fetchEquipmentStateHistory() {
    const data = await $axios.$get('/equipmentStateHistory')
    this.context.commit('SET_EQUIPMENT_STATE_HISTORY', data)
  }

  @Action
  public async doTheFetch() {
    await this.context.dispatch('fetchEquipment')
    await this.context.dispatch('fetchEquipmentModel')
    await this.context.dispatch('fetchEquipmentPositionHistory')
    await this.context.dispatch('fetchEquipmentState')
    await this.context.dispatch('fetchEquipmentStateHistory')
  }
}
