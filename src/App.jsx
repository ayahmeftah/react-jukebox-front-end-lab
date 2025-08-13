import React from 'react'
import './App.css'
import { useState, useEffect } from 'react'
import apiCalls from "../lib/api"

import TrackList from './components/TrackList/TrackList'

const App = () => {
  const [tracks, setTracks] = useState([])
  const [loading, setLoading] = useState(true)

  const getTracks = async () => {
    const allTracks = await apiCalls.getAllTracks()
    setTracks(allTracks)
    setLoading(false)
  }

  useEffect(() => {
    getTracks()
  },[])

  console.log(tracks)

  return (
    <>
      <h1>Hello</h1>
      <TrackList tracks={tracks} loading={loading}/>
    </>
  )
}

export default App
