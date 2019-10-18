import React from "react";
import { Link } from "react-router-dom";

export default function IndexCategories({ data }) {
  return (
    <div className="index_categories">
      {data.map((item, i) => {
        // TODO ----- should change the div to Link and change some css use --item.link-- for the -to- prop of Link
        return (
          <div
            className="index_categories__card"
            style={{
              backgroundImage: `url('${item.imgSrc}')`
            }}
            key={i}
          />
        );
      })}
    </div>
  );
}
