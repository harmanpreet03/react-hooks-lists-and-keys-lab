import React from "react";

function NavBar() {
  const links = [
    { text: "Home", target: "home" },
    { text: "About", target: "about" },
    { text: "Projects", target: "projects" },
  ];

  return (
    <nav>
      <ul>
        {links.map((link) => (
          <li key={link.target}>
            <a href={`#${link.target}`}>{link.text}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;
