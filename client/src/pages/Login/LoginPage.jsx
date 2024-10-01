import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  async function submitHandler(e) {
    e.preventDefault();
    const data = {
      email,
      password,
    };
    const value = "";
    try {
      const user = await axios
        .post("http://localhost:5000/admin/login", data)
        .then((result) => {
          if (result.data == "Logged") navigate("/AdminPage");
          else alert("Wrong Credintials");
        })
        .catch((err) => console.log(err));
    } catch (err) {
      console.log(err);
    }
  }

  return (

      <div className="main bg-white rounded-lg shadow-md p-10 transition-transform w-96 text-center ml-80">
        <h1 className="text-green-600 text-3xl">LibLinx</h1>
        <h3 className="text-lg">Enter your login credentials</h3>
        <form>
          <label className="block mt-4 mb-2 text-left text-gray-700 font-bold">
            Email:
          </label>
          <input
            type="text"
            name="first"
            placeholder="Enter your Username"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="block w-full mb-6 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-400"
            required
          />

          <label className="block mb-2 text-left text-gray-700 font-bold">
            Password:
          </label>
          <input
            type="password"
            name="password"
            placeholder="Enter your Password"
            onChange={(e) => {
              setPass(e.target.value);
            }}
            className="block w-full mb-6 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-400"
            required
          />
          <div className="flex justify-center items-center">
            <button
              type="submit"
              onClick={submitHandler}
              className="bg-green-600 text-white py-3 px-6 rounded-md cursor-pointer transition-colors duration-300 hover:bg-green-500"
            >
              Submit
            </button>
          </div>
          <p className="mt-4">
            Not registered?
            <a
              onClick={() => navigate("/SigninPage")}
              className="text-blue-500 hover:underline"
            >
              Create an account
            </a>
          </p>
        </form>
      </div>

  );
};
