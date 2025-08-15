import React from 'react'
import apiCalls from '../../../lib/api'
import { BeatLoader } from 'react-spinners'
import { useState, useEffect } from 'react'

import PlayTrackButton from './PlayTrackButton'
import EditTrackButton from './EditTrackButton'
import DeleteTrackButton from './DeleteTrackButton'

const TrackList = ({tracks, loading, getTracks}) => {

  
  return (
    <div className='tracks-list'>
      <h1 className="track-list-heading">Track List</h1>
      {
        loading ?
          <BeatLoader color="#f7a010" />
          :
          tracks.length
            ?
            tracks.map((track) => {
              return (
                <>
                  <div className="track-item" key={track._id}>
                    <div>
                      <p>{track.title} by {track.artist}</p>
                    </div>
                    <div className="track-buttons">
                      <PlayTrackButton trackId={track._id}/>
                      <EditTrackButton trackId={track._id}/>
                      <DeleteTrackButton trackId={track._id} getTracks={getTracks}/>
                    </div>
                  </div>
                </>
              )
            })
            :
            <p>No tracks, add to view</p>
      }
    </div>
  )
}

export default TrackList
