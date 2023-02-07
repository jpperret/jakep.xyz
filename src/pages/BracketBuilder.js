import { Heading, Text, Link, Image, HStack, Spacer } from "@chakra-ui/react";
import { Helmet } from "react-helmet";
import { ListItem, UnorderedList } from "@chakra-ui/react";

export default function BracketBuilder() {
  return (
    <>
      <Helmet>
        <title>Bracket Builder</title>
        <meta
          name="description"
          content="Bracket Builer: Easily track and share tournament status"
        />
        <link rel="icon" href="img/BracketBuilderIcon.png" />

        <meta name="keywords" content="Bracket, Builder, Jakep" />
      </Helmet>
      <Heading as="h1" size="xl">
        <HStack>
          <Text align="right">Bracket Builder</Text>
          <Spacer />
          <Link href="https://apps.apple.com/app/id1669378849" isExternal>
            <Image src="img/appstore.svg" />
          </Link>
        </HStack>
      </Heading>
      <Text>
        Bracket Builder is an iOS app that allows users to create and track
        custom tournaments
      </Text>
      <Text>Easily track and share tournament status</Text>
      <Text>Requires iOS 16.0 or newer</Text>
      <Heading as="h2" size="lg">
        Features
      </Heading>
      <Text>All features are free to use</Text>
      <UnorderedList>
        <ListItem>
          Supports creating brackets of sizes ranging from 2 teams to 16 teams
        </ListItem>
        <ListItem>Single and double elimination brackets</ListItem>
        <ListItem>Automatic ordering of teams based on seed</ListItem>
        <ListItem>Optionally randomize team seeds</ListItem>
        <ListItem>Keeps track of winners and losers</ListItem>
        <ListItem>Easily remove winners</ListItem>
        <ListItem>Light and dark mode support</ListItem>
        <ListItem>
          Share brackets as an image with participants or friends
        </ListItem>
      </UnorderedList>
      <br /> {/* TODO: Should be just bottom padding */}
      <Text>
        Organize and track tournaments for pool, tennis, baseball, basketball,
        pong, die and anything else you can think of!
      </Text>
      <Heading as="h2" size="lg">
        Feedback
      </Heading>
      <Text>
        Please send any bug reports or other suggestions to{" "}
        <Link href="mailto:brackbuilder@gmail.com">brackbuilder@gmail.com</Link>
      </Text>
      <Heading as="h2" size="lg">
        Privacy Policy
      </Heading>
      <Text>
        <Link href="/bracket-builder/privacy">
          Bracket Builder Privacy Policy
        </Link>
      </Text>
    </>
  );
}
