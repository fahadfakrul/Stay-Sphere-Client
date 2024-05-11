import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination } from "swiper/modules";
import "./Banner.css";
import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <div className="">
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
        <SwiperSlide className=" ">
          <div className="slide slide-1 flex items-center  ">
            <div className="px-14 md:px-24 "><h1 className="text-white font-medium text-5xl ">Discover Your Dream <br /> Destinations</h1>
            <Link to="/rooms" className="btn rounded-none btn-outline text-lg text-white mt-5 ">Book Now</Link ></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide slide-3 flex items-center">
          <div className="px-14 md:px-24 "><h1 className="text-white font-medium text-5xl ">Escape to Unparalleled <br /> Comfort</h1>
            <Link to="/rooms" className="btn rounded-none btn-outline text-lg text-white mt-5 ">Book Now</Link></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide slide-2 flex items-center">
          <div className="px-14 md:px-24 "><h1 className="text-white font-medium text-5xl ">Experience Luxury at Every  <br /> Stay</h1>
            <Link to="/rooms" className="btn rounded-none btn-outline text-lg text-white mt-5 ">Book Now</Link></div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
