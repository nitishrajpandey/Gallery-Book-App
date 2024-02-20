import React from "react";
import BannerSection from "./Components/BannerSection";
import { useSelector } from "react-redux";
import PhotoGallerySection from "./Components/PhotoGallerySection";

function App() {
  return (
    <div>
      <BannerSection />
      <PhotoGallerySection />
    </div>
  );
}

export default App;
