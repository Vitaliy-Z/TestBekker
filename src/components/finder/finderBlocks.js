import React from "react";
import {
  finderBlock,
  finrerTitle,
  finderModal,
  finderModalItem,
} from "./finder.module.css";

export function FinderBlockCountry({ data, filterCountry, setFilterCountry }) {
  const handleChangeCheckbox = (e) => {
    if (e.currentTarget.checked) {
      setFilterCountry([...filterCountry, e.target.value]);
    } else {
      setFilterCountry(filterCountry.filter((i) => i !== e.target.value));
    }
  };
  return (
    <div className={finderBlock}>
      <h3 className={finrerTitle}>Country</h3>
      <p>Where do you want to go?</p>
      <div className={finderModal}>
        <form>
          {data.map((d) => {
            const { country } = d.frontmatter;
            return (
              <label key={d.id} className={finderModalItem}>
                <input
                  value={country}
                  type="checkbox"
                  onChange={handleChangeCheckbox}
                />
                <em> {country}</em>
              </label>
            );
          })}
        </form>
      </div>
    </div>
  );
}

export function FinderBlockPrice({ setFilterPrice }) {
  const price = [100, 200, 300, 400];

  const handleChangeCheckbox = (e) => {
    if (e.currentTarget.checked) {
      setFilterPrice(e.currentTarget.value);
    }
  };
  return (
    <div className={finderBlock}>
      <h3 className={finrerTitle}>Price</h3>
      <p>How much does the trip cost?</p>
      <div className={finderModal}>
        <form>
          {price.map((p) => {
            return (
              <label key={p} className={finderModalItem}>
                <input
                  type="radio"
                  value={p}
                  name="daysRest"
                  onChange={handleChangeCheckbox}
                />
                <em> up to {p} $</em>
              </label>
            );
          })}
        </form>
      </div>
    </div>
  );
}

export function FinderBlockAppraisal({ setFilterAppraisal }) {
  const scores = [1, 2, 3, 4, 5];

  const handleChangeCheckbox = (e) => {
    if (e.currentTarget.checked) {
      setFilterAppraisal(e.currentTarget.value);
    }
  };
  return (
    <div className={finderBlock}>
      <h3 className={finrerTitle}>Appraisal</h3>
      <p>What is the minimum score?</p>
      <div className={finderModal}>
        <form>
          {scores.map((s) => (
            <label key={s} className={finderModalItem}>
              <input
                type="radio"
                value={s}
                name="score"
                onChange={handleChangeCheckbox}
              />
              <em> {s}</em>
            </label>
          ))}
        </form>
      </div>
    </div>
  );
}
