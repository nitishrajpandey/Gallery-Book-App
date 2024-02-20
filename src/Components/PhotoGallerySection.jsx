import React from "react";
import { useSelector } from "react-redux";

function PhotoGallerySection() {
  const datavalue = useSelector((state) => state.gallerySearch.value.photos);
  console.log(datavalue);
  return (
    <div>
      {/* <div>
        {datavalue.map((item) => (
          <div>{item.src.original}</div>
        ))}
      </div> */}
    </div>
  );
}

export default PhotoGallerySection;
