import { Heading, Text, Link } from "@chakra-ui/react";
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
        <meta name="keywords" content="Bracket, Builder, Jakep" />
      </Helmet>
      <Heading as="h1" size="xl">
        Bracket Builder
      </Heading>
      <Text>
        Bracket Builder is an iOS app that allows users to create and track
        custom tournaments.
      </Text>
      <Text>Easily track and share tournament status.</Text>
      <Heading as="h2" size="lg">
        Features
      </Heading>
      <UnorderedList>
        <ListItem>
          Create single or double elimination brackets of sizes ranging from 2
          teams to 32 teams
        </ListItem>
        <ListItem>Automatic ordering of teams based on seed</ListItem>
        <ListItem>Double elimination bracket support</ListItem>
        <ListItem>Track winners and losers</ListItem>
        <ListItem>Easily remove winners</ListItem>
        <ListItem>All features are free to use</ListItem>
        <ListItem>
          Share bracket as an image with participants or friends
        </ListItem>
      </UnorderedList>
      <br /> {/* TODO: Should be just bottom padding */}
      <Text>
        Organize and track tournaments for pool, tennis, baseball, basketball,
        pong, die and anything else you can think of!
      </Text>
      <Text>
        <Link href="/bracket-builder/privacy">
          Bracket Builder Privacy Policy
        </Link>
      </Text>
    </>
  );
}
