import { Heading, Text, Link } from "@chakra-ui/react";
import { Helmet } from "react-helmet";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Jake P</title>
      </Helmet>

      <Heading as="h1" size="xl">
        Jake Perret
      </Heading>
      <Text>Welcome to my website</Text>

      <Heading as="h2" size="lg">
        Recent Projects
      </Heading>

      <Heading as="h3" size="md">
        <Link href="/bracket-builder">Bracket Builder</Link>
      </Heading>
      <Text>My first iOS app</Text>
      <Text>
        Bracket Builder is an iOS app to help users create and track
        tournamenets.
      </Text>

      <Heading as="h3" size="md">
        <Link href="https://github.com/jpperret/python-planner" isExternal>
          Python Planner
        </Link>
      </Heading>
      <Text>
        When searching for a PDF weekly planner to use with my iPad I was unable
        to find any I particuarly liked, so I decided to create my own. To make
        it easily editble and able to be updated for future years I decided to
        make it with Python. The code to generate it and resulting PDF can be
        found in the{" "}
        <Link href="https://github.com/jpperret/python-planner" isExternal>
          GitHub Repo
        </Link>
        .
      </Text>

      <Heading as="h2" size="lg">
        Contact
      </Heading>
      <Text>
        To get in contact with me, feel free to reach out on instagram or linked
        in PMs
      </Text>
    </>
  );
}
