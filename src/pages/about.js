import { Heading, Text } from "@chakra-ui/react";
import { Helmet } from "react-helmet";

export default function About() {
  return (
    <>
      <Helmet>
        <title>Jake P | About</title>
      </Helmet>
      <Heading as="h1" size="xl">
        Hi I'm Jake
      </Heading>
      <Text>
        I am a recent computer science graduate from the University of Maryland.
      </Text>
    </>
  );
}
