import { Box, Flex, Heading, Link, SimpleGrid, Text } from '@chakra-ui/core';
import { GetServerSideProps, GetServerSidePropsContext, NextPage } from 'next';
import NextLink from "next/link";
import fetch from 'node-fetch';
import ErrorPage from 'next/error';

type UserData = {
  id: string;
  name: string;
  email: string;
}

const fetcher = async (url: string): Promise<UserData> => {
  const res = await fetch(url);

  if (!res.ok) {
    const messsage = await res.text();
    throw Error(messsage || 'An error occurred');
  }
  const data: UserData = await res.json();
  return data;
}

const User: NextPage<{ user: UserData}> = ({ user }) => {
  if (!user) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Box>
      <Flex flexDirection="column" alignItems="center">
        <Heading as="h1" marginY="2rem">User</Heading>
        <SimpleGrid columns={2} width="xs" spacingY={4} marginY="2rem">
          <Text fontWeight="bold" marginRight={4}>User ID</Text>
          <Text>{user.id}</Text>
          <Text fontWeight="bold" marginRight={4}>Name</Text>
          <Text>{user.name}</Text>
          <Text fontWeight="bold" marginRight={4}>Email</Text>
          <Text>{user.email}</Text>
        </SimpleGrid>
        <NextLink href="/" passHref>
          <Link>Back to Home</Link>
        </NextLink>
      </Flex>
    </Box>
  );

};

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
  const { params, res } = context;

  const { id } = params;
  try {
    const user = await fetcher(`http://localhost:3000/api/user/${id}`);
    return {
      props: {
        user
      }, 
    };
  } catch {
    res.statusCode = 404;
    return { props: {} };
  }
}

export default User;
