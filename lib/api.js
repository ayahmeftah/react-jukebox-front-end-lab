import axios from "axios";

const baseURL = import.meta.env.VITE_BACK_END_SERVER_URL

// get all tracks
const getAllTracks = async () => {
  try {
    const response = await axios.get(`${baseURL}/tracks`)
    return response.data
  } catch (error) {
    return { error: error.message }
  }
}

// create a track
const createTrack = async (data) => {
  try {
    const response = await axios.post(`${baseURL}/tracks`,data)
    return response
  } catch (error) {
    return { error: error.message }
  }
}

// delete track
const deleteTrack = async (id) => {
    try {
        const response = await axios.delete(`${baseURL}/tracks/${id}`)
        return response
    } 
    catch (error) {
        return error
    }
}

// edit track
const updateTrack = async (id, data) => {
  try {
    const response = await axios.put(`${baseURL}/tracks/${id}`,data)
    return response
  } catch (error) {
    return error
  }
}

// get one track for now playing
const getOneTrack = async (id) => {
  try {
    const response = await axios.get(`${baseURL}/tracks/${id}`)
    return response.data
  } catch (error) {
    return error
  }
}

const apiCalls = {
    getAllTracks,
    createTrack,
    deleteTrack,
    updateTrack,
    getOneTrack
}

export default apiCalls