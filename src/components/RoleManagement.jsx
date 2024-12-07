import React, { useState, useEffect } from "react";
import "./RoleManagement.css";

const RoleManagement = () => {
  const [roles, setRoles] = useState([]);
  const [newRole, setNewRole] = useState({ name: "", permissions: [] });
  const [permissions] = useState(["Read", "Write", "Delete", "Execute"]);
  const [editingRoleId, setEditingRoleId] = useState(null);

  useEffect(() => {
    const storedRoles = JSON.parse(localStorage.getItem("roles")) || [];
    setRoles(storedRoles);
  }, []);

  const handleAddOrUpdateRole = () => {
    if (editingRoleId !== null) {
      // Update existing role
      const updatedRoles = roles.map((role) =>
        role.id === editingRoleId ? { ...role, ...newRole } : role
      );
      setRoles(updatedRoles);
      localStorage.setItem("roles", JSON.stringify(updatedRoles));
      setEditingRoleId(null);
    } else {
      // Add new role
      const updatedRoles = [...roles, { id: Date.now(), ...newRole }];
      setRoles(updatedRoles);
      localStorage.setItem("roles", JSON.stringify(updatedRoles));
    }
    setNewRole({ name: "", permissions: [] });
  };

  const handleEditRole = (role) => {
    setNewRole({ name: role.name, permissions: role.permissions });
    setEditingRoleId(role.id);
  };

  const handleDeleteRole = (id) => {
    const updatedRoles = roles.filter((role) => role.id !== id);
    setRoles(updatedRoles);
    localStorage.setItem("roles", JSON.stringify(updatedRoles));
  };

  const handlePermissionToggle = (permission) => {
    const updatedPermissions = newRole.permissions.includes(permission)
      ? newRole.permissions.filter((p) => p !== permission)
      : [...newRole.permissions, permission];
    setNewRole({ ...newRole, permissions: updatedPermissions });
  };

  return (
    <div className="role-management">
      <h2>Role Management</h2>
      <div className="add-role">
        <input
          type="text"
          placeholder="Role Name"
          value={newRole.name}
          onChange={(e) => setNewRole({ ...newRole, name: e.target.value })}
        />
        <div className="permissions-checkboxes">
          {permissions.map((permission) => (
            <label key={permission}>
              <input
                type="checkbox"
                checked={newRole.permissions.includes(permission)}
                onChange={() => handlePermissionToggle(permission)}
              />
              {permission}
            </label>
          ))}
        </div>
        <button onClick={handleAddOrUpdateRole}>
          {editingRoleId !== null ? "Update Role" : "Add Role"}
        </button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Role Name</th>
            <th>Permissions</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {roles.map((role) => (
            <tr key={role.id}>
              <td>{role.name}</td>
              <td>{role.permissions.join(", ") || "No Permissions"}</td>
              <td>
                <button onClick={() => handleEditRole(role)}>Edit</button>
                <button onClick={() => handleDeleteRole(role.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RoleManagement;
 