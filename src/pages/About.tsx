import { Helmet } from "react-helmet";
import React from "react";

const About: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Jake P | About</title>
        <meta name="keywords" content="Jakep, Jake, Perret" />
      </Helmet>
      <h1>Hi I'm Jake</h1>
      <p>
        I am a recent computer science graduate from the University of Maryland.
      </p>
    </>
  );
};

export default About;
