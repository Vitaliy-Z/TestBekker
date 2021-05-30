import React from "react";
import { graphql } from "gatsby";

import Container from "../components/container/container";
import Header from "../components/header/header";
import Finder from "../components/finder/finder";
import ListCountries from "../components/main/listCountries";

export default function Home({ data }) {
  const { nodes } = data.allMarkdownRemark;

  const [filterCountry, setFilterCountry] = React.useState([]);
  const [filterPrice, setFilterPrice] = React.useState("");
  const [filterAppraisal, setFilterAppraisal] = React.useState("");

  const filter = (
    allCountries,
    countryFilter,
    priceFilter,
    appraisalFilter
  ) => {
    if (
      countryFilter.length === 0 &&
      priceFilter === "" &&
      appraisalFilter === ""
    ) {
      return allCountries;
    } else {
      if (countryFilter.length !== 0) {
        return allCountries.filter((c) => {
          const { country } = c.frontmatter;
          return countryFilter.includes(country);
        });
      }
      if (priceFilter !== "") {
        return allCountries.filter((c) => {
          const { price } = c.frontmatter;
          return Number(price) <= Number(priceFilter);
        });
      }
      if (appraisalFilter !== "") {
        return allCountries.filter((c) => {
          const { appraisal } = c.frontmatter;
          return Number(appraisal) >= Number(appraisalFilter);
        });
      }
    }
  };
  const travels = filter(nodes, filterCountry, filterPrice, filterAppraisal);

  return (
    <Container>
      <Header>
        <Finder
          data={nodes}
          filterCountry={filterCountry}
          setFilterCountry={setFilterCountry}
          setFilterAppraisal={setFilterAppraisal}
          setFilterPrice={setFilterPrice}
        />
      </Header>
      <ListCountries data={travels} />
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
