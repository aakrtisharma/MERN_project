import React, { useContext } from "react";
import { stateContext } from "../Context/StateContextProvider";

function SearchBox() {
  const { query, setQuery, setPageNumber } = useContext(stateContext);

  return (
    <div className=" text-center h-[250px] sm:h-[350px] lg:h-[650px]  w-full relative">
      <img
        className={` w-full h-full object-center  lg:object-left object-cover  `}
        src="https://images.unsplash.com/photo-1606054512716-fb198b6686c9?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Image"
      />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 text-white -translate-y-1/2 flex gap-3 w-full items-center  flex-col">
        <div className="mb-1 text-2xl md:text-4xl lg:text-5xl font-bold ">
          Generate Images
        </div>
        <div className=" text-sm md:text-base">
          Transform Your Ideas into Stunning Visuals with Our AI Image
          Generator!
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setQuery(e.target[0].value);

            query != e.target[0].value && setPageNumber(1);
          }}
          className="border border-gray-300 gap-2 rounded-md bg-white sm:w-[600px] lg:w-[800px] px-3 py-2 w-[275px]   md:px-6  md:py-4 flex "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-gray-300 "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>

          <input
            type="text"
            placeholder="Enter here to Generate Images"
            className="placeholder:text-gray-300 text-black  w-full outline-none placeholder:text-base "
          />
        </form>
      </div>
    </div>
  );
}

export default SearchBox;
