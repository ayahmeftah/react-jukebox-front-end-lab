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


const apiCalls = {
    getAllTracks,
    createTrack
}

export default apiCalls