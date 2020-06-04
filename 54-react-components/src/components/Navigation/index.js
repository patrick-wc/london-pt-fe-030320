import React from "react";

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul>
        <li>
          <a href="home.html" className="home">
            Home
          </a>
        </li>
        <li>
          <a href="about.html" className="about">
            About
          </a>
        </li>
        <li>
          <a href="contact.html" className="contact">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
