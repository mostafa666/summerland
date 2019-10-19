import React from "react";

export default function IndexCard({ discount, img }) {
  return (
    <div className="index_card" style={{ backgroundImage: `url('${img}')` }}>
      <div className="index_card__content_holder">
        <h2>تخفیف استثنایی تا </h2>
        <h1>
          <span>%</span>
          {discount}
        </h1>
      </div>
    </div>
  );
}
