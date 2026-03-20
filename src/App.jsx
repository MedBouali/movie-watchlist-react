import { Routes, Route } from "react-router-dom"
import MainLayout from "./layout/MainLayout"
import Home from "./pages/Home"
import Movies from "./pages/movies"
import Watchlist from "./pages/Watchlist"
import Shows from "./pages/shows"
import MediaDetails from "./pages/mediaDetails"

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/tv-shows" element={<Shows />} />
        <Route path="/watchlist" element={<Watchlist />} />
        <Route path="/:type/:id" element={<MediaDetails />} />
      </Routes>
    </MainLayout>
  )
}

export default App
