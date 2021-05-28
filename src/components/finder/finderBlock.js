import React from "react";
import { finderBlock, finrerTitle, finderModal } from "./finder.module.css";

export default function FinderBlock({ title, descr, data }) {
  return (
    <>
      <div className={finderBlock}>
        <h3 className={finrerTitle}>{title}</h3>
        <p>{descr}</p>
        <div className={finderModal}>
          <form>
            {data.map((d) => {
              const { country } = d.frontmatter;
              return (
                <label key={d.id}>
                  {country}
                  <input
                    name={country}
                    type="checkbox"
                    onChange={() => console.log(country)}
                  />
                </label>
              );
            })}
          </form>
        </div>
      </div>
    </>
  );
}
