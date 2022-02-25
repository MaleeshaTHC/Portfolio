import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"

const About = () => {
  return (
    <div className="section" id="about">
      <div className="container">
        <div className="header-wrapper">
          <Fade bottom cascade>
              <h1>About Me</h1>
            </Fade>
            <p>
              <br></br>
              {data.aboutParaOne}
              <br></br>
              <br></br>
              {data.aboutParaTwo}
              <br></br>
              <br></br>
              {data.aboutParaThree}
            </p>
        </div>
      </div>
    </div>
  )
}

export default About
