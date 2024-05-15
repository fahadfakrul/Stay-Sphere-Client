import RoomCards from "../Components/RoomCards/RoomCards";
import { useEffect, useState } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";

const Rooms = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios(`${import.meta.env.VITE_API_URL}/rooms`);
      setRooms(data);
    };
    getData();
  }, []);

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Rooms - Stay Sphere</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <section className="py-6 sm:py-12 dark:bg-gray-100 dark:text-gray-800">
        <div className="container p-6 mx-auto space-y-8">
          <div className="space-y-2 text-center">
            <h2 className="text-4xl font-extrabold mb-4">
              Explore Our Array of Luxurious Rooms for <br /> Your Perfect Stay!
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
            {rooms.map((room) => (
              <RoomCards key={room._id} room={room}></RoomCards>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Rooms;
