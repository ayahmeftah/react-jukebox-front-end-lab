import React from 'react'
import apiCalls from '../../../lib/api'
import { useState, useEffect } from 'react'

const TrackForm = ({ setFormIsShown, getTracks, editTrack }) => {


    const [formData, setFormData] = useState({
        title: '',
        artist: ''
    })

    useEffect(() => {
        if (editTrack) {
            setFormData({
                title: editTrack.title || '',
                artist: editTrack.artist || ''
            })
        }
    }, [editTrack])

    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleChange = (event) => {
        event.preventDefault()
        setFormData({ ...formData, [event.target.name]: event.target.value })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        if (isSubmitting) return
        setIsSubmitting(true)

        let response

        if (editTrack && editTrack._id) {
            response = await apiCalls.updateTrack(editTrack._id, formData)
        } else {
            response = await apiCalls.createTrack(formData)
        }

        if (response.status === 201 || response.status === 200) {
            setFormData({
                title: '',
                artist: ''
            })
            setFormIsShown(false)
            getTracks()
        }

        setIsSubmitting(false)
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="track-item">
                <label htmlFor='title'>Track Title</label>
                <input type="text" name="title" id="title" value={formData.title} onChange={handleChange} />
                <br />

                <label htmlFor="artist">Artist</label>
                <input type="text" name="artist" id="artist" value={formData.artist} onChange={handleChange} />
                <br />
                <button type="submit">
                    {editTrack && editTrack._id ? 'Update' : 'Add'}
                </button>
            </form>
        </div>
    )
}

export default TrackForm
