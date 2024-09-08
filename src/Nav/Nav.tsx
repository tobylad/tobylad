import './nav.css'
import { useState } from 'react'
import { FaHamburger } from 'react-icons/fa'
import { Outlet, Link } from 'react-router-dom';

export const Nav = () => {
  const [navOpen, setNavOpen] = useState<boolean>(false)

  const toggleNav = (): void => {
    setNavOpen(!navOpen)
  }

  return (
    <>
      <nav className={navOpen ? 'nav-open' : ''}>
        <div className="headline">
          <div>Toby Ladislas</div>
          <div>
            <button className="nav-button" onClick={() => toggleNav()}>
              <FaHamburger />
            </button>
          </div>
          <div>Software Engineer</div>
        </div>

        { navOpen && 
          <div className="nav-expanded">
            <ul>
              <li key="home" className="home-link"><Link to="/" onClick={() => setNavOpen(false)}>Home</Link></li>
              <li key="resume"><Link to="/xp" onClick={() => setNavOpen(false)}>Resume + Experience</Link></li>
              {/* <li key="tgm"><a href="/tgm">Who's that Pokemon?</a></li> */}
            </ul>
          </div>
        }
      </nav>

      <Outlet />
    </>
  )
}