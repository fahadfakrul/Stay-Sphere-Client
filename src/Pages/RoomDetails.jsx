import { useLoaderData } from "react-router-dom";
import UseAuth from "../Hooks/UseAuth";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";

const RoomDetails = () => {
  const { user } = UseAuth();
  const roomDetails = useLoaderData();
  console.log(roomDetails)
  const isAvailable = roomDetails.availability.toLowerCase() === "available";
  const [startDate, setStartDate] = useState(new Date());
  const modalRef = useRef(null);
  const [reviews, setReviews] = useState([]);
  console.log(reviews);
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const roomId = roomDetails._id;
    const roomName = roomDetails.room_description;
    const roomSize = roomDetails.room_size;
    const price = roomDetails.price_per_night;
    const name = user?.displayName;
    const email = user?.email;
    const availability = roomDetails.availability;
    const bookingDate = startDate;

    const bookingData = {
      roomId,
      roomName,
      roomSize,
      price,
      name,
      email,
      availability,
      bookingDate,
    };
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/booking`,
        bookingData
      );
      console.log(data);
    } catch (error) {
      console.log(error);
      console.log(error.message);
    }
    if (modalRef.current) {
      modalRef.current.close();
    }
  };

  const getData = async () => {
    const { data } = await axios(
      `${import.meta.env.VITE_API_URL}/reviews/${roomDetails._id}`
    );
    setReviews(data);
  };
  useEffect(() => {
    getData();
  }, [user]);

  return (
    <div>
      <Helmet>
                <meta charSet="utf-8" />
                <title>Room Details - Stay Sphere</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
      <section className="dark:bg-gray-100 dark:text-gray-800 ">
        <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
          <div>
            <h2 className="text-3xl font-serif font-bold tracking-tight text-center sm:text-5xl dark:text-gray-900">
              {roomDetails.room_description}
            </h2>
          </div>
          <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="mt-3 text-xl font-serif  dark:text-gray-900">
                {roomDetails.full_description}
              </p>
            </div>
            <div aria-hidden="true" className="mt-10 lg:mt-0">
              <img
                src={roomDetails.room_images[0]}
                alt=""
                className="object-cover w-full h-96 mx-auto rounded-lg shadow-lg dark:bg-gray-500"
              />
            </div>
          </div>
          <div>
            <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
              <div className="lg:col-start-2">
                <h3 className="mt-3 text-xl font-serif  dark:text-gray-900">
                  Our rooms are designed to provide you with a comfortable and
                  relaxing stay. The{" "}
                  <span className="font-bold font-serif">
                    {roomDetails.room_size}
                  </span>{" "}
                  space offers plenty of room for you to unwind and make
                  yourself at home. Whether you&apos;re traveling solo or with
                  family and friends, our accommodations cater to your needs.
                </h3>
                <p className="mt-3 text-lg dark:text-gray-600"></p>
              </div>
              <div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
                <img
                  src={roomDetails.room_images[1]}
                  alt=""
                  className="mx-auto rounded-lg shadow-lg dark:bg-gray-500"
                />
              </div>
            </div>
          </div>
          <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h3 className="text-2xl font-serif font-bold tracking-tight sm:text-3xl dark:text-gray-900">
                The Room is currently{" "}
                <span
                  className={` ${
                    isAvailable
                      ? "font-serif text-green-600"
                      : "font-serif text-red-500"
                  }`}
                >
                  {roomDetails.availability}
                </span>
              </h3>{" "}
              <br />
              <h3 className="text-2xl font-serif font-bold tracking-tight sm:text-3xl dark:text-gray-900">
                This room will cost you <br />{" "}
                <span className="text-[#CC9933] text-4xl">
                  {" "}
                  ${roomDetails.price_per_night}{" "}
                </span>{" "}
                per night.
              </h3>{" "}
              <br />
              {roomDetails.special_offers && (
                <>
                  <h3 className="text-2xl font-serif font-bold tracking-tight sm:text-3xl dark:text-gray-900">
                    Special Offer: <br />{" "}
                    <span className="text-[#CC9933] text-4xl">
                      {" "}
                      {roomDetails.special_offers}{" "}
                    </span>
                  </h3>{" "}
                  <br />
                </>
              )}
              <button
                onClick={() =>
                  document.getElementById("my_modal_4").showModal()
                }
                className="btn w-full text-white  bg-[#CC9933]"
                disabled={!isAvailable}
              >
                Book Now
              </button>
            </div>
            <div aria-hidden="true" className="mt-10 lg:mt-0">
              <img
                src={roomDetails.room_images[2]}
                alt=""
                className="object-cover w-full h-96 mx-auto rounded-lg shadow-lg dark:bg-gray-500"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <form onSubmit={handleFormSubmit}>
        <dialog ref={modalRef} id="my_modal_4" className="modal">
          <div className="modal-box w-11/12 max-w-5xl bg-slate-100 space-y-6">
            <h3 className="font-bold font-serif text-lg ">
              Room Description:{" "}
              <span className="font-serif font-semibold text-[#3A516E] text-lg">
                {roomDetails.room_description}
              </span>
            </h3>
            <div className="flex gap-4 lg:gap-20">
              <h3 className="font-bold font-serif text-lg">
                Room Size:{" "}
                <span className="font-serif font-semibold text-[#3A516E] text-lg">
                  {roomDetails.room_size}
                </span>
              </h3>
              <h3 className="font-bold font-serif text-lg">
                Price:{" "}
                <span className="font-serif font-semibold text-[#3A516E] text-lg">
                  ${roomDetails.price_per_night}
                </span>
              </h3>
            </div>
            {roomDetails.special_offers && (
              <h3 className="font-bold font-serif text-lg">
                Offer:{" "}
                <span className="font-serif font-semibold text-[#3A516E] text-lg">
                  {roomDetails.special_offers}
                </span>
              </h3>
            )}
            <h3 className="font-bold font-serif text-lg">
              Name:{" "}
              <span className="font-serif font-semibold text-[#3A516E] text-lg">
                {user.displayName}
              </span>
            </h3>
            <h3 className="font-bold font-serif text-lg">
              Email:{" "}
              <span className="font-serif font-semibold text-[#3A516E] text-lg">
                {user.email}
              </span>
            </h3>
            <h3 className="font-bold font-serif text-lg h-42">
              Booking date:{" "}
              <DatePicker
                className="border p-2 rounded-md"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </h3>
            <input
              className="btn w-full text-white  bg-[#CC9933]"
              type="submit"
              value="Confirm"
            />
            <p className="text-sm">Press ESC to cancel!</p>
          </div>
        </dialog>
      </form>
       <div>
        <h1 className="text-center font-semibold text-4xl my-5">Customer Reviews and Ratings</h1>
       </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
       {reviews.map(review => ( <div key={review._id} className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md dark:divide-gray-300 dark:bg-gray-50 dark:text-gray-800 border border-gray-200 mb-10 shadow-xl">
          <div className="flex justify-between p-4">
            <div className="flex space-x-4">
              
              <div>
                <h4 className="font-bold">{review.name}</h4>
                <span className="text-xs dark:text-gray-600">{new Date(review.timestamp).toLocaleString()

}</span>
              </div>
            </div>
            <div className="flex items-center space-x-2 dark:text-yellow-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-5 h-5 fill-current"
              >
                <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
              </svg>
              <span className="text-xl font-bold">{review.
rating}</span>
            </div>
          </div>
          <div className="p-4 space-y-2 text-sm dark:text-gray-600">
            <p>
              {review.review}
            </p>
            
          </div>
        </div>))}
      </div>
    </div>
  );
};

export default RoomDetails;
