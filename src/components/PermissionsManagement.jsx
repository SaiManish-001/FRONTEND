import React, { useState } from "react";
import "./PermissionsManagement.css";

const PermissionsManagement = () => {
  const [permissions, setPermissions] = useState([
    { name: "Read", description: "Allows reading data." },
    { name: "Write", description: "Allows creating or updating data." },
    { name: "Delete", description: "Allows deleting data." },
    { name: "Execute", description: "Allows executing specific actions or tasks." },
  ]);
  const [newPermission, setNewPermission] = useState({ name: "", description: "" });

  const handleAddPermission = () => {
    if (newPermission.name && newPermission.description) {
      setPermissions([...permissions, newPermission]);
      setNewPermission({ name: "", description: "" }); // Reset the form
      alert("New permission added successfully!");
    } else {
      alert("Please enter both permission name and description.");
    }
  };

  return (
    <div className="permissions-management">
      <h2>Permissions Management</h2>
      <div className="permissions-table-container">
        <table className="permissions-table">
          <thead>
            <tr>
              <th>Permission</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {permissions.map((permission, index) => (
              <tr key={index}>
                <td>{permission.name}</td>
                <td>{permission.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="add-permission">
        <h3>Add New Permission</h3>
        <input
          type="text"
          placeholder="Permission Name"
          value={newPermission.name}
          onChange={(e) => setNewPermission({ ...newPermission, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Permission Description"
          value={newPermission.description}
          onChange={(e) => setNewPermission({ ...newPermission, description: e.target.value })}
        />
        <button className="add-btn" onClick={handleAddPermission}>
          Add Permission
        </button>
      </div>
    </div>
  );
};

export default PermissionsManagement;
