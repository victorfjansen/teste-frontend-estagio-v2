import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { $axios } from '~/utils/nuxt-instance'

import { equipment, query } from '~/models'

@Module({
  name: 'truck',
  namespaced: true,
  stateFactory: true,
})
export default class truck extends VuexModule {
  public data: equipment[] = []
  public search: equipment[] = []

  public get $dados() {
    return this.data
  }

  @Mutation
  public SET_DATA(payload: equipment[]) {
    this.data = payload
  }

  @Mutation
  public SET_SEARCH(payload: equipment[]) {
    this.search = payload
  }

  @Action
  public async fecthData() {
    const data = await $axios.$get('/equipment')
    await this.context.commit('SET_DATA', data)
  }

  @Action
  public async querySearch(endpoint: query) {
    let queryString = `/equipment?q=${endpoint.q}`
    const data = await $axios.$get(queryString)

    this.context.commit('SET_DATA', data)
  }
}
