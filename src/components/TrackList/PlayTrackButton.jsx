import React from 'react'
import apiCalls from '../../../lib/api'

const PlayTrackButton = ({ trackId, setNowPlaying }) => {
  const handlePlayClick = async () => {
    const track = await apiCalls.getOneTrack(trackId)
    setNowPlaying(track)
  }

  return (
    <div>
      <button onClick={handlePlayClick}>Play</button>
    </div>
  )
}

export default PlayTrackButton
