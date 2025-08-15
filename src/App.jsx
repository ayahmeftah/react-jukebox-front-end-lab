import React from 'react'
import './App.css'
import { useState, useEffect } from 'react'
import apiCalls from "../lib/api"

import TrackList from './components/TrackList/TrackList'
import TrackForm from './components/TrackForm/TrackForm'
import NowPlaying from './components/NowPlaying/NowPlaying'

const App = () => {

  const [formIsShown, setFormIsShown] = useState(false)
  const [tracks, setTracks] = useState([])
  const [loading, setLoading] = useState(true)

  const [editTrack, setEditTrack] = useState(null)

  const [nowPlaying, setNowPlaying] = useState(null)

  const getTracks = async () => {
    const allTracks = await apiCalls.getAllTracks()
    setTracks(allTracks)
    setLoading(false)
  }

  useEffect(() => {
    getTracks()
  },[])


  const handleAddClick = (event) => {
    setFormIsShown(true)
    setEditTrack(null)
  }

  const handleEditClick = (track) => {
    setEditTrack(track)
    setFormIsShown(true)
  }

  return (
    <>
      <button
        style={{ backgroundColor: '#f76110ff' }}
        onClick={handleAddClick}>
        Add New Track
      </button>
      {
        formIsShown
        ?
        <TrackForm setFormIsShown={setFormIsShown} getTracks={getTracks} loading={loading} editTrack={editTrack}/>
        :
        null
      }
      <TrackList tracks={tracks} getTracks={getTracks} handleEditClick={handleEditClick} setNowPlaying={setNowPlaying} />
      {
        nowPlaying ?

        <NowPlaying track={nowPlaying} /> 
        :
        null
      }
    </>
  )
}

export default App
