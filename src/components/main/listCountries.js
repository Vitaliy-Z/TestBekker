import React from "react";
// import { GatsbyImage, getImage } from "gatsby-plugin-image";
import ItemCountry from "./itemCountry";
import { listCountry, itemCountry } from "./listCountries.module.css";

export default function ListCountries({ data }) {
  // console.log(data);
  return (
    <ul className={listCountry}>
      {data.map((item) => (
        <li key={item.node.id} className={itemCountry}>
          <ItemCountry item={item.node} />
        </li>
      ))}
    </ul>
  );
}
