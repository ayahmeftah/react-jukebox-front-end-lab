import React from 'react'

const NowPlaying = ({ track }) => {

    if (!track) return null
    return (
        <div className='track-item'>
            <h2 style={{ color: '#f76110ff' }}>Now Playing</h2>
            <p>
                Title: {track.title}
            </p>
            <p>
                Artist: {track.artist}
            </p>
        </div>
    )
}

export default NowPlaying
