import React, { useState } from "react";
import { Link } from "react-router-dom";

const UserSignUp = () => {
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(data);
    setData({});
  };
  return (
    <div className="max-w-xl h-screen mx-auto p-3 flex flex-col justify-between bg-gray-100">
      <div className="p-4">
        <h1 className="text-3xl font-bold font-robot">Uber</h1>
        <form onSubmit={handleSubmit} className="mt-8">
          <div className="flex flex-col gap-2 my-4">
            <label className="font-medium">What's your name</label>
            <div className="grid grid-cols-2 gap-1">
              <input
                type="text"
                required
                name="firstname"
                value={data.firstname}
                onChange={handleChange}
                placeholder="firstname"
                className="border border-slate-300 p-1 m-1 rounded focus:outline-yellow-200"
              />
              <input
                type="text"
                required
                name="lastname"
                value={data.lastname}
                onChange={handleChange}
                placeholder="lastname"
                className="border border-slate-300 p-1 m-1 rounded focus:outline-yellow-200"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 my-4">
            <label className="font-medium">What's your email</label>
            <input
              type="email"
              required
              name="email"
              value={data.email}
              onChange={handleChange}
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
              placeholder="********"
              className="border border-slate-300 p-1 m-1 rounded focus:outline-yellow-200"
            />
          </div>
          <button className="w-full cursor-pointer bg-black text-white px-16 py-2 rounded">
            Sign Up
          </button>
          <p className="text-center py-1">
            Already have an account?{" "}
            <Link to={"/login"} className="text-blue-500">
              Login
            </Link>
          </p>
        </form>
      </div>
      <div className="pb-4 w-full">
        <Link
          to={"/captian-login"}
          className="inline-block text-center w-full bg-green-400 text-white px-16 py-2 rounded"
        >
          Sign in as Captain
        </Link>
      </div>
    </div>
  );
};

export default UserSignUp;
