import * as React from "react";
export default function CricketerItem({ item }) {
  return (
    <>
      <li>
        <a href={`#${item.cric_id}`}></a>
      </li>
    </>
  );
}
