import './styles.css'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home, Nav, RetroWeather } from './components'

const container = document.getElementById('root')

if (container) {
  const root = createRoot(container);
  root.render(
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Nav />}>
            <Route index element={<Home />} />
            {/* PROJECTS - Showcase your past public work and blog about the non-public stuff */}
            <Route path="retro-weather" element={<RetroWeather />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}
