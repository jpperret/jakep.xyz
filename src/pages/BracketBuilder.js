import { Heading, Text, Link } from "@chakra-ui/react";
import { Helmet } from "react-helmet";
import { ListItem, UnorderedList } from "@chakra-ui/react";

export default function BracketBuilder() {
  return (
    <>
      <Helmet>
        <title>Bracket Builder</title>
      </Helmet>
      <Heading as="h1" size="xl">
        Bracket Builder
      </Heading>
      <Text>
        Bracket Builder is an ios app that allows users to create and track
        tournaments.
      </Text>
      <Heading as="h2" size="lg">
        Features
      </Heading>
      <UnorderedList>
        <ListItem>
          Create single or double elimination brackets of sizes ranging from 2
          teams to 32 teams
        </ListItem>
        <ListItem>Automatic ordering of teams based on seed</ListItem>
        <ListItem>Randomize seeds</ListItem>
        <ListItem>Track winners and losers</ListItem>
        <ListItem>Easily remove winners</ListItem>
        <ListItem>Share the bracket with participants or friends</ListItem>
      </UnorderedList>
      <br /> {/* TODO: Should be just bottom padding */}
      <Text>
        <Link href="/bracket-builder/privacy">
          Bracket Builder Privacy Policy
        </Link>
      </Text>
    </>
  );
}
