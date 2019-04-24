import React, { Component } from 'react';
import { connect } from 'react-redux'
import { findTrack } from './store/find/actions'
import { setTrack } from './store/track/actions'
import './App.css'

class App extends Component {

  handleClick = () => {
    console.log("add track", this.trackInput.value)
    this.props.setTrack(this.trackInput.value)
    this.trackInput.value = ''
  }

  handleFind = () => {
    console.log('findTrack',this.searchInput.value)
    this.props.findTrack(this.searchInput.value)
  }

  render() {
    console.log(this.props)
    return (
      <div className="App">
        <div>
          <input
            placeholder='send'
            ref={ (inp) => { this.trackInput = inp }}
          />
          <button onClick={this.handleClick}>Send to playlist</button>
        </div>
        <div>
          <input
            placeholder='find'
            ref={ (inp) => { this.searchInput = inp }}
          />
          <button onClick={this.handleFind}>Find in playlist</button>
        </div>
        <ul>
          {
            this.props.tracks.map( (item, index) => {
              return(
                <li key={index}>{item.name}</li>
              )
            })
          }
        </ul>
      </div>
    );
  }
}
const putStateToProps = state => {
  return {
    tracks: state.tracks.filter( track => track.name.includes(state.findTrack))
  }
}
const putDispatchToProps = {
  setTrack: setTrack,
  findTrack: findTrack
}

export default connect( putStateToProps, putDispatchToProps)(App)
