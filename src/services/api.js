const API_KEY = "bd09acd08f908944c6b082364166b9f5"
const BASE_URL = "https://api.themoviedb.org/3"

export const fetchFromAPI = async (endpoint, page = 1, params = "") => {
    const url = `${BASE_URL}${endpoint}?api_key=${API_KEY}&page=${page}&${params ? `&${params}` : ""}`
    const response = await fetch(url)
    const data = await response.json()
    return data
}