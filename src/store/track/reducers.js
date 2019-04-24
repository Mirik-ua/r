import { ADD_TRACK } from './actions'

const initialState = [
]

export const playList = (state = initialState, action) =>  {
  switch (action.type) {
    case ADD_TRACK:
      return [
        ...state,
        action.payload
      ]
   }
  return state
}
