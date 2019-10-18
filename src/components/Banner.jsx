import React from "react";
import { Link } from "react-router-dom";

export default function Banner({ banner }) {
  console.log(banner);
  return (
    <Link
      to={banner.link}
      className="banner"
      style={{ backgroundImage: `url('${banner.srcImg}')` }}
    />
  );
}
