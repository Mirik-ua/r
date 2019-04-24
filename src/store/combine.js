import { combineReducers } from 'redux'
import { playList } from './track/reducers'
import { findTrack } from './find/reducers'

export default combineReducers({
  tracks: playList,
  findTrack
})
