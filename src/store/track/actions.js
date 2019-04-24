export const ADD_TRACK = 'ADD_TRACK'

export const setTrack = name => ({
  type: ADD_TRACK,
  payload : {
    id: Date.now().toString(),
    name
  }
})
