import React from "react";
import Img from "gatsby-image";
import {useStaticQuery, graphql} from "gatsby";

import "../styles/styles.scss"


const Banner = () => {
    return (
        <div className="banner">
            <div className="container">
                <div className="row">
                    <div className="main-text">Kevin DiCola</div>
                </div>
            </div>
        </div>
    )
}
export default Banner