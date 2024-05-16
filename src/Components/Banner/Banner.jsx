import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination } from "swiper/modules";
import "./Banner.css";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const Banner = () => {
  const [showModal, setShowModal] = useState(false);
  const location = useLocation();

  const modalShow = () => {
    const modal = document.getElementById("my_modal_3");
    if (modal) {
      modal.showModal();
    }
  };

  const closeModal = () => {
    const modal = document.getElementById("my_modal_3");
    if (modal) {
      modal.close();
    }
    setShowModal(false);
  };

  useEffect(() => {
    if (location.pathname === "/") {
      setShowModal(true);
    } else {
      setShowModal(false);
    }
  }, [location.pathname]);

  useEffect(() => {
    if (showModal) {
      modalShow();
    }
  }, [showModal]);

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
            <div className="px-14 md:px-24 ">
              <h1 className="text-white font-medium text-5xl ">
                Discover Your Dream <br /> Destinations
              </h1>
              <Link
                to="/rooms"
                className="btn rounded-none btn-outline text-lg text-white mt-5 "
              >
                Book Now
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide slide-3 flex items-center">
            <div className="px-14 md:px-24 ">
              <h1 className="text-white font-medium text-5xl ">
                Escape to Unparalleled <br /> Comfort
              </h1>
              <Link
                to="/rooms"
                className="btn rounded-none btn-outline text-lg text-white mt-5 "
              >
                Book Now
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide slide-2 flex items-center">
            <div className="px-14 md:px-24 ">
              <h1 className="text-white font-medium text-5xl ">
                Experience Luxury at Every <br /> Stay
              </h1>
              <Link
                to="/rooms"
                className="btn rounded-none btn-outline text-lg text-white mt-5 "
              >
                Book Now
              </Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      {showModal && (
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box modal-content h-[500px] slide flex justify-center items-center">
            <form method="dialog ">
              <button
                onClick={closeModal}
                className="btn btn-md text-white btn-circle  btn-ghost absolute right-2 top-2"
              >
                ✕
              </button>
            </form>
            <h3 className="font-bold text-4xl text-white text-center">
              Get 20% discount at first booking and 10% at second booking!
            </h3>
          </div>
        </dialog>
      )}
    </div>
  );
};

export default Banner;
