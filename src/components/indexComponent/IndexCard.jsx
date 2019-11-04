import React from "react";
import { Link } from "react-router-dom";

export default function IndexCard({ discount, img, link }) {
  return (
    <div className="index_card" style={{ backgroundImage: `url('${img}')` }}>
      <Link to={link} className="index_card__content_holder">
        <h2>تخفیف استثنایی تا </h2>
        <h1>
          <span>%</span>
          {discount}
        </h1>
      </Link>
    </div>
  );
}
