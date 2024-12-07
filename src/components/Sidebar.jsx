import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <nav className="sidebar">
      <ul>
        <li>
          <Link to="/">User Management</Link>
        </li>
        <li>
          <Link to="/roles">Role Management</Link>
        </li>
        <li>
          <Link to="/permissions">Permissions Management</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
