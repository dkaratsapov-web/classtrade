import Hero from '../components/Hero.jsx'
import Advantages from '../components/Advantages.jsx'
import AdvantageBar from '../components/AdvantageBar.jsx'
import Categories from '../components/Categories.jsx'
import Feature from '../components/Feature.jsx'
import Spheres from '../components/Spheres.jsx'
import About from '../components/About.jsx'
import Partners from '../components/Partners.jsx'
import News from '../components/News.jsx'
import Contacts from '../components/Contacts.jsx'

// Главная — порядок секций по памятке CLASS TRADE (раздел 8)
export default function Home() {
  return (
    <>
      <Hero />
      <Advantages />
      <AdvantageBar
        items={[
          'Работа с госзаказчиками',
          'Широкая география поставок',
          'Полный пакет документов',
          'Гарантия на оборудование',
          'Доставка по всей России',
          'Монтаж и установка',
          'Сервисное обслуживание',
        ]}
      />
      <Categories />
      <Feature />
      <Spheres />
      <About />
      <AdvantageBar
        small
        items={[
          '10 лет на рынке',
          'Снабдили 500+ объектов',
          'Индивидуальный подход',
          'Техническая поддержка',
        ]}
      />
      <Partners />
      <News />
      <Contacts />
    </>
  )
}
