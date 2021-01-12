import { NextPage } from "next";
import Link from "next/link";

const AboutMePage: NextPage = () => {
  return (
    <>
      <h1>This is the About/Me Page!</h1>
      <Link href="/about">Back to About</Link>
    </>
  );
}

export default AboutMePage;
