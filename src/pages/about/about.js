import React from "react";
import Intro from "./sections/Intro/Intro";
import LatestPostsTemp from "./sections/PortfolioCarrasousel/LatestPosts_Temp";
import LatestPosts from "./sections/LatestPosts/LatestPosts";
import Testimonials from "./sections/Testimonials/Testimonials";
// import Section2 from "./about_section_2_contact";

const About = props => {
  return (
    <div className="bg-gray-600">
        <Intro />
        <LatestPostsTemp />
        <LatestPosts />
        <Testimonials />
    </div>
  )
}

export default About;