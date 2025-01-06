import './styles.css'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home, Portfolio, Nav, RetroWeather, Blog } from './components'

const container = document.getElementById('root')

if (container) {
  const root = createRoot(container);
  root.render(
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Nav />}>
            <Route index element={<Home />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="retro-weather" element={<RetroWeather />} />
            <Route path="blog" element={<Blog />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}
