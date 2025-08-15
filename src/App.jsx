import React from 'react'
import './App.css'
import { useState, useEffect } from 'react'
import apiCalls from "../lib/api"

import TrackList from './components/TrackList/TrackList'
import TrackForm from './components/TrackForm/TrackForm'

const App = () => {

  const [formIsShown, setFormIsShown] = useState(false)
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


  const handleShowFormClick = (event) => {
    setFormIsShown(true)
  }

  return (
    <>
      <button
        style={{ backgroundColor: '#f76110ff' }}
        onClick={handleShowFormClick}>
        Add New Track
      </button>
      {
        formIsShown
        ?
        <TrackForm setFormIsShown={setFormIsShown} getTracks={getTracks} loading={loading}/>
        :
        null
      }
      <TrackList tracks={tracks}/>
      
    </>
  )
}

export default App
