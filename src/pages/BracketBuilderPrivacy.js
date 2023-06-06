import { Heading, Text, Link } from "@chakra-ui/react";
import { Helmet } from "react-helmet";

export default function BracketBuilderPrivacy() {
  return (
    <>
      <Helmet>
        <title>Bracket Builder Privacy</title>
        <link rel="icon" href="img/BracketBuilderIcon.png" />
      </Helmet>
      <Heading as="h1" size="xl">
        Bracket Builder Privacy Policy
      </Heading>
      <Text>
        <Link href="/bracket-builder">Bracket Builder</Link> does not collect,
        store, or transmit any personal information.
      </Text>
    </>
  );
}
