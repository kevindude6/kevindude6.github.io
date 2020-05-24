import React from "react"


//import "../styles/styles.scss"

import BottomNavbar from "../components/bottomnavbar"


const ProjectsPage = () => (
  <div>
    <div id="wrapper">
      <BottomNavbar activepage="Projects"></BottomNavbar>
      <div className="content-pane">
        <p className="bigtext leftalign">Cow Kingdom</p>
        <hr></hr>
        <img src="src/images/projects/cow-kingdom/cowkingdom0.png" alt="Cow Kingdom picture" width="500" height="600"></img>
          learned scriptable objects, json save load, unity ui.

        <p className="bigtext rightalign">Kermode Kanji</p>
        <hr></hr>
          learned android api and ui stuff (Floating action buttons, )
      </div>
    </div>
  </div>
  
)

export default ProjectsPage
