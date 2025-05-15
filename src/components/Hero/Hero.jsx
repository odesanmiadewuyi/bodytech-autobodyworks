import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image1 from "../../assets/bro jide.jpg";
import Image2 from "../../assets/cake1.jpg";
import Image3 from "../../assets/cake2.jpg";
import Image4 from "../../assets/cake3.jpg";
import Image5 from "../../assets/cake4.jpg";
import Image6 from "../../assets/cake5.jpg";

// Image List for Slider
const ImageList = [
  { id: 1, img: Image1, title: "Bro Jide", description: "An inspiring personality making an impact." },
  { id: 2, img: Image2, title: "Cake 1", description: "A delicious and beautifully designed cake." },
  { id: 3, img: Image3, title: "Cake 2", description: "A tasty treat for special occasions." },
  { id: 4, img: Image4, title: "Cake 3", description: "A delightful cake for celebrations." },
  { id: 5, img: Image5, title: "Cake 4", description: "A creative cake with unique flavors." },
  { id: 6, img: Image6, title: "Cake 5", description: "A perfect cake for sweet memories." },
];

const Hero = () => {
  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] 
      bg-purple-500 flex justify-center items-center dark:bg-purple-900 
      dark:text-white duration-200"
    >
      {/* Background pattern */}
      <div className="h-[700px] w-[700px] bg-purple-700/40 absolute -top-1/2 right-0 
        rounded-3xl rotate-45 -z-10"
      ></div>

      {/* Hero Section */}
      <div className="container pb-8 sm:pb-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Text Content Section */}
          <div className="flex flex-col justify-center gap-4 text-center sm:text-left order-2 sm:order-1 relative z-10">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
              Experience the Best Moments
            </h1>
            <p className="text-sm">
              Discover inspiring personalities and beautifully crafted cakes.
            </p>
          </div>

          {/* Image Slider Section */}
          <div className="flex justify-center">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={50}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              className="w-[300px] h-[350px] sm:h-[450px] sm:w-[450px] relative"
            >
              {ImageList.map((image) => (
                <SwiperSlide key={image.id} className="relative flex justify-center">
                  {/* Image */}
                  <img src={image.img} alt={image.title} className="w-full h-full object-contain rounded-lg" />

                  {/* Title & Description Overlay */}
                  <div className="absolute bottom-4 left-0 right-0 bg-black/50 text-white py-2 px-4 text-center rounded-b-lg">
                    <h3 className="text-lg font-bold">{image.title}</h3>
                    <p className="text-sm">{image.description}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
