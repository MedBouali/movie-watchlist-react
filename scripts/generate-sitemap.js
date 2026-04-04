/* global process */
import fs from "fs"
import axios from "axios"
import dotenv from "dotenv"

dotenv.config()

const BASE_URL = "https://watchwise-app.netlify.app"
const API_KEY = process.env.VITE_TMDB_API_KEY

const MAX_PAGES = 10

async function fetchMedia(type) {
    const results = []

    for (let page = 1; page <= MAX_PAGES; page++) {
        const res = await axios.get(
            `https://api.themoviedb.org/3/${type}/popular`,
            {
                params: {
                    api_key: API_KEY,
                    page
                }
            }
        )

        results.push(...res.data.results)
    }

    return results
}

async function generateSitemap() {

    const urls = []

    const staticRoutes = [
        "/",
        "/movies",
        "/tv-shows"
    ]

    staticRoutes.forEach(route => {
        urls.push(`${BASE_URL}${route}`)
    })

    const movies = await fetchMedia("movie")
    const tv = await fetchMedia("tv")

    movies.forEach(movie => {
        urls.push(`${BASE_URL}/movie/${movie.id}`)
    })

    tv.forEach(show => {
        urls.push(`${BASE_URL}/tv/${show.id}`)
    })

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `
  <url>
    <loc>${url}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
    <lastmod>${new Date().toISOString()}</lastmod>
  </url>`).join("")}
</urlset>`

    fs.writeFileSync("./public/sitemap.xml", sitemap)

    console.log(`Sitemap generated with ${urls.length} URLs`)
}

generateSitemap()