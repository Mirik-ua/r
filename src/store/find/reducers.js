import { FIND_TRACK } from './actions'

const initialState = ''

export const findTrack = (state = initialState, action) =>  {
  console.log(action)
  switch (action.type) {
    case FIND_TRACK :
      return action.payload
    }
  return state
}
