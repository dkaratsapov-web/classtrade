import { useState, useEffect } from 'react'
import { CartProvider } from './cart/CartContext.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import AboutPage from './pages/AboutPage.jsx'
import ContactsPage from './pages/ContactsPage.jsx'
import ProjectsPage from './pages/ProjectsPage.jsx'
import NewsPage from './pages/NewsPage.jsx'
import CatalogPage from './pages/CatalogPage.jsx'
import LandingPage from './pages/LandingPage.jsx'
import SubcatalogPage from './pages/SubcatalogPage.jsx'
import CartPage from './pages/CartPage.jsx'

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

function Router({ route }) {
  if (route === '/about') return <AboutPage />
  if (route === '/contacts') return <ContactsPage />
  if (route === '/projects') return <ProjectsPage />
  if (route === '/news') return <NewsPage />
  if (route === '/products') return <SubcatalogPage />
  if (route === '/cart') return <CartPage />
  if (route === '/catalog') return <CatalogPage />
  if (route.startsWith('/catalog/')) return <LandingPage slug={route.slice(9)} />
  return <Home />
}

export default function App() {
  const route = useHashRoute()
  return (
    <CartProvider>
      <div className="page">
        <Header />
        <Router route={route} />
        <Footer />
      </div>
    </CartProvider>
  )
}
