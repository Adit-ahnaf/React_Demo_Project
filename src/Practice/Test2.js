import React from "react";
import { useState, useEffect } from "react";
import { Redirect, useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Test2 = (props) => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    const result = await axios.get(
      "https://my-json-server.typicode.com/istiak227/blog-server/blogs"
    );
    console.log(result);
    setUser(result.data);
  };

  const LogOut = () => {
    localStorage.removeItem("user-Info");
    // add a redirect after logout
    window.location.href = "/";
  };

  return (
    <div>
      <button
        class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        onClick={() => {
          LogOut();
        }}
        type="button"
      >
        Log Out
      </button>
      {users.map((user) => (
        <div class="text-justify p-5 mx-60">
          <Link
            class="text-4xl text-red-500 font-extrabold"
            to={{
              pathname: "/details/description",
              state: user,
            }}
          >
            {user.title}
          </Link>
          <h4 class="text-blue-800 font-medium">{user.date}</h4>
          <br></br>
          <h3>{user.subtitle}</h3>
        </div>
      ))}
    </div>
  );
};

export default Test2;
