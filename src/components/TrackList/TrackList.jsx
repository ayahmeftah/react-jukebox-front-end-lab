import React from 'react'
import apiCalls from '../../../lib/api'
import { BeatLoader } from 'react-spinners'

import PlayTrackButton from './PlayTrackButton'
import EditTrackButton from './EditTrackButton'
import DeleteTrackButton from './DeleteTrackButton'

const TrackList = ({ tracks, loading }) => {

  return (
    <div>
      {
        loading ?
          <BeatLoader color="#f7a010" />
          :
          tracks.length
            ?
            tracks.map((track) => {
              return (
                <>
                  <p key={track._id}>{track.title} by {track.artist}</p>
                  <div>
                    <PlayTrackButton />
                    <EditTrackButton />
                    <DeleteTrackButton />
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
