//* Packages Imports */
import React from "react";
import { Mail, Phone, Earth, Trash2, Pencil, Heart } from "lucide-react";

const UserProfile = ({ user, onLike, onDelete, onEdit }) => {
  const avatarUrl = `https://api.dicebear.com/8.x/avataaars/svg?seed=${user.username.split(".")[0]}`;

  return (
    <div className="w-full md:w-[300px] border rounded flex flex-col items-left px-2 py-2">
      <div className="w-full flex justify-center items-center bg-[#f5f5f5]">
        <img
          src={avatarUrl}
          alt={user.username}
          className="w-[50%] h-[100%] rounded-full mb-4 b"
        />
      </div>
      <div className="text-left flex flex-col gap-2 mt-4 ml-2">
        <h2 className="text-l font-bold">{user.name}</h2>
        <p>
          <Mail className="inline-block mr-2 w-4" />
          {user.email}
        </p>
        <p>
          <Phone className="inline-block mr-2 w-4" />
          {user.phone}
        </p>
        <p>
          <Earth className="inline-block mr-2 w-4" />
          <a href={user.website} target="_blank" rel="noreferrer">
            {user.website}
          </a>
        </p>
      </div>
      <div className="flex space-x-2 mt-4 justify-evenly items-center w-full">
        <button onClick={() => onLike(user.id)}>
          {user.liked ? (
            <Heart className="w-5 h-5 text-red-600" fill="red" />
          ) : (
            <Heart className="w-5 h-5 text-red-600" />
          )}
        </button>
        <button onClick={() => onEdit(user)} className="text-blue-500">
          <Pencil className="w-5 h-5 text-gray-600" />
        </button>
        <button onClick={() => onDelete(user.id)} className="text-gray-500">
          <Trash2 className="w-5 h-5 text-blue-600" />
        </button>
      </div>
    </div>
  );
};

export default UserProfile;
