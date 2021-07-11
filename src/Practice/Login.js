import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Login = () => {
  const history = useHistory();

  const [users, setUser] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      history.push("/");
    }
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8000/login", users).then((response) => {
      console.log(response);
      localStorage.setItem(
        "user-Info",
        JSON.stringify(response.data.access_token)
      );
      // add a redirect after login
      window.location.href = "/"
    })
    .catch(err => console.log(err));
  };

  const onInputChange = (e) => {
    setUser({ ...users, [e.target.name]: e.target.value });
  };

  const { email, password } = users;
  return (
    <div class="w-full max-w-xs p-6  ">
      <form
        onSubmit={(e) => onSubmit(e)}
        class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
            Email
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="email"
            value={email}
            onChange={(e) => onInputChange(e)}
            id="email"
            type="email"
            placeholder="email"
          ></input>
          <div class="mb-6">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="password"
            >
              Password
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="password"
              value={password}
              onChange={(e) => onInputChange(e)}
              id="password"
              type="password"
              placeholder="******************"
            />
          </div>
          <div class="flex items-center justify-between">
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign In
            </button>
            <a
              class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              href="/sighnup"
            >
              sighn up
            </a>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
