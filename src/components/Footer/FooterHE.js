import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

export default function FooterHE() {
  return (
    <footer className="footer_HE" lang="he" dir="rtl">
      <Link to="/shhhh" className="secret">
        ©
      </Link>{" "}
      לירון דה קסטרו, 2021. כל הזכויות שמורות. תמצאו את הסוד.
    </footer>
  );
}
