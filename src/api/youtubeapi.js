import axios from 'axios';


const KEY='AIzaSyACtK0qEp4ETZ3Jn4sJQ2dsUkVX_3Z9ek8'

export default axios.create({
    baseURL : 'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResults : 20,
        key:KEY
    }
})