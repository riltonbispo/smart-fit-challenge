export type GymType = {
  id: number
  title: string
  content: string
  opened: boolean
  mask: 'required' | 'recommended' | 'not_required'
  towel: 'required' | 'recommended' | 'not_required'
  fountain: 'full' | 'partial' | 'not_allowed'
  locker_room: 'allowed' | 'not_allowed' | 'closed'
  schedules: {
    weekdays: string
    hour: string
  }[]
}
