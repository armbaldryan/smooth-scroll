import React from "react";

export default function Section({ title, subtitle, id }) {
  return (
    <div className="section-dark">
      <div className="section-content" id={id}>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </div>
  );
}
