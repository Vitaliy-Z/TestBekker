import React from "react";
import {
  FinderBlockCountry,
  FinderBlockPrice,
  FinderBlockAppraisal,
} from "./finderBlocks";
import { finderContainer } from "./finder.module.css";

export default function Finder({
  data,
  filterCountry,
  setFilterCountry,
  setFilterAppraisal,
  setFilterPrice,
}) {
  return (
    <div className={finderContainer}>
      <FinderBlockCountry
        data={data}
        filterCountry={filterCountry}
        setFilterCountry={setFilterCountry}
      />
      <FinderBlockPrice setFilterPrice={setFilterPrice} />
      <FinderBlockAppraisal setFilterAppraisal={setFilterAppraisal} />
    </div>
  );
}
