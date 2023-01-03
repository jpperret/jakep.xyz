import { Heading, Text } from "@chakra-ui/react";
import { Helmet } from "react-helmet";

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>Jake P | 404 Error</title>
      </Helmet>
      <Heading as="h1" size="xl">
        404: Not Found
      </Heading>
      <Text>You hit a route that doesn&#39;t exist.</Text>
    </>
  );
}
