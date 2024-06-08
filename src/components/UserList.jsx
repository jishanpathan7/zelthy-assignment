//* Packages Imports */
import React, { useEffect, useState } from "react";

//* Components Imports */
import UserProfile from "./UserProfile";
import EditModal from "./EditModal";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingUser, setEditingUser] = useState(null);

// Like function handler
  const handleLike = (id) => {
    setUsers(
      users.map((user) =>
        user.id === id ? { ...user, liked: !user.liked } : user
      )
    );
  };

  // Delete function handler
  const handleDelete = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  // Edit function handler
  const handleEdit = (user) => {
    setEditingUser(user);
  };

  // Edit save function handler
  const handleEditSave = (updatedUser) => {
    setUsers(
      users.map((user) => (user.id === updatedUser.id ? updatedUser : user))
    );
    setEditingUser(null);
  };

  // Fetch users data from API
  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();
        setUsers(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching users:", error);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
      {users.map((user) => (
        <UserProfile
          key={user.id}
          user={user}
          onLike={handleLike}
          onDelete={handleDelete}
          onEdit={handleEdit}
        />
      ))}
      {editingUser && (
        <EditModal
          user={editingUser}
          onSave={handleEditSave}
          onClose={() => setEditingUser(null)}
        />
      )}
    </div>
  );
};

export default UserList;