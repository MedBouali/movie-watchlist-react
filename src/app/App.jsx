import { Routes, Route } from "react-router-dom"
import { MainLayout } from "@/components/layout"
import { Home } from "@/app/pages"
import {
  Movies,
  Shows,
  Watchlist,
  MediaDetails
} from "@/app/pages"

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
