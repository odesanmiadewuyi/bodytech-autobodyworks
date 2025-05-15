// components/ImageSlider.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Sample image list
const images = [
    { src: "/gallery/istockphoto-1356475610-1024x1024.jpg", alt: "Ceremony Setup" },
    { src: "/gallery/pexels-alex-amorales-321095-909907.jpg", alt: "Birthday Celebration" },
    { src: "/gallery/pexels-mikebirdy-116675.jpg", alt: "Wedding Cake" },
    { src: "/gallery/pexels-mikebirdy-810357.jpg", alt: "Wedding Cake" },
    { src: "/gallery/pexels-mikebirdy-1007410.jpg", alt: "Wedding Cake" },
    { src: "/gallery/pexels-mikebirdy-1035108.jpg", alt: "Wedding Cake" },
    { src: "/gallery/white-offroader-jeep-parking.jpg", alt: "Wedding Cake" },
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