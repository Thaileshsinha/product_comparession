import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { Route, Routes } from "react-router-dom";
import ProductDetails from "./pages/ProductDetails";
import ProductCompare from "./pages/ProductCompare";

const App = () => {
  return (
    <>
      {/* <div className="bg-[#F6F7F8] w-full min-h-screen relative"> */}
      <div>
        <Navbar />
        <div className="flex">
          <Sidebar />
          <div className="flex-grow p-4   md:ml-[220px] ">
            <Routes>
              <Route path="/" element={<ProductDetails />} />
              <Route path="/product-compare" element={<ProductCompare />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
};
export default App;
