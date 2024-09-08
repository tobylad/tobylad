import './styles.css'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Nav } from './Nav/Nav'
import { Xp } from './Xp/Xp'

const App: React.FC = () => {
  return (
    <div className="home">
      <p>Hello world! I'm Toby!</p>
      <div>
        Welcome to my personal website! This site will evolve over time, so please come on back for updates!
        
        To whom it may concern, I'd like to share a bit about this project!
        Features built on this site use the following technologies: 
          <ul>
            <li>React 18</li>
            <li>ReactRouterDOM</li>
            <li>TypeScript</li>
            <li>Webpack</li>
            <li>Node</li>
            <li>Express</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Azure DevOps</li>
            <li>Azure Blob Storage</li>
            <li>Squarespace hosting</li>
            <li>DALL-E</li>
          </ul>
      </div>

      <p>
        All code in this project is designed and written with purpose.
        That purpose includes clean code, readability, and performance optimization.
        For me, I took up this site to maintain my passion for tech and computers, which I've had since I was a little kid.
      </p>

      <p>I hope you enjoy your experience on the site! To reach me, please see 'Resume + Experience' section for a resume download!</p>
    </div>
  )
}

const container = document.getElementById('root');

if (container) {
  const root = createRoot(container);
  root.render(
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Nav />}>
            <Route index element={<App />} />
            <Route path="/xp" element={<Xp />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}
