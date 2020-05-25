import React from "react";

const Navbar = ({totalNumberCounters}) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar &nbsp;
        <span className="badge badge-pill badge-secondary">
          {totalNumberCounters}
        </span>
      </a>
    </nav>
  );
};

export default Navbar;
