import React from "react"


//import "../styles/styles.scss"


//import components

//import BSHeader from '../components/bsheader'
//import Sidebar from '../components/sidebar'
import BottomNavbar from "../components/bottomnavbar"
//import Header from '../components/header'
//import Banner from '../components/banner'

const ResumePage = () => (
  <div>
    <div id="wrapper">
      <BottomNavbar activepage="Resume"></BottomNavbar>
      <div className="content-pane">
        <p className="bigtext leftalign">Summary</p>
        <hr></hr>
        <ul className="normaltext leftalign">
          <li>Software Engineer at HummingHeads, Inc.</li>
          <li>B.S. Computer Science, University of Maryland College Park</li>
          <li>B.A. Japanese, University of Maryland College Park</li>
        </ul>

        <p className="bigtext leftalign">Skills</p>
        <hr></hr>
        <ul className="normaltext leftalign">
          <li>9 years Java experience, proficient in C++, C, C#</li>
          <li>Extensive Unity experience</li>
          <li>Plentiful Android development experience</li>
          <li>Blender experience, including mobile optimized modeling</li>
          <li>Windows API experience</li>
          <li>Intermediate speaker of Japanese</li>
          <li>Certified SolidWorks Associate</li>
          <li>Basic electronics experience</li>
          <li>Microsoft Office and Google Docs experience</li>
          <li>Engineering experience throughout STEM program</li>
          <li>Experience in robotic automation</li>
        </ul>

        <p className="bigtext leftalign">Experience</p>
        <hr></hr>
        <ul className="normaltext leftalign">
          <li>Software Engineer at HummingHeads, Inc. (ハミングヘッズ) (09/19 -present)</li>
          <li>Software Development Intern at JF Taylor, Inc.(Summer 2016, Summer 2017)</li>
          <li>Supercomputing Internship Program (Summer 2014) at PAX Naval Base</li>
          <li>Undergraduate Technology Apprenticeship Program (2018 - 2019)</li>
        </ul>
        




       
      </div>
    </div>
  </div>
  
)

export default ResumePage
