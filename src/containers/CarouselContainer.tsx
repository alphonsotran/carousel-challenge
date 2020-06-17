import React, { useState } from "react";
import Slider from "../components/Slider";

export interface Props {
  images: Array<string>;
}
const CarouselContainer = ({ images }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const previousImage = () => {
    const firstImageIndex = 0;
    const lastImageIndex = images.length - 1;
    const newCurrentIndex =
      currentIndex === firstImageIndex ? lastImageIndex : currentIndex - 1;

    setCurrentIndex(newCurrentIndex);
  };

  const nextImage = () => {
    const firstImageIndex = 0;
    const lastImageIndex = images.length - 1;

    const newCurrentIndex =
      currentIndex === lastImageIndex ? firstImageIndex : currentIndex + 1;

    setCurrentIndex(newCurrentIndex);
  };

  return (
    <div>
      <Slider url={images[currentIndex]} />
      <button onClick={previousImage}>previous</button>
      <button onClick={nextImage}>previous</button>
    </div>
  );
};

export default CarouselContainer;
