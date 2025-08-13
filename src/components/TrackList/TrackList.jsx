import React from 'react'
import apiCalls from '../../../lib/api'
import { BeatLoader } from 'react-spinners'

const TrackList = ({ tracks }) => {

  return (
    <div>
      {

        tracks.length
          ?
          tracks.map((track) => {
            return <p key={track._id}>{track.title} by {track.artist}</p>
          })
          :
          <BeatLoader color="#f7a010" />
      }
    </div>
  )
}

export default TrackList
