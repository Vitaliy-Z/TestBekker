import React from "react";
import { finderBlock, finrerTitle } from "./finder.module.css";

export default function FinderBlock({ title, descr }) {
  return (
    <div className={finderBlock}>
      <h3 className={finrerTitle}>{title}</h3>
      <p>{descr}</p>
    </div>
  );
}
