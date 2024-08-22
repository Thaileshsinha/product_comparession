import React from "react";
import profile from "../assets/profile-pic.png";

const Navbar = () => {
  return (
    <>
      <div className="m-4 px-7 py-3 shadow-md rounded-[30px] ">
        <div className="flex justify-between">
          <div className="rounded-[50px]">
            <img
              src="https://media.licdn.com/dms/image/v2/C4E0BAQGcVrrq-ViByw/company-logo_200_200/company-logo_200_200/0/1630589411275/kychub_logo?e=2147483647&v=beta&t=HQ9RhTASRR2ejfsVQ9oEYFbZHaQZbON_asxbHo77vaI"
              width="50px"
              alt="logo"
            />
          </div>
          <div className="flex justify-between items-center">
            <img src={profile} width="50px" alt="profile" />
            <div className="ml-3">
              <b>Thailesh Sinha</b>
              <p>+91 7224942677</p>
            </div>
            <button
              //   onClick={toggleMenu}
              data-collapse-toggle="navbar-default"
              type="button"
              className=" ml-2 inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-default"
              //   aria-expanded={isOpen}
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
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
