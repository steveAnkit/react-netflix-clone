const API_KEY = "28c5e175f9cbc5282e082efcd346b816";


const requests = {

fetchTrending : `/trending/all/week?api_key=${API_KEY}&language=en-US`,
fetchNetflixOriginals : `/discover/tv?api_key=${API_KEY}&language=en-US`

}

export default requests;