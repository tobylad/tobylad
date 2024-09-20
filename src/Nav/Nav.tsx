import './nav.css'
import { useState, useEffect, useRef } from 'react'
import { FaHamburger } from 'react-icons/fa'
import { Outlet, Link } from 'react-router-dom';

export const Nav = () => {
  const [navOpen, setNavOpen] = useState<boolean>(false)
  const [navVisible, setNavVisible] = useState<boolean>(true)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)


  const hideNav = () => {
    timeoutRef.current = setTimeout(() => {
      setNavVisible(false)
    }, 3000)
  }

  const showNav = () => {
    setNavVisible(true)
    
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }

    hideNav()
  }

  useEffect(() => {
    hideNav()

    const handleMouseOver = () => showNav()
    const handleScroll= () => showNav()

    window.addEventListener('mouseover', handleMouseOver)
    window.addEventListener('scroll', handleScroll)

    return (() => {
      window.removeEventListener('mouseover', handleMouseOver)
      window.removeEventListener('scroll', handleScroll)

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    })
  }, [])

  const toggleNav = (): void => {
    setNavOpen(!navOpen)
  }

  return (
    <>
      <nav className={`${navOpen ? 'nav-open' : ''} ${!navVisible ? 'nav-hidden' : ''} poo`}>
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
              <li key="retro-weather"><Link to="/retro-weather" onClick={() => setNavOpen(false)}>Retro Weather</Link></li>
            </ul>
          </div>
        }
      </nav>

      <Outlet />
    </>
  )
}