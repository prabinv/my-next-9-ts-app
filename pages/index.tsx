import { NextPage } from "next";
import NextLink from "next/link";
import { Flex, Heading, Link } from "@chakra-ui/core";

const IndexPage: NextPage = () => {
  return (
    <Flex flexDirection="column" alignItems="center" margin={4}>
      <Heading as="h1" size="2xl" marginY='2rem'>Hello World!</Heading>
      <NextLink href="/about" passHref>
        <Link>
          About
        </Link>
      </NextLink>
    </Flex>
  );
}

export default IndexPage;
