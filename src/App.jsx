import { useState, useEffect } from 'react'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import AboutPage from './pages/AboutPage.jsx'
import ContactsPage from './pages/ContactsPage.jsx'

// Простой hash-роутинг — работает на статике (GitHub Pages) без 404
function useHashRoute() {
  const get = () => window.location.hash.replace(/^#/, '') || '/'
  const [route, setRoute] = useState(get)
  useEffect(() => {
    const onChange = () => {
      setRoute(get())
      window.scrollTo(0, 0)
    }
    window.addEventListener('hashchange', onChange)
    return () => window.removeEventListener('hashchange', onChange)
  }, [])
  return route
}

export default function App() {
  const route = useHashRoute()
  return (
    <div className="page">
      <Header />
      {route === '/about' ? (
        <AboutPage />
      ) : route === '/contacts' ? (
        <ContactsPage />
      ) : (
        <Home />
      )}
      <Footer />
    </div>
  )
}
