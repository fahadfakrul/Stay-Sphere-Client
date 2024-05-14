import { useLoaderData, useParams } from "react-router-dom";

const RoomDetails = () => {
  const { id } = useParams();
  const rooms = useLoaderData();

  const roomDetails = rooms.find((room) => room._id === id);
  const isAvailable = roomDetails.availability.toLowerCase() === "available";
  //   console.log(roomDetails.room_description);
  //   const {
  //     room_description,
  //     full_description,
  //     price_per_night,
  //     room_size,
  //     availability,
  //     room_images,
  //     special_offers,
  //   } = roomDetails;
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
                The Room is currently <span className={` ${isAvailable? "font-serif text-green-600" : "font-serif text-red-500"}`}>{roomDetails.availability}</span>
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
              <button onClick={() => document.getElementById("my_modal_1").showModal()} className="btn w-full text-white  bg-[#CC9933]" disabled={!isAvailable}>
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
      
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">
            Press ESC key or click the button below to close
          </p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default RoomDetails;
