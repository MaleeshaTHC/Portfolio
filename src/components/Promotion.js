import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"

const Promotion = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="promotion-container">
          <Fade bottom cascade>
            <h1>{data.promotionHeading}</h1>
          </Fade>
          <p>{data.promotionPara1}
          <br></br>
          {data.promotionPara2}</p>
          <br></br><br></br><br></br>
          <br></br><br></br><br></br>
        </div>
      </div>
    </div>
  )
}

export default Promotion
