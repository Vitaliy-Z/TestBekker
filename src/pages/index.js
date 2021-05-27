import React from "react";
import { graphql } from "gatsby";

import Container from "../components/container/container";
import Header from "../components/header/header";
import Finder from "../components/finder/finder";
import ListCountries from "../components/main/listCountries";

export default function Home({ data }) {
  return (
    <Container>
      <Header>
        <Finder />
      </Header>
      <ListCountries data={data.allDbJson.edges} />
    </Container>
  );
}

export const query = graphql`
  query MyQuery {
    allDbJson {
      edges {
        node {
          id
          appraisal
          country
          descr
          duration
          img
          price
          reviews
        }
      }
    }
  }
`;
