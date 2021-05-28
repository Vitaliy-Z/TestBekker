import React from "react";
import { graphql } from "gatsby";

import Container from "../components/container/container";
import Header from "../components/header/header";
import Finder from "../components/finder/finder";
import ListCountries from "../components/main/listCountries";

export default function Home({ data }) {
  const { nodes } = data.allMarkdownRemark;

  return (
    <Container>
      <Header>
        <Finder data={nodes} />
      </Header>
      <ListCountries data={nodes} />
    </Container>
  );
}

export const query = graphql`
  query MainPage {
    allMarkdownRemark {
      nodes {
        frontmatter {
          image {
            childImageSharp {
              gatsbyImageData(
                width: 250
                height: 250
                formats: [AUTO, JPG, WEBP]
                placeholder: BLURRED
              )
            }
          }
          appraisal
          country
          duration
          price
          reviews
          title
          url
        }
        id
      }
    }
  }
`;
