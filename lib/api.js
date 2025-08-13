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



const apiCalls = {
    getAllTracks
}

export default apiCalls