import React from 'react'
import apiCalls from '../../../lib/api'

const DeleteTrackButton = ({trackId, getTracks}) => {
   const handleDelete = async () => {
        await apiCalls.deleteTrack(trackId)
        getTracks()
    }

    return (
        <button onClick={handleDelete}>Delete</button>
    )
}

export default DeleteTrackButton
