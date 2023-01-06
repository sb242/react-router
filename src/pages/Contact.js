import React from "react";
import { useLocation } from "react-router-dom";

export default function Contact() {
  const queryString = useLocation().search;
  console.log(queryString);

  const queryParams = new URLSearchParams(queryString);
  const name = queryParams.get("name");

  return (
    <div>
      <h2>Contact</h2>
      <p>
        Irure ullamco aliqua consequat adipisicing. Duis sunt qui do cupidatat
        nisi commodo enim. Ullamco et aliqua Lorem do enim quis elit laborum
        reprehenderit deserunt dolor enim proident aliquip.
      </p>
    </div>
  );
}
