import { Link } from "gatsby"

import React from "react"
import "../styles/styles.scss"

const BottomNavbar = () => (
  <div className="bottom-nav">
    <Link className="bottomlink" to="#">About</Link>
    <Link className="bottomlink" to="#">Resume</Link>
    <Link className="bottomlink" to="#">Projects</Link>
    <Link className="bottomlink" to="#">Modeling</Link>
  </div>
)

 
export default BottomNavbar
