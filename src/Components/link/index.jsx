import React from "react";
import { Link } from "react-router-dom";

export default function({ id, name }) {
  return <Link to={`/#${id}`}>{name}</Link>;
}
