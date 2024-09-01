import React, { useEffect, useState } from "react";
import "./App.css";
import GridCard from "./components/UI/GridCard";
import { Icon } from "@iconify/react";
import ListCard from "./components/UI/ListCard";
import DetailCard from "./components/UI/DetailCard";

function App() {
  const [users, setUsers] = useState<any>([]);
  const [isGridView, setIsGridView] = useState(true);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const url = process.env.REACT_APP_API_URL || "";

    const response = await fetch(url);
    const data = await response.json();
    setUsers(data);
  };

  const toggleView = () => {
    setIsGridView((prev) => !prev);
  };

  const handleUserDetail = (user: any) => {
    console.log("user => ", user);

    setSelectedUser(user);
  };

  const closeModal = () => {
    setSelectedUser(null);
  };

  return (
    <div className="w-full flex flex-col justify-between h-screen ">
      <header className="bg-white w-full border-b border-gray-200">
        <h2 className="flex items-center text-xl h-[70px] px-8">Users</h2>
      </header>
      <main className="py-6 px-8 h-full overflow-y-scroll">
        <div className="flex justify-between items-center gap-3 mb-3">
          <h2 className="text-gray-500">{users.length} Users</h2>
          <div className="flex items-center gap-2">
            <Icon
              icon="entypo:list"
              className={`text-2xl cursor-pointer ${
                isGridView ? "text-gray-400" : "text-primary"
              }`}
              onClick={toggleView}
            />
            <Icon
              icon="mingcute:grid-2-fill"
              className={`text-2xl cursor-pointer ${
                isGridView ? "text-primary" : "text-gray-400"
              }`}
              onClick={toggleView}
            />
          </div>
        </div>
        <div
          className={`${
            isGridView
              ? "grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-5"
              : "flex flex-col gap-3 overflow-x-scroll lg:custom-width"
          }`}
        >
          {users.map((user: any) =>
            isGridView ? (
              <GridCard
                key={user.id}
                user={user}
                handleClick={handleUserDetail}
              />
            ) : (
              <ListCard
                key={user.id}
                user={user}
                handleClick={handleUserDetail}
              />
            )
          )}
        </div>
        {selectedUser && (
          <DetailCard user={selectedUser} closeModal={closeModal} />
        )}
      </main>
    </div>
  );
}

export default App;
