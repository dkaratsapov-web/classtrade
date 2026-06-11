import { useState, useEffect, lazy, Suspense } from 'react'
import { CartProvider } from './cart/CartContext.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'

// Страницы загружаются по требованию (меньше начальный JS)
const AboutPage = lazy(() => import('./pages/AboutPage.jsx'))
const ContactsPage = lazy(() => import('./pages/ContactsPage.jsx'))
const ProjectsPage = lazy(() => import('./pages/ProjectsPage.jsx'))
const NewsPage = lazy(() => import('./pages/NewsPage.jsx'))
const CatalogPage = lazy(() => import('./pages/CatalogPage.jsx'))
const LandingPage = lazy(() => import('./pages/LandingPage.jsx'))
const SubcatalogPage = lazy(() => import('./pages/SubcatalogPage.jsx'))
const CartPage = lazy(() => import('./pages/CartPage.jsx'))

const BASE = import.meta.env.BASE_URL || '/'

// Чистые URL без хэша (history API). На GitHub Pages работает за счёт 404.html-фолбэка.
function getRoute() {
  let path = window.location.pathname
  if (path.startsWith(BASE)) path = path.slice(BASE.length)
  path = path.replace(/^\/+/, '').replace(/\/+$/, '')
  return '/' + path
}

function useRouter() {
  const [route, setRoute] = useState(getRoute)

  useEffect(() => {
    const onPop = () => setRoute(getRoute())
    window.addEventListener('popstate', onPop)

    const onClick = (e) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
      const a = e.target.closest('a')
      if (!a) return
      const href = a.getAttribute('href')
      if (!href) return
      if (
        a.target === '_blank' ||
        href.startsWith('http') ||
        href.startsWith('tel:') ||
        href.startsWith('mailto:')
      )
        return
      if (href === '#') {
        e.preventDefault()
        return
      }
      const url = new URL(a.href)
      if (url.origin !== window.location.origin || !url.pathname.startsWith(BASE)) return
      e.preventDefault()
      if (url.pathname !== window.location.pathname) {
        window.history.pushState(null, '', url.pathname)
        setRoute(getRoute())
      }
      window.scrollTo(0, 0)
    }
    document.addEventListener('click', onClick)

    return () => {
      window.removeEventListener('popstate', onPop)
      document.removeEventListener('click', onClick)
    }
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
  const route = useRouter()
  return (
    <CartProvider>
      <div className="page">
        <Header />
        <Suspense
          fallback={
            <div className="route-loader">
              <span className="route-spinner" />
            </div>
          }
        >
          <Router route={route} />
        </Suspense>
        <Footer />
      </div>
    </CartProvider>
  )
}
