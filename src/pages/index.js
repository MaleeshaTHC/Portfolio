import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
// Components
import About from "../components/about"
import Work from "../components/Work"
import Header from "../components/Header"
import Skills from "../components/skills"
import Promotion from "../components/Promotion"
import Footer from "../components/Footer"

const IndexPage = () => (
  <Layout>
    <SEO title="maleeshathc" />
    <Header></Header>
    <About></About>  
    <Skills></Skills>    
    <Promotion></Promotion>
    <Work></Work>        
    <Footer></Footer>
  </Layout>
)

export default IndexPage
