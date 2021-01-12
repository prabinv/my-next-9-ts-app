import { Link, Flex, Box, Heading, Text } from "@chakra-ui/core";
import NextLink from "next/link";
import { useRouter } from 'next/router';
import { NextPage, GetStaticPaths, GetStaticProps } from "next";

const BlogPostPage: NextPage<{
  blog: {
    slug: string;
    title: string;
    text: string;
  };
}> = props => {

  return (
    <Flex margin={4} flexDirection="column">
      <NextLink href="/blog" passHref>
        <Link>Back to TOC</Link>
      </NextLink>
      <Heading as="h1" size="xl" marginY={4}>{props.blog.title}</Heading>
      <Text margin="2rem">
        {props.blog.text}
      </Text>
    </Flex>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const blogs = (await import('../../lib/blogs.json')).default;

  const paths = blogs.map(b => ({
    params: { slug: b.slug }
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params: { slug }}) => {
  const blogs = (await import('../../lib/blogs.json')).default;

  const blog = blogs.find(b => b.slug === slug);

  return { 
    props: {
      blog
    }
  };
}

export default BlogPostPage;
