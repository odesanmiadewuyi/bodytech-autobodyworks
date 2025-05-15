// components/ImageSlider.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Sample image list
const images = [
    { src: "/gallery/car.jpeg", alt: "Ceremony Setup" },
    { src: "/gallery/car1.jpeg", alt: "Birthday Celebration" },
    { src: "/gallery/car2.jpeg", alt: "Wedding Cake" },
    { src: "/gallery/car3.jpeg", alt: "Wedding Cake" },
    { src: "/gallery/car4.jpeg", alt: "Wedding Cake" },
    { src: "/gallery/car5.jpeg", alt: "Wedding Cake" },
    { src: "/gallery/car6.jpeg", alt: "Wedding Cake" },
    { src: "/gallery/car7.jpeg", alt: "Wedding Cake" },
    { src: "/gallery/car8.jpeg", alt: "Wedding Cake" },
  ];
  

export default function ImageSlider() {
    return (
	
      <div className="bg-black py-20 px-6 min-h-[100vh]">
        
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop={true}
          className="max-w-5xl mx-auto"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="bg-[#17191c] p-4 rounded-lg flex justify-center items-center">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto max-h-[500px] object-cover rounded-lg"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
  }