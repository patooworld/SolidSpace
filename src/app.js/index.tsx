import Container from "../components/container";
import Image from "next/image";

function HomePage() {
  return (
    <>
      <Container>
        <div className="space-y-6">
          <h1 className="text-2xl font-bold">
            Hey, I'm a Senior Software Engineer at Company. I enjoy working with
            Next.js and crafting beautiful front-end experiences.
          </h1>
          <p>
            This portfolio is built with Next.js and a library called next-mdx.
            It allows you to write Markdown and focus on the content of your
            portfolio.
          </p>

          <p>Deploy your own in a few minutes.</p>
        </div>
      </Container>

      <div className="container max-w-4xl m-auto px-4 mt-20">
        <Image
          src="/desk.jpg"
          alt="my desk"
          width={1920 / 2}
          height={1280 / 2}
        />
      </div>
    </>
  );
}

export default HomePage;

import * as React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import RAView from "../components/views/playground/ra";

// markup
const IndexPage = ({ data }: any) => {
  return (
    <Layout meta={data.site.siteMetadata} title="Home" link={"/"}>
      <main style={{ height: "100%" }} className=" h-full ">
        <RAView />
      </main>
    </Layout>
  );
};

export const query = graphql`
  query HomePageQuery {
    site {
      siteMetadata {
        description
        title
      }
    }
  }
`;

export default IndexPage;
