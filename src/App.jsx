import React from 'react'
import './App.css'
import { useState, useEffect } from 'react'
import apiCalls from "../lib/api"

import TrackList from './components/TrackList/TrackList'

const App = () => {
  const [tracks, setTracks] = useState([])

  const getTracks = async () => {
    const allTracks = await apiCalls.getAllTracks()
    setTracks(allTracks)
  }

  useEffect(() => {
    getTracks()
  },[])

  console.log(tracks)

  return (
    <>
      <h1>Hello</h1>
      <TrackList tracks={tracks} />
    </>
  )
}

export default App
