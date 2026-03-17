import { Navbar, Footer } from "../components"

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
