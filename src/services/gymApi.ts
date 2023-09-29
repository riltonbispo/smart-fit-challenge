import axios from 'axios'

import { GymType } from '@/types/gymType'

export const getGym = async () => {
  try {
    const response = await axios.get(
      'https://test-frontend-developer.s3.amazonaws.com/data/locations.json',
    )
    return response.data.locations
  } catch (err) {
    console.error('ERRO!', err)
    throw err
  }
}

export const selectGym = async (selectTurn: string) => {
  try {
    const response = await axios.get(
      'https://test-frontend-developer.s3.amazonaws.com/data/locations.json',
    )

    const gyms: GymType[] = response.data.locations

    const filteredGyms = gyms.filter((gym) => gym.schedules)

    const selectedGyms = filteredGyms.filter((gym) =>
      gym.schedules.some((schedule) => schedule.hour === selectTurn),
    )

    return selectedGyms
  } catch (err) {
    console.error('ERRO!', err)
    throw err
  }
}
