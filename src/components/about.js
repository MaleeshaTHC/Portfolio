import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"

const About = () => {
  return (
    <div className="section" id="about">
      <div className="container">
        <div className="header-wrapper">
            <div className="content">
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
                <br></br><br></br>         
              <Fade bottom cascade>
                  <h3>Contact Details</h3>
              </Fade>                  
                  <h4>Address</h4>
                  {data.address}                  
                  <br></br>
                  <h4>Email</h4>
                  {data.contactEmail}
                  <h4>Phone</h4>
                  {data.contactNumber}
            </div>
            <div className="content">
            </div>
        </div>
        <div className="header-wrapper">
            <div className="content">
              <Fade bottom cascade>
                  <h2>Education
                    <br></br>
                  </h2>
              </Fade>
                <ul>
                  <li><h3>University of Sri Jayewardenepura</h3>
                  Undergraduate - (2020 - Present)<br></br>
                  Department of Information and Communication Technology<br></br>
                  Faculty of Humanities and Social Sciences</li>
                </ul>
                <br></br>
                <br></br>
                <ul>
                  <li><h3>MR/Deniyaya Central College, Deniyaya</h3>
                  G.C.E.Advanced Level (2018)<br></br></li>
                </ul>  
            </div>
            <div className="content">
              <br></br>
              <br></br>
              <br></br>
              <br></br>
                <ul>
                  <li><h3>Vocational Training Authority of Sri Lanka</h3>
                  (2019 Jan - 2020 Feb)<br></br>
                  Information and Communication Technology Technician<br></br>
                  Grade : NVQ Level 4</li>
                </ul>  
            </div>
        </div>
      </div>
    </div>
  )
}

export default About
