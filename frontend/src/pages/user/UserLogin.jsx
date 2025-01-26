import React, { useState } from "react";
import { Link } from "react-router-dom";

const UserLogin = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setData({})
  };
  return (
    <div className="max-w-xl  h-screen mx-auto p-3 flex flex-col justify-between bg-gray-100">
      <div className="p-4">
        <h1 className="text-3xl font-bold font-robot">Uber</h1>
        <form onSubmit={handleSubmit} className="mt-8">
          <div className="flex flex-col gap-2 my-4">
            <label className="font-medium">What's your email</label>
            <input
              type="email"
              required
              name="email"
              value={data.email}
              onChange={(e) => {
                handleChange(e);
              }}
              placeholder="email@example.com"
              className="border border-slate-300 p-1 m-1 rounded focus:outline-yellow-200"
            />
          </div>
          <div className="flex flex-col gap-2 my-4">
            <label className="font-medium">Create a password</label>
            <input
              type="password"
              required
              name="password"
              value={data.password}
              onChange={handleChange}
              placeholder="*******"
              className="border border-slate-300 p-1 m-1 rounded focus:outline-yellow-200"
            />
          </div>
          <button className="w-full cursor-pointer bg-black text-white px-16 py-2 rounded">
            Login
          </button>
          <p className="text-center py-1">
            New here?
            <Link to={"/signUp"} className="text-blue-500">
              {" "}
              Create new Account
            </Link>
          </p>
        </form>
      </div>
      <div className="pb-4 w-full">
        <Link
          to={"/captian-login"}
          className="inline-block text-center w-full bg-green-400 text-white px-16 py-2 rounded"
        >
          Sign in as Captian
        </Link>
      </div>
    </div>
  );
};

export default UserLogin;
