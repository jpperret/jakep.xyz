import { Heading, Text } from "@chakra-ui/react";
import { Helmet } from "react-helmet";
import React from "react";

const About: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Jake P | About</title>
        <meta name="keywords" content="Jakep, Jake, Perret" />
      </Helmet>
      <Heading as="h1" size="xl">
        Hi I'm Jake
      </Heading>
      <Text>
        I am a recent computer science graduate from the University of Maryland.
      </Text>
    </>
  );
};

export default About;
