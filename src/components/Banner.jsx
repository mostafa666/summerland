import React from "react";
import { Link } from "react-router-dom";

export default function Banner({ banner }) {
  return (
    <Link className="banner__link" to={banner.link}>
      <img src={banner.srcImg} alt="img" />
    </Link>
  );
}
