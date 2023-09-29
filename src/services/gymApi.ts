import axios from 'axios'

import { GymType } from '@/types/gymType'

export const selectGym = async (selectTurn: string, showClose: boolean) => {
  try {
    const response = await axios.get(
      'https://test-frontend-developer.s3.amazonaws.com/data/locations.json',
    )

    const gyms: GymType[] = response.data.locations

    let confirmHour: string[] = []

    switch (selectTurn) {
      case 'manha':
        confirmHour = ['06', '08', '09', '10', '11']
        break
      case 'tarde':
        confirmHour = ['12', '13', '14', '15', '16', '18']
        break
      case 'noite':
        confirmHour = ['19', '20', '21', '22', '23', '00']
        break
    }

    const filteredGyms = gyms.filter(
      (gym) =>
        gym.schedules?.some((schedule) =>
          confirmHour.some((hour) => schedule.hour.includes(hour)),
        ),
    )

    if (showClose) {
      return filteredGyms
    } else {
      return filteredGyms.filter((gym) => gym.opened === true)
    }
    return []
  } catch (err) {
    console.error('ERRO!', err)
  }
}
