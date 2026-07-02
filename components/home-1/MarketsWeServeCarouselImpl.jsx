"use client";

import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const MarketsWeServeCarousel = ({ markets }) => {
  return (
    <div className="lg:hidden">
      <Swiper
        modules={[Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 1.2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1.5,
            spaceBetween: 24,
          },
        }}
        className="swiper !pb-12 !px-2"
      >
        {markets.map((market) => (
          <SwiperSlide key={market.id}>
            <div className="relative scale-100 rounded-medium bg-white p-2.5 shadow-nav transition-transform duration-500 hover:scale-105 hover:transition-transform hover:duration-500 dark:bg-dark-200 h-full">
              <div className="h-full rounded border border-dashed border-gray-100 p-10 dark:border-borderColor-dark max-lg:p-5">
                <h3 className="mb-4 text-xl font-semibold">{market.heading}</h3>
                <p className="mb-6 text-gray-700 dark:text-gray-300">
                  {market.text}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MarketsWeServeCarousel;
