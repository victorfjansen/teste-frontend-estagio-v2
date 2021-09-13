export interface equipment {
  id: string
  equipmentModelId: string
  name: string
}

export interface stateHistoryItem {
  equipmentId: string
  states: [
    {
      date: string
      equipmentStateId: string
    }
  ]
}

export interface state {
  id: string
  name: string
  color: string
}

export interface query {
  q: string
}

export interface equipmentModel {
  id: string
  name: string
  hourlyEarnings: [
    {
      equipmentStateId: string
      value: number
    }
  ]
}

export interface equipmentPositionHistory {
  equipmentId: string
  positions: [
    {
      date: string
      lat: number
      lon: number
    }
  ]
}

export type statusColor = string | undefined
export type statusName = string | undefined
