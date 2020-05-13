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
        <p className="normaltext centeralign">I have a variety of skills and interests.</p>
        <p className="normaltext centeralign">I am proficient in Java and C#.</p>
        <p className="normaltext centeralign">I feel comfortable working in C and C++.</p>
        <p className="normaltext centeralign">I love working in teams.</p>
        <p className="normaltext centeralign">But most importantly,</p>
        <p className="bigtext centeralign">I can learn...</p>
        <br/><br/><br/>
        <p className="hugetext centeralign">Anything.</p>
      </div>
    </div>
  </div>
  
)

export default AboutPage
