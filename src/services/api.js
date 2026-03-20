const API_KEY = import.meta.env.VITE_TMDB_API_KEY
const BASE_URL = "https://api.themoviedb.org/3"

export const fetchFromAPI = async (endpoint, page = 1, params = {}) => {
  const queryParams = new URLSearchParams({ api_key: API_KEY })

  if (page) queryParams.append("page", page)

  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null) queryParams.append(key, value)
  })

  const url = `${BASE_URL}${endpoint}?${queryParams.toString()}`

  const response = await fetch(url)
  if (!response.ok) throw new Error(`Failed to fetch ${endpoint}: ${response.status}`)
  return response.json()
}