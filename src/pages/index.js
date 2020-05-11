import React from "react"


//import "../styles/styles.scss"


//import components

import BSHeader from '../components/bsheader'
import Sidebar from '../components/sidebar'
//import Header from '../components/header'
//import Banner from '../components/banner'

const IndexPage = () => (
  <div>
    <BSHeader/>
    <div id="wrapper">
      <Sidebar></Sidebar>
    </div>
  </div>
  
)

export default IndexPage
