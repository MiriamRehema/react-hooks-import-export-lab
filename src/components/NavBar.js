import React from "react";

function NavBar() {
  return (
    <nav>
      <a href="#home">I'm a link!</a>
      <NavBar/>
    </nav>
  );
}
export default NavBar;