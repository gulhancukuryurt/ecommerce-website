"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "../img/logo.png";
import {
  FaRegHeart,
  FaRegUser,
  FaShoppingCart,
  FaAlignJustify,
} from "react-icons/fa";

function Navbar() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
    console.log(open);
  };
  return (
    <div>
      <nav className="bg-white border-gray-200 dark:bg-gray-900 max-lg:hidden ">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <a href="#" className="flex items-center">
            <Image
              src={logo}
              width={100}
              height={400}
              className="mr-3 h-20"
              alt="Logo"
            />
          </a>
          <form>
            <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-96 p-3 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-purple-500  dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
                placeholder="Search for product..."
                required
              />
              <button
                type="submit"
                className="text-white absolute right-2.5 bottom-1 bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
              >
                Search
              </button>
            </div>
          </form>
          <div className="flex flex-row flex-wrap justify-between align-top">
            <span className="inline-block absolute top-8 w-4 h-4 text-xs rounded-full text-center text-white bg-red-700">
              0
            </span>{" "}
            <FaRegHeart className="fill-red-700 text-xl m-3 hover:fill-red-900" />
            <FaRegUser className="fill-black-700 text-xl m-3 -mr-1 hover:fill-black-900" />
            <span className="inline-block relative -top-1 left-8 rounded-full text-center w-4 h-4 text-xs text-white bg-purple-700 ">
              0
            </span>{" "}
            <FaShoppingCart className="fill-purple-700 text-xl m-3 hover:fill-purple-900" />
          </div>
        </div>
      </nav>
      <nav className="bg-gray-50 dark:bg-gray-700  max-lg:hidden">
        <div className="max-w-screen-xl px-4 py-3 mx-auto">
          <div className="flex items-center justify-center">
            <div className="relative inline-block">
              <button
                id="dropdownDefaultButton"
                onClick={handleOpen}
                data-dropdown-toggle="dropdown"
                className="text-white mr-12 -ml-40 bg-purple-600 hover:bg-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-purple-600 dark:hover:bg-purple-700"
                type="button"
              >
                <FaAlignJustify className="text-md mr-4" /> All Categories
                <svg
                  className="w-2.5 h-2.5 ml-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              {open && (
                <div
                  id="dropdown"
                  className="z-10 flex absolute top-12 -ml-40 bg-white divide-y divide-gray-100 rounded-lg shadow w-100 p-2 dark:bg-gray-700"
                >
                  <ul
                    className="py-2 text-sm  text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownDefaultButton"
                  >
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2  hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Dashboard
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Settings
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Earnings
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Sign out
                      </a>
                    </li>
                  </ul>
                </div>
              )}{" "}
            </div>
            <ul className="flex flex-row font-medium mt-0 mr-6 space-x-8 text-sm text-center">
              <li>
                <a
                  href="#"
                  className="text-purple-900 dark:text-white hover:border-b-4 hover:text-purple-700 pr-2 "
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-purple-900 dark:text-white hover:border-b-4 hover:text-purple-700 pr-2"
                >
                  Shop
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-purple-900 dark:text-white hover:border-b-4 hover:text-purple-700 pr-2"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-purple-900 dark:text-white hover:border-b-4 hover:text-purple-700 pr-2"
                >
                  Contact
                </a>
              </li>
            </ul>
            </div>
           
          </div>
        
      </nav>

      <nav className="2xl:hidden xl:hidden lg:hidden border-gray-200 bg-white-50 dark:bg-white-800 dark:border-white-700">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="#" className="flex items-center">
            <Image
              src={logo}
              width={100}
              height={400}
              className="mr-3 h-20"
              alt="Logo"
            />
          </a>
          <div className="flex flex-row flex-wrap justify-between align-top">
            <span className="inline-block absolute top-8 w-4 h-4 text-xs rounded-full text-center text-white bg-red-700">
              0
            </span>
            <FaRegHeart className="fill-red-700 text-xl m-3 hover:fill-red-900" />
            <FaRegUser className="fill-black-700 text-xl m-3 hover:fill-black-900" />
            <span className="inline-block relative -top-1 left-8 rounded-full text-center w-4 h-4 text-xs text-white bg-purple-700 ">
              0
            </span>{" "}
            <FaShoppingCart className="fill-purple-700 text-xl m-3 hover:fill-purple-900" />
          </div>
          <button
            onClick={handleOpen}
            data-collapse-toggle="navbar-hamburger"
            type="button"
            className="inline-flex items-center justify-center p-2 w-10 h-10 ml-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-hamburger"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          {open && (
            <div className="w-full" id="navbar-hamburger">
              <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                <li>
                  <a
                    href="#"
                    className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded dark:bg-blue-600"
                    aria-current="page"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    Shop
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
