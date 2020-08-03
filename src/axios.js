import axios from 'axios';

//base URL to make request to the movie database
const instance = axios.create({
    baseURL = "https://api.themoviedb.org/3",
});

// example if we use instance.get('/foo-bar')
// it will give us => https://api.themoviedb.org/3/foo-bar

export default instance;