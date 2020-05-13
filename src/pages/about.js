import React from "react"


import "../styles/styles.scss"


//import components

//import BSHeader from '../components/bsheader'
//import Sidebar from '../components/sidebar'
import BottomNavbar from "../components/bottomnavbar"
//import Header from '../components/header'
//import Banner from '../components/banner'

const AboutPage = () => (
  <div>
    <div id="wrapper">
      <BottomNavbar activepage="About"></BottomNavbar>
      <div className="content-pane">
        <p className="hugetext centeralign">Oh, hello.</p>
        <p className="bigtext centeralign">My name is Kevin</p>
        <p className="normaltext centeralign">Please hire me.</p>
      </div>
    </div>
  </div>
  
)

export default AboutPage
