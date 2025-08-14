import React from 'react'
import './App.css'
import { useState, useEffect } from 'react'
import apiCalls from "../lib/api"

import TrackList from './components/TrackList/TrackList'

const App = () => {


  return (
    <>
      <h1>Hello</h1>
      <TrackList />
    </>
  )
}

export default App
