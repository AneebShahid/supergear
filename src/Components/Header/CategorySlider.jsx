import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/swiper-bundle.css";
import {
  camera,
  computer,
  game,
  robotclean,
  sportwatch,
  tablet,
  tvbox,
  tvaudio,
  powertools,
  headphones,
  mobile,
  smartwatch,
} from "../../utils";

const categories = [
  { name: "Game & Video", image: game },
  { name: "Robot Clean", image: robotclean },
  { name: "Sport Watches", image: sportwatch },
  { name: "Tablets", image: tablet },
  { name: "Computers & Laptop", image: computer },
  { name: "TV Box", image: tvbox },
  { name: "TV & Audio", image: tvaudio },
  { name: "Power Tools", image: powertools },
  { name: "Headphones", image: headphones },
  { name: "Cameras & Photos", image: camera },
  { name: "Cell Phones", image: mobile },
  { name: "Smart Watch", image: smartwatch },
];

const CategorySlider = () => {
  return (
    <div className="container">
      <div className="relative flex items-center justify-center max-w-screen-xl mx-auto">
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          spaceBetween={5}
          autoplay={{
            delay: 3000,
          }}
          loop={true}
          breakpoints={{
            1024: {
              slidesPerView: 6,
            },
            768: {
              slidesPerView: 4,
            },
            464: {
              slidesPerView: 3,
            },
            0: {
              slidesPerView: 2,
            },
          }}
          className="w-full py-[10px]"
        >
          {categories.map((category, index) => (
            <SwiperSlide
              key={index}
              className="flex items-center gap-x-2 p-1 border border-gray-100 rounded-md hover:border-newsky hover:shadow-lg"
            >
              <img
                src={category.image}
                alt={category.name}
                className="size-10 rounded-full object-cover"
              />
              <p className="text-sm font-semibold">{category.name}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default CategorySlider;
