import { Routes, Route } from "react-router-dom"
import { MainLayout } from "@/components/layout"
import { Home } from "@/app/pages"
import {
  Movies,
  Shows,
  Watchlist,
  MediaDetails,
  Login,
  Register
} from "@/app/pages"
import ProtectedRoute from "@/components/routes/ProtectedRoute"

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/tv-shows" element={<Shows />} />
        <Route
          path="/watchlist"
          element={
            <ProtectedRoute>
              <Watchlist />
            </ProtectedRoute>
          }
        />
        <Route path="/:type/:id" element={<MediaDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </MainLayout>
  )
}

export default App
