import React, { useContext } from "react";
import { stateContext } from "../Context/StateContextProvider";

function Navbar() {
  const { setQuery, query, setPageNumber } = useContext(stateContext);
  return (
    <div
      className="w-full sticky bg-white  top-0 left-0  z-20 shadow-md "
      style={{ backgroundColor: "#0B0010" }}
    >
      <div className="flex px-4 sm:px-8 sm:mx-auto items-center justify-center   w-full  py-3">
        <button
          onClick={() => {
            setQuery("");
            setPageNumber(1);
          }}
          className="text-2xl lg:text-5xl font-bold "
          style={{ color: "white" }}
        >
          IMAGE GENERATOR
        </button>
      </div>
    </div>
  );
}

export default Navbar;
