import { useLoaderData } from "react-router-dom";
import RoomCards from "../RoomCards/RoomCards";

const FeaturedRooms = () => {
  const rooms = useLoaderData();
  console.log(rooms);
  const featuredRooms = rooms.slice(0,6);
  return (
    <div>
      <section className="py-6 sm:py-12 dark:bg-gray-100 dark:text-gray-800">
        <div className="container p-6 mx-auto space-y-8">
          <div className="space-y-2 ">
            <h2 className="text-3xl font-bold">Featured Rooms </h2>
            {/* <h2 className="text-3xl font-bold">Room Spotlight </h2>
			<p className="font-sans font-semibold text-base dark:text-gray-600">Discover Our Top Picks! Unveiling the most enchanting spaces curated just for you.</p> */}
          </div>
          <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
            {
              featuredRooms.map((room) => <RoomCards key={room._id} room={room}></RoomCards>)
            }
           
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturedRooms;
