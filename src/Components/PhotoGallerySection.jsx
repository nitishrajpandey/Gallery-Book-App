import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaCamera, FaDownload } from "react-icons/fa";
import {
  fetchGallerySearchAsync,
  fetchNextPageAsync,
  pageInput,
} from "../Store/gallerySearchSlice";
import Loding from "./Loding";
import HeroSection from "./HeroSection";

function PhotoGallerySection() {
  const dispatch = useDispatch();
  const datavalue = useSelector((state) => state.gallerySearch.value);
  const searchData = useSelector((state) => state.gallerySearch.searchValue);
  const pageData = useSelector((state) => state.gallerySearch.page);
  const pending = useSelector((state) => state.gallerySearch.pending);

  // console.log(datavalue);
  // console.log(searchData);
  // // console.log(Boolean(searchData));
  // console.log(pageData);

  if (!datavalue) {
    return <div></div>;
  }

  const handlePage = (pageNumber) => {
    dispatch(
      fetchNextPageAsync(
        `https://api.pexels.com/v1/search/?page=${pageNumber}&per_page=15&query=${searchData}`
      )
    );
    dispatch(pageInput(pageData + 1));
  };

  const handleClick = () => {
    const nextPageNumber = pageData + 1;
    handlePage(nextPageNumber);
  };

  const downloadImg = (imgUrl) => {
    fetch(imgUrl)
      .then((res) => res.blob())
      .then((blob) => {
        const a = document.createElement("a");
        a.href = URL.createObjectURL(blob);
        a.download = new Date().getTime();
        a.click();
      })
      .catch(() => alert("Failed to download image!"));
  };

  return (
    <>
      {pending ? (
        <Loding />
      ) : searchData ? (
        <div className="flex flex-col items-center bg-[#F8F8F8] pb-12">
          <div className="max-w-[95%] mt-[40px] columns-1 xs:columns-2 ssm:columns-3 md:columns-4 lg:columns-5 gap-[15px]">
            {datavalue?.map((item) => (
              <div
                key={item.id}
                className="relative group overflow-hidden mb-[15px] rounded-md shadow-md shadow-gray-600"
              >
                <img
                  src={item.src.original}
                  alt=""
                  className="w-full bg-cover"
                />
                <div className="absolute bottom-0 left-0 w-full flex items-center justify-between p-3 bg-black bg-opacity-50 text-white xs:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center gap-4">
                    <FaCamera className="text-white font-bold text-2xl" />
                    <p className="bottom-[10px]">{item.photographer}</p>
                  </div>
                  <div>
                    <button onClick={() => downloadImg(item.src.original)}>
                      <FaDownload className="text-white text-2xl" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="pt-20">
            <button
              className="bg-green-500 px-4 py-2 rounded-lg text-white font-semibold text-xl shadow-md shadow-gray-500 active:scale-95 duration-300 ease-in-out"
              onClick={handleClick}
            >
              Load More
            </button>
          </div>
        </div>
      ) : (
        <HeroSection />
      )}
    </>
  );
}

export default PhotoGallerySection;
