import React from 'react'

const EditTrackButton = ({handleEditClick, track}) => {
  return (
    <div>
      <button onClick={() => handleEditClick(track)}>Edit</button>
    </div>
  )
}

export default EditTrackButton
