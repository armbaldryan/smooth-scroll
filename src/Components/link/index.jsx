import React from "react";
import { Link } from "react-router-dom";

export default function({ id, children }) {
  return <Link to={`/#${id}`}>{children}</Link>;
}
