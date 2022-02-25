import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"
const Navbar = () => {
  return (
    <div className="section" id="navigation">
      <div className="container">
        <div className="navbar-wrapper">
          <div
            role="button"
            onClick={() => scrollTo("#home")}
            className="name"
            tabIndex={0}
          >
            Home
          </div>
          <div className="links-wrapper">
            <button onClick={() => scrollTo("#about")}>About</button>            
            <button onClick={() => scrollTo("#skills")}>Resume</button>
            <button onClick={() => scrollTo("#work")}>Development</button>
            <button onClick={() => scrollTo("#contact")}>Contact</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
