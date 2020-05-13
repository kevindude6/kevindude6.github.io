import { Link } from "gatsby"

import React from "react"
import "../styles/styles.scss"

const BottomNavbar = (props) => (
  <div className="bottom-nav">
    <div className="logo">
      <h1>KD</h1>
      <hr></hr>
    </div>
    
    <Link className={"bottomlink" + (props.activepage === "About" ? " active" : "")} to="public/about">About</Link>
    <Link className={"bottomlink" + (props.activepage === "Resume" ? " active" : "")} to="public/resume">Resume</Link>
    <Link className={"bottomlink" + (props.activepage === "Projects" ? " active" : "")} to="public/projects">Projects</Link>
    <Link className={"bottomlink" + (props.activepage === "Modeling" ? " active" : "")} to="public/modeling">Modeling</Link>
  </div>
)

 
export default BottomNavbar
