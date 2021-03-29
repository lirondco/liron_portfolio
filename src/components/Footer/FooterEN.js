import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

export default function FooterEN() {
  return (
    <footer className="footer_EN">
      <Link to="/shhhh" className="secret">
        ©
      </Link>{" "}
      Liron de Castro, 2021. All rights reserved. Find the secret.
    </footer>
  );
}
