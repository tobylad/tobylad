import './styles.css'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Nav } from './Nav/Nav'
import { Home } from './Home/Home'
import { Breakfast } from './Breakfast/Breakfast'

const container = document.getElementById('root');

if (container) {
  const root = createRoot(container);
  root.render(
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Nav />}>
            <Route index element={<Home />} />
            <Route index path="/breakfast" element={<Breakfast />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}
