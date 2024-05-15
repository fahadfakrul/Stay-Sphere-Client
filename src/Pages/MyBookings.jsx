import { useEffect, useState } from "react";
import UseAuth from "../Hooks/UseAuth";
import axios from "axios";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const MyBookings = () => {
  const { user } = UseAuth();

  const [bookings, setBookings] = useState([]);

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
        confirmButtonText: "Confirm"
      }).then(async(result) => {
        if (result.isConfirmed) {
            try {
                const { data } = await axios.delete(
                    `${import.meta.env.VITE_API_URL}/booking/${id}`
                  );
                  console.log(data);
                  Swal.fire({
                    title: "Canceled!",
                    text: "Your booking has been cancelled.",
                    icon: "success"
                  });
                  getData();
            }
         catch (error) {
            console.error(error);
            toast.error(error.message);
        }
        }
      });
     
  };
 

  return (
    <div>
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
                    <p>$250</p>
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
                    <button className="btn px-4 font-semibold rounded-md dark:bg-[#CC9933] dark:text-gray-50">
                      Update
                    </button>
                  </td>
                  <td className="p-3 text-right">
                    <button className="btn px-4 font-semibold rounded-md dark:bg-[#CC9933] text-white">
                      Review
                    </button>
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
