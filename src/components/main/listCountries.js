import React from "react";

import ItemCountry from "./itemCountry";
import { listCountry, itemCountry } from "./listCountries.module.css";

export default function ListCountries({ data }) {
  return (
    <ul className={listCountry}>
      {data.map((travel) => (
        <li key={travel.id} className={itemCountry}>
          <ItemCountry item={travel} />
        </li>
      ))}
    </ul>
  );
}
