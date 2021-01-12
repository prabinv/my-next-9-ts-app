import { NextPage } from "next";
import NextLink from "next/link";
import { Flex, Heading, Link } from "@chakra-ui/core";

const AboutPage: NextPage = () => {
  return (
    <Flex flexDirection="column" alignItems="center" margin={4}>
      <Heading as="h1" size="2xl" marginY='2rem'>This is the About Page!</Heading>      
      <NextLink href="/" passHref>
        <Link>Back to Home</Link>
      </NextLink>
      <NextLink href="/about/me" passHref>
        <Link>About Me</Link>
      </NextLink>
    </Flex>
  );
}

export default AboutPage;
