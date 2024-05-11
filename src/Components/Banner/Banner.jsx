import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination } from "swiper/modules";
import "./Banner.css";
const Banner = () => {
  return (
    <div className="mt-5">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="slide slide-1 flex items-center ">
            <div className="px-14 md:px-24 "><h1 className="text-white font-medium text-5xl ">Discover Your Dream <br /> Destinations</h1>
            <button className="btn rounded-none btn-outline text-white mt-5 ">Book Now</button></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide slide-3">
          <div className="px-14 md:px-24 "><h1 className="text-white font-medium text-5xl ">Escape to Unparalleled <br /> Comfort</h1>
            <button className="btn rounded-none btn-outline text-white mt-5 ">Book Now</button></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide slide-2">
          <div className="px-14 md:px-24 "><h1 className="text-white font-medium text-5xl ">Experience Luxury at Every  <br /> Stay</h1>
            <button className="btn rounded-none btn-outline text-white mt-5 ">Book Now</button></div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
