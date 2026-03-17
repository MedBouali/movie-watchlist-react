import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

function MainLayout({ children }) {

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="grow">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout
