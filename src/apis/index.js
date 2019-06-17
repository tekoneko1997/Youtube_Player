import axios from 'axios';

export default axios.create({
    baseURL: process.env.REACT_APP_YOUTUBE_API_URL,
    params:{
        part: 'snippet',
        maxResults:5,
        key: process.env.REACT_APP_YOUTUBE_API_KEY,
    }
})