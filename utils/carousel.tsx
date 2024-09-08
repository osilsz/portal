"use client";
import { useState } from "react";
import Cards from "./card";

interface CardsProps {
  image: string;
  title: string;
}

interface CarouselProps {
  cards: CardsProps[];
}

const Carousel: React.FC<CarouselProps> = ({ cards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === cards.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 80}%)`,
        }}
      >
        {cards.map((card, index) => (
          <div
            key={index}
            className="min-w-[80%] max-w-[80%] mr-5 flex-shrink-0"
          >
            <Cards image={card.image} title={card.title} />
          </div>
        ))}
      </div>

      {currentIndex !== 0 && (
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-0 transform -translate-y-1/2  bg-dark-D100/50 text-white  flex justify-center items-center  w-[2.5rem] h-[2.5rem] rounded-full"
        >
          <p className="text-white-w100">❮</p>
        </button>
      )}

      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-dark-D100/50  text-white  flex justify-center items-center  w-[2.5rem] h-[2.5rem] rounded-full"
      >
        <p className="text-white-w100">❯</p>
      </button>
    </div>
  );
};

export default Carousel;
