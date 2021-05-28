import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import FinderBlock from "./finderBlock";
import { finderContainer, finderBtn, finderBtnImg } from "./finder.module.css";

export default function Finder({ data }) {
  return (
    <div className={finderContainer}>
      <FinderBlock
        title="Country"
        descr="Where do you want to go?"
        data={data}
      />
      <FinderBlock
        title="Duration"
        descr="How much time to rest?"
        data={data}
      />
      <FinderBlock
        title="Appraisal"
        descr="What is the minimum score?"
        data={data}
      />

      <button className={finderBtn}>
        <StaticImage
          className={finderBtnImg}
          src="../../images/magnifier.svg"
          alt="search"
        />
      </button>
    </div>
  );
}
