import React from "react";
import { Link } from "react-router-dom";

export default function Banner({ banner }) {
  return (
    <div
      className="banner"
      style={{ backgroundImage: `url('${banner.srcImg}')` }}
    >
      <Link className="banner__link" to={banner.link} />
    </div>
  );
}
