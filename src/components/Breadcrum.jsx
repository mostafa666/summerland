import React from "react";
import { Link } from "react-router-dom";

export default function Breadcrum({ links }) {
  return (
    <div className="breadcrum">
      {links.map(link => {
        return (
          <Link to={link.href} className="breadcrum__link">
            {link.text}
          </Link>
        );
      })}
    </div>
  );
}
