import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"

import gmailIcon from "../images/gmail.png"
import outlookIcon from "../images/outlook.png"
import phoneIcon from "../images/phone.png"

const Footer = () => {
  return (
    <div className="section" id="contact">
      <div className="container">
        <div className="footer-container">
          <Fade bottom cascade>
            <h2>Contact</h2>
          </Fade>
          <div className="social-icons">            
          <a className="email-link" href={`mailto:${data.contactEmail}`}>
          <img src={gmailIcon} alt="icons"></img>
            </a>
            <a className="email-link" href={`mailto:${data.contactEmailoffice}`}>
            <img src={outlookIcon} alt="icons"></img>
            </a>
            <a className="telephone" href={`tel:${data.contactNumber}`}>
            <img src={phoneIcon} alt="icons"></img>
            </a>
            {data.social.map((socialLink, index) => (
              <a
                key={index}
                href={socialLink.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={socialLink.img} alt="icons"></img>
              </a>
            ))}
          </div>
          <span>
            Made With <icon>❤</icon> by{" "}
            <a href="https://www.chetanverma.com/">Maleesha</a>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Footer
