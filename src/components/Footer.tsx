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
        <Link href="https://www.instagram.com/jake.perret/" isExternal>
          <Icon as={BsInstagram} boxSize={10} />
        </Link>
        <Link href="https://www.linkedin.com/in/jakeperret/" isExternal>
          <Icon as={BsLinkedin} boxSize={10} />
        </Link>
        <Link href="https://github.com/jpperret" isExternal>
          <Icon as={BsGithub} boxSize={10} />
        </Link>
      </IconContext.Provider>
    </HStack>
  );
};

const Footer: React.FC = () => {
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
};

export default Footer;
