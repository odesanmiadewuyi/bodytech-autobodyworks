// components/TestimonialSlider.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Sample testimonials
const testimonials = [
  {
    name: "V Littlefair",
    feedback: "Can’t fault these guys really. Brilliant. They always look after me brilliantly.",
    icon: "/gold-star.png", // Replace with your star icon path
  },
  {
    name: "Jane Doe",
    feedback: "Excellent service! Highly recommend them to anyone looking for quality.",
    icon: "/gold-star.png",
  },
  {
    name: "John Smith",
    feedback: "Quick, professional and friendly service from start to finish.",
    icon: "/gold-star.png",
  },
];

export default function TestimonialSlider() {
  return (
    <div className="bg-black py-20 px-6 text-white">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop={true}
        className="max-w-6xl mx-auto"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="bg-[#17191c] p-10 rounded-lg flex items-center gap-6 shadow-lg min-h-[200px]">
              <img src={testimonial.icon} alt="icon" className="w-16 h-16" />
              <div>
                <p className="text-lg sm:text-xl">{testimonial.feedback}</p>
                <p className="mt-4 font-bold">{testimonial.name}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
