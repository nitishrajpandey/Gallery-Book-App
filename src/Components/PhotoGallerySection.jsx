import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaCamera } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import { useEffect } from "react";
import { fetchGallerySearchAsync } from "../Store/gallerySearchSlice";

function PhotoGallerySection() {
  const datavalue = useSelector((state) => state.gallerySearch.value.photos);
  // const datavalue1 = useSelector((state) => state.gallerySearch.value);

  const dispatch = useDispatch();

  // console.log(datavalue);
  // console.log(datavalue1);

  useEffect(() => {
    dispatch(fetchGallerySearchAsync());
  }, []);

  if (!datavalue) {
    return <div></div>;
  }
  // download code
  const downloadImg = (imgUrl) => {
    // Converting received img to blob, creating its download link, & downloading it
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
    <div className="flex flex-col items-center bg-[#F8F8FF] pb-12">
      <div className="max-w-[95%] mt-[40px] columns-1 xs:columns-2 ssm:columns-3 md:columns-4 lg:columns-5 gap-[15px]">
        {datavalue.map((item) => (
          <div
            key={item.id}
            className="relative group overflow-hidden mb-[15px] rounded-md shadow-md shadow-gray-600"
          >
            <img src={item.src.original} alt="" className="w-full bg-cover" />
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
        <button className="bg-green-500 px-4 py-2 rounded-lg text-white font-semibold text-xl shadow-md shadow-gray-500 active:scale-95 duration-300 ease-in-out">
          Load More
        </button>
      </div>
    </div>
  );
}

export default PhotoGallerySection;
