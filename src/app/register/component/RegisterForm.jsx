"use client";

import { registerUser } from "@/app/action/auth/registerUser";



export default function RegisterForm() {
    const handleSubmit = async(e)=>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        registerUser({name, email, password})
    }
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">Create Your Account</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input
              type="text"
              placeholder="User Name"
              className="input input-bordered w-full"
              name="name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter Your E-mail"
              className="input input-bordered w-full"
              name="email"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              placeholder="Enter password"
              className="input input-bordered w-full"
              name="password"
            />
          </div>
          <button
            type="submit"
            className="btn btn-info w-full font-semibold"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
