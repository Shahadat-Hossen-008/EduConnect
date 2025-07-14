import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  const li = (
    <>
      <li>
        <Link href={"/"}>Home</Link>
      </li>
      <li>
        <Link href={"/"}>College</Link>
      </li>
      <li>
        <Link href={"/"}>Admission</Link>
      </li>
      <li>
        <Link href={"/"}>My College</Link>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm sticky top-0 z-50">
      <div className="w-11/12 mx-auto flex justify-between items-center">
        <div className="navbar-start">
          <div className="flex items-center justify-center">
            <Image
              src="/asset/logo.jpg"
              alt="Logo"
              width={40}
              height={40}
              className="mr-1"
            />
            <h2 className="text-xl font-semibold ">EduConnect</h2>
          </div>
        </div>
        <div className="navbar-end">
          <ul className="menu menu-horizontal px-1 hidden lg:flex">{li}</ul>
          <a className="btn">Button</a>
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {li}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
