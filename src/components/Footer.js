import { IconContext } from "react-icons";
import { BsLinkedin, BsInstagram, BsGithub } from "react-icons/bs";
import { Text, Link, HStack, Center, VStack, Divider } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";

const IconRow = () => {
  return (
    <HStack>
      <IconContext.Provider
        value={{
          className: "footer-icons",
        }}
      >
        <Link href="https://www.linkedin.com/in/jakeperret/">
          <Icon as={BsLinkedin} boxSize={10} />
        </Link>
        <Link href="https://www.instagram.com/jake.perret/">
          <Icon as={BsInstagram} boxSize={10} />
        </Link>
        <Link href="https://github.com/jpperret">
          <Icon as={BsGithub} boxSize={10} />
        </Link>
      </IconContext.Provider>
    </HStack>
  );
};

export default function Footer() {
  return (
    <Center>
      <VStack width="100vw">
        <Divider />
        <IconRow />
        <Text pb={0}>&#169;{new Date().getFullYear()} Jake Perret</Text>
        <Text pb={0}>My name is also John</Text>
      </VStack>
    </Center>
  );
}
