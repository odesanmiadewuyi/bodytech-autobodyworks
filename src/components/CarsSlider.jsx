import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


// Sample image list
const images = [
  { src: "/gallery/car.jpeg", alt: "Car image" },
  { src: "/gallery/car1.jpeg", alt: "Car image" },
  { src: "/gallery/car2.jpeg", alt: "Car image" },
  { src: "/gallery/car3.jpeg", alt: "Car image" },
  { src: "/gallery/car4.jpeg", alt: "Car image" },
  { src: "/gallery/car5.jpeg", alt: "Car image" },
  { src: "/gallery/car6.jpeg", alt: "Car image" },
  { src: "/gallery/car7.jpeg", alt: "Car image" },
  { src: "/gallery/car8.jpeg", alt: "Car image" },
];

export default function CarsSlider() {
  return (
    <div className="bg-gray-550 py-20 px-6 min-h-screen border-4 border-black">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ 
          delay: 3000,
          disableOnInteraction: false 
        }}
        loop={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 1,
          },
        }}
        className="max-w-5xl mx-auto"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="bg-gray-600 p-4 rounded-lg flex justify-center items-center h-full">
              {/* Using next/image if in Next.js for better optimization */}
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-auto max-h-[500px] object-contain rounded-lg"
                loading="lazy"
              />
              {/* Alternative using next/image:
              <Image
                src={image.src}
                alt={image.alt}
                width={800}
                height={500}
                className="object-contain rounded-lg"
                priority={index === 0}
              />
              */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}