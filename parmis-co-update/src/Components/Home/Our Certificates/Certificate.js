import React from "react";

function Certificate(p) {
  return (
    <div>
        <li
          style={{
            listStyle: "none",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            src={p.image}
            alt="certif"
            style={{
              width: "200px",
              margin: "10px",
            }}
          />
          <span>گواهینامه EPCS</span>
        </li>
    </div>
  );
}

export default Certificate;
