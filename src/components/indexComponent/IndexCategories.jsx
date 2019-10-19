import React from "react";
import { Link } from "react-router-dom";

export default function IndexCategories({ data }) {
  return (
    <div className="index__categories">
      <div className="index__categories__title__box">
        <h2>دسته بندی ها</h2>
      </div>
      <div className="index__categories__grid">
        {data.map((item, i) => {
          return (
            <Link className="index__categories__grid__card" key={i}>
              <img src={item.imgSrc} alt="img" />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
