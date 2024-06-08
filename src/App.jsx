// src/App.js
import React from "react";
import UserList from "./components/UserList";

const App = () => {
  return (
    <div className="App">
      <header className="bg-blue-500 text-white p-4">
        <h1 className="text-3xl">User Profiles</h1>
      </header>
      <main className="p-4">
        <UserList />
      </main>
    </div>
  );
};

export default App;
