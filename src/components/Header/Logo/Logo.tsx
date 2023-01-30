import React from "react";
import { NavLink } from "react-router-dom";

const Logo: React.FC = () => (
  <div>
    <NavLink to="/">
      <img alt="Logo" src="images/logo_img.png" />
    </NavLink>
  </div>
);

export { Logo };
