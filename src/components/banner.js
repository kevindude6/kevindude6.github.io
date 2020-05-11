import React from "react";
import Img from "gatsby-image";
import {useStaticQuery, graphql} from "gatsby";

import "../styles/styles.scss"


const Banner = () => {
    const data = useStaticQuery(graphql`
    query {
      cozyhouseimg: file(relativePath: { eq: "cozy house.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      earringimg: file(relativePath: { eq: "earring.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      squareislandsimg: file(relativePath: { eq: "square-islands.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
    return (
        <div className="banner">
            <div className="container">
                <div className="row">
                    <div className="main-text">Kevin DiCola</div>
                    <div className="side-image left">
                        <Img fluid={data.earringimg.childImageSharp.fluid} />
                    </div>
                    <div className="main-image">
                        <Img fluid={data.cozyhouseimg.childImageSharp.fluid} />
                    </div>
                    <div className="side-image right">
                        <Img fluid={data.squareislandsimg.childImageSharp.fluid} />
                    </div>
                </div>
                <div className="scroll">
                    <span>Scroll down</span>
                </div>
            </div>
        </div>
    )
}
export default Banner