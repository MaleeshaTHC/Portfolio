import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"

const About = () => {
  return (
    <div className="secion" id="about">
      <div className="container">
        <div className="about-section">
          <div className="image-wrapper">
            <img id="img" src={data.aboutImage} alt="about"></img>
          </div>          
          <div className="content">
            <Fade bottom>
              <h2>
                Hi, I'm {data.name}{" "}
                <span role="img" aria-label="Emoji">
                  👋
                </span>
              </h2>
            </Fade>            
            <Fade bottom cascade>
              <div className="heading-wrapper">
                <br></br>
                <h1>
                  {data.headerTagline[0]
                    ? data.headerTagline[0]
                    : "Building digital"}
                </h1>
                <h1>
                  {" "}
                  {data.headerTagline[1]
                    ? data.headerTagline[1]
                    : "products, brands"}
                </h1>
                <h1>
                  {" "}
                  {data.headerTagline[2]
                    ? data.headerTagline[2]
                    : "and experience"}
                </h1>
              </div>
            </Fade>          
            <Fade bottom>
              <br></br>
              <p>{data.headerParagraph}</p>
            </Fade>
            <Fade bottom>
              <a
                href={`mailto:${
                  data.contactEmail ? data.contactEmail : "thcmaleesha@gmail.com"
                }`}
                className="primary-btn"
              >
                CONNECT WITH ME
              </a>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
