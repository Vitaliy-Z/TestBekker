import React from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import { imgCountry, characteristics } from "./listCountries.module.css";

export default function ItemCountry({ item }) {
  const { url, title, reviews, price, duration, country, appraisal, image } =
    item.frontmatter;
  const img = getImage(image);

  return (
    <>
      <Link to={`/${url}`} key={item.id}>
        <GatsbyImage image={img} alt={country} className={imgCountry} />
      </Link>
      <div className={characteristics}>
        <h2>{title}</h2>
        <h4>Price: {price} $</h4>
        <h4>Duration: {duration} days</h4>
        <h4>Reviews: {reviews}</h4>
        <h4>Appraisal: {appraisal} / 5</h4>
      </div>
    </>
  );
}
