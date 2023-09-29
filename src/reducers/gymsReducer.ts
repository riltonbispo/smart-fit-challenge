import { GymType } from '@/types/gymType'

type SetAction = {
  type: 'set'
  payload: GymType[]
}

export type GymActions = SetAction

export const gymReducer = (gyms: GymType[], action: GymActions) => {
  switch (action.type) {
    case 'set':
      return action.payload
    default:
      return gyms
  }
}
