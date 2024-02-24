import React, { useEffect, useRef } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { fetchBackgroundAsync } from "../Store/backgroundChangerSlice";
import {
  fetchGallerySearchAsync,
  searchInput,
} from "../Store/gallerySearchSlice";

function BannerSection() {
  const inputElement = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBackgroundAsync("nature"));
  }, []);

  const valueData = useSelector(
    (state) => state.backgroundChanger.values.photos
  );

  // Check if valueData is undefined
  if (!valueData) {
    return <div></div>;
  }
  const valuelink =
    valueData[Math.floor(Math.random() * (15 - 0) + 0)].src.original;

  // search method

  const handelOnKeyDown = (event) => {
    if (inputElement.current.value === "") {
    } else if (event.key === "Enter") {
      dispatch(
        fetchGallerySearchAsync({ value: inputElement.current.value, page: 1 })
      );
      dispatch(searchInput(inputElement.current.value));
      inputElement.current.value = "";
    }
  };

  const handelOnClick = () => {
    if (inputElement.current.value === "") {
    } else {
      dispatch(
        fetchGallerySearchAsync({ value: inputElement.current.value, page: 1 })
      );
      dispatch(searchInput(inputElement.current.value));
      inputElement.current.value = "";
    }
  };

  return (
    <div
      className="bg-cover bg-no-repeat bg-center "
      style={{ backgroundImage: `url(${valuelink})` }}
    >
      <div className=" flex justify-center py-5">
        <div className=" flex flex-col justify-center items-center w-[800px] text-center px-3 xs:px-5 text-white">
          <h1 className="text-3xl ssm:text-4xl md:text-5xl font-bold mb-4 ">
            Gallery Book
          </h1>
          <p className="text-lg ssm:text-xl font-semibold mb-4">
            Search and download any images within a second
          </p>
          <div className="flex items-center gap-2 w-full  p-3 bg-white rounded-xl">
            <IoSearchOutline className="text-2xl xs:text-3xl text-black font-extrabold " />
            <input
              type="text"
              placeholder="Enter Text Here.."
              className="w-full outline-none font-medium text-black"
              ref={inputElement}
              onKeyDown={handelOnKeyDown}
            />
            <button
              className="text-black bg-green-500 px-4 py-2 rounded-xl font-semibold shadow-md shadow-gray-500 active:scale-95 duration-300 ease-in-out"
              onClick={handelOnClick}
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BannerSection;
