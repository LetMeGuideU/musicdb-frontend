import React from "react";
import footerLogo from "../assists/logo white-01.png";
export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-logo">
          <img src={footerLogo} alt="MUSICDB" />
        </div>
        <div className="footer-links">
          <ul>
            <li>
              <a href="/">profile</a>
            </li>
            <li>
              <a href="/">sign in</a>
            </li>
            <li>
              <a href="/">music</a>
            </li>
          </ul>
        </div>
        <div className="copyrights">
          <div className="footer-nav">
            <ul>
              <li>
                <a href="/">legal</a>
              </li>
              <li>
                <a href="/">privacy center</a>
              </li>
              <li>
                <a href="/">privacy policy</a>
              </li>
              <li>
                <a href="/">cookies</a>
              </li>
              <li>
                <a href="/">about ads</a>
              </li>
            </ul>
          </div>
          <div>
            <p>&copy; 2019 MUSICDB</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
