import { Await, useLoaderData } from "react-router-dom";
import UseAuth from "../Hooks/UseAuth";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import axios from "axios";

const RoomDetails = () => {
  const { user } = UseAuth();
  const roomDetails = useLoaderData();
  const isAvailable = roomDetails.availability.toLowerCase() === "available";
  const [startDate, setStartDate] = useState(new Date());

  const handleFormSubmit = async e => {
    e.preventDefault();
    const roomId = roomDetails._id;
    const roomName = roomDetails.room_description;
    const roomSize = roomDetails.room_size;
    const price = roomDetails.price_per_night;
    const name = user?.displayName;
    const email = user?.email;
    const availability= roomDetails.availability;
    const bookingDate = startDate;
    const bookingData = {
      roomId, roomName, roomSize, price, name, email, availability,bookingDate
    }
    try {
      const {data} = await axios.post(`${import.meta.env.VITE_API_URL}/booking`, bookingData)
      console.log(data);
    } catch (error) {
      console.log(error);
      console.log(error.message);
    }
    
  }

  
  return (
    <div>
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
                  document.getElementById("my_modal_1").showModal()
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
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box bg-slate-100 space-y-6">
          <h3 className="font-bold font-serif text-lg ">
            Room Description:{" "}
            <span className="font-serif font-semibold text-[#3A516E] text-lg">
              {roomDetails.room_description}
            </span>
          </h3>
          <div className="flex gap-4">
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
          </h3>)}
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
          <h3 className="font-bold font-serif text-lg">
            Booking date: <DatePicker className="border p-2 rounded-md" selected={startDate} onChange={(date) => setStartDate(date)} />
            
          </h3>
              <input className="btn w-full text-white  bg-[#CC9933]" type="submit" value="Confirm" />
            <p className="text-sm">Press ESC to cancel!</p>
          
        </div>
      </dialog>
      </form>
    </div>
  );
};

export default RoomDetails;
