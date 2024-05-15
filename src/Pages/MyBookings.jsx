import { useEffect, useRef, useState } from "react";
import UseAuth from "../Hooks/UseAuth";
import axios from "axios";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import ReactDatePicker from "react-datepicker";
import moment from 'moment';
import { Helmet } from "react-helmet";
moment().format(); 

const MyBookings = () => {
  const { user } = UseAuth();
  const modalRef = useRef(null);
  const [bookings, setBookings] = useState([]);
  const [startDate, setStartDate] = useState(new Date());

  const getData = async () => {
    const { data } = await axios(
      `${import.meta.env.VITE_API_URL}/bookings/${user?.email}`
    );
    setBookings(data);
  };
  useEffect(() => {
    getData();
  }, [user]);

  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Confirm!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const { data } = await axios.delete(
            `${import.meta.env.VITE_API_URL}/booking/${id}`
          );
          console.log(data);
          Swal.fire({
            title: "Canceled!",
            text: "Your booking has been cancelled.",
            icon: "success",
          });
          getData();
        } catch (error) {
          console.error(error);
          toast.error(error.message);
        }
      }
    });
  };
  
  
     
  const handleReviewSubmit = async (e, roomId) => {
    e.preventDefault();
    const form = e.target;
    const review = form.review.value;
    const rating = form.rating.value;
    const name= user?.displayName;
    const email= user?.email;
    const id = roomId;
    const timestamp = moment().format('YYYY-MM-DD HH:mm:ss');
    // console.log(timestamp);
        console.log(review, rating);
    const reviewData = {
        name,
        email,
        rating,
        review,
        timestamp,
        id,

      }
      try {
        const {data} = await axios.post(`${import.meta.env.VITE_API_URL}/reviews`, reviewData)
        toast.success('Review submitted successfully')
        getData()
        console.log(data);
         if (modalRef.current) {
            modalRef.current.close();
          }
        
      } catch (error) {
        console.log(error);
        toast.error(error.message);
      console.log(error.message);
      }
      
    }


  const handleUpdateFormSubmit = async (id) => {
    const bookingDate = startDate;

    const { data } = await axios.patch(
      `${import.meta.env.VITE_API_URL}/booking-update/${id}`,
      { bookingDate }
    );
    
    console.log(data);
    getData();
    toast.success('Date updated successfully')
    if (modalRef.current) {
      modalRef.current.close();
    }
  };
  return (
    <div>
        <Helmet>
                <meta charSet="utf-8" />
                <title>My Bookings - Stay Sphere</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
      <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
        <div className="flex  gap-5">
          <h2 className="mb-4 text-2xl font-semibold leading-tight">
            My Bookings
          </h2>
          <span className="text-sm px-3 h-5 text-white bg-[#CC9933] rounded-xl">
            {bookings.length} bookings
          </span>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full text-xs">
            <colgroup>
              <col />
              <col />
              <col />
              <col />
              <col />
              <col className="w-24" />
            </colgroup>
            <thead className="dark:bg-gray-300">
              <tr className="text-left">
                <th className="p-3">Room Description</th>
                <th className="p-3">Room Size</th>
                <th className="p-3">Booking Date</th>
                {/* <th className="p-3"></th> */}
                <th className="p-3">Price</th>
                <th className="p-3  text-right">Cancel Booking</th>
                <th className="p-3  text-right">Update Date</th>
                <th className="p-3  text-right ">Submit Review</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking) => (
                <tr
                  key={booking._id}
                  className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50"
                >
                  <td className="p-3">
                    <p>{booking.roomName}</p>
                  </td>
                  <td className="p-3">
                    <p>{booking.roomSize}</p>
                  </td>
                  <td className="p-3">
                    <p>{new Date(booking.bookingDate).toLocaleDateString()}</p>
                  </td>
                  {/* <td className="p-3">
                    <p></p>
                    <p className="dark:text-gray-600"></p>
                  </td> */}
                  <td className="p-3 ">
                    <p>{booking.price}</p>
                  </td>
                  <td className="p-3 text-right">
                    <button
                      onClick={() => handleDelete(booking._id)}
                      className="btn px-4 font-semibold rounded-md dark:bg-[#CC9933] dark:text-gray-50"
                    >
                      Cancel
                    </button>
                  </td>
                  <td className="p-3 text-right">
                    <button
                      onClick={() =>
                        document.getElementById("my_modal_4").showModal()
                      }
                      className="btn px-4 font-semibold rounded-md dark:bg-[#CC9933] dark:text-gray-50"
                    >
                      Update
                    </button>
                    <form onSubmit={() => handleUpdateFormSubmit(booking._id)}>
                      <dialog ref={modalRef} id="my_modal_4" className="modal">
                        <div className="modal-box w-11/12 max-w-5xl text-left bg-slate-100 space-y-6">
                          <h3 className="font-bold font-serif text-lg ">
                            Room Description:{" "}
                            <span className="font-serif font-semibold text-[#3A516E] text-lg">
                              {booking.roomName}
                            </span>
                          </h3>
                          <div className="flex gap-4 lg:gap-20">
                            <h3 className="font-bold font-serif text-lg">
                              Room Size:{" "}
                              <span className="font-serif font-semibold text-[#3A516E] text-lg">
                                {booking.roomSize}
                              </span>
                            </h3>
                            <h3 className="font-bold font-serif text-lg">
                              Price:{" "}
                              <span className="font-serif font-semibold text-[#3A516E] text-lg">
                                ${booking.price}
                              </span>
                            </h3>
                          </div>

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
                            <ReactDatePicker
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
                  </td>
                  <td className="p-3 text-right">
                    <button
                      onClick={() =>
                        document.getElementById("my_modal_3").showModal()
                      }
                      className="btn px-4 font-semibold rounded-md dark:bg-[#CC9933] text-white"
                    >
                      Review
                    </button>
                    {/* You can open the modal using document.getElementById('ID').showModal() method */}
                    <form method="dialog" onSubmit={(e) => handleReviewSubmit(e, booking.roomId
)}>
                    <dialog ref={modalRef} id="my_modal_3" className="modal">
                      <div className="modal-box text-left">
                        
                          {/* if there is a button in form, it will close the modal */}
                          
                          <h3 className="font-bold text-xl mb-5">
                            Share Your Experience with Us
                          </h3>
                          <p className="text-lg font-semibold">Name: {user.displayName}</p>
                          <textarea
                            id="subject"
                            name="review"
                            placeholder="Write your review here..."
                            className="p-4 border text-base rounded-lg "
                            rows="5"
                            cols="50"
                          ></textarea>
                          <div>
                            <select
                              className="w-20 h-5 font-bold text-lg mt-5 "
                              defaultValue="5"
                              name="rating"
                            >
                              <option value="5">5 star</option>
                              <option value="4">4 star</option>
                              <option value="3">3 star</option>
                              <option value="2">2 star</option>
                              <option value="1">1 star</option>
                            </select>
                          </div>
                          <input className="mt-4 btn w-full text-white  bg-[#CC9933]" type="submit" value="Submit" />
                          <p className="py-4">
                            Press ESC key  to close
                          </p>
                        
                      </div>
                    </dialog>
                    </form>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyBookings;
