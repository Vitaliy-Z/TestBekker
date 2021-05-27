import React from "react";
import { imgCountry, characteristics } from "./listCountries.module.css";

export default function ItemCountry({ item }) {
  return (
    <>
      <img src={item.img} alt={item.country} className={imgCountry} />
      <div className={characteristics}>
        <h2>{item.country}</h2>
        <h4>Price: {item.price} $</h4>
        <p>{item.descr}</p>
        <h4>Duration: {item.duration} days</h4>
        <h4>Reviews: {item.reviews}</h4>
        <h4>Appraisal: {item.appraisal} / 5</h4>
      </div>
    </>
  );
}
