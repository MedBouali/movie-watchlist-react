import { Routes, Route } from "react-router-dom"
import { MainLayout } from "@/components/layout"
import { Home } from "@/app/pages"
import { Movies, Shows } from "@/features/media"
import { Watchlist } from "@/features/watchlist"
import { MediaDetails } from "@/features/mediaDetails"

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
