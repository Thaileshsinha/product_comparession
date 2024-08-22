import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FiUser, FiMap } from "react-icons/fi";

const Sidebar = () => {
  const data = [
    {
      path: "/",
      name: "Product Details",
      icon: <FiUser className="mr-2" />,
    },
    {
      path: "/product-compare",
      name: "Product Compare",
      icon: <FiMap className="mr-2" />,
    },
  ];

  const location = useLocation();

  return (
    <div className="bg-white p-4 rounded-[20px] w-[250px] mt-[60px] h-[600px] fixed top-[80px] left-[20px] shadow-lg hidden md:block">
      <h2 className="text-xl font-bold mb-4 text-center">Menu</h2>
      <div className="flex flex-col space-y-4">
        {data.map((e) => (
          <Link to={e.path} key={e.name}>
            <div
              className={`flex items-center p-3 rounded-lg transition-all duration-300 ${
                location.pathname === e.path
                  ? "bg-black text-white shadow-md"
                  : "hover:bg-gray-100"
              }`}
            >
              {e.icon}
              <h1 className="text-[18px] font-bold">{e.name}</h1>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
