import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

const About: React.FC = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Jake P | About</title>
          <meta name="keywords" content="Jakep, Jake, Perret" />
        </Helmet>
      </HelmetProvider>
      <h1>Hi I'm Jake</h1>
      <p>
        I am a recent computer science graduate from the University of Maryland.
      </p>
    </>
  );
};

export default About;
