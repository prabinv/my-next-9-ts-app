
import NextLink from "next/link";
import Router from "next/router";
import {
  Heading,
  Link,
  Flex,
  Box,
  Button,
  Code,
} from "@chakra-ui/core";
import { GetServerSideProps, GetServerSidePropsContext, NextPage } from "next";
import auth0 from "../lib/auth0";

interface SecretPageProps {
  error?: string,
  username?: string
}

const SecretPage: NextPage<SecretPageProps> = ({ error, username }) => {
  return (
    <Box>
      <Flex margin="1rem" justifyContent="flex-end">
        <NextLink href="/" passHref>
          <Link>Home</Link>
        </NextLink>
      </Flex>
      <Flex
        flexDirection="column"
        alignItems="center"
        margin="2rem"
      >
        <Heading as="h2" size="lg" margin="1rem">
          {!username || error ? `You are not logged in!` : `Welcome ${username}`}
        </Heading>
        <Code margin="1rem">{error ?? username}</Code>
        <Button
          variantColor="blue"
          margin="1rem"
          onClick={() =>
            username ? Router.push(`/api/logout`) : Router.push(`/api/login`)
          }
        >
         {username ? 'Logout' : "Login"}
        </Button>
      </Flex>
    </Box>
  );
};

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
  const { req, res } = context;

  try {
    const { user } = await auth0.getSession(req);
    return {
      props: {
        username: user.name,
      }
    };
  } catch (error) {
    res.statusCode = 404;
    return {
      props: {
        error: error.message
      }
    };
  }
}

export default SecretPage;
