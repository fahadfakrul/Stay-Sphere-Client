import { Link } from "react-router-dom";


const RoomCards = ({room}) => {
    const {room_images,availability,room_description,price_per_night, special_offers,_id} = room;
    const handleProperty = () => {
        window.scrollTo(0, 0);
      }
    return (
        <div>
             <article className="flex flex-col dark:bg-gray-50 shadow-xl ">
              
                <Link onClick={handleProperty} to={`/roomdetails/${_id}`}>
                <img
                  alt=""
                  className="object-cover w-full h-60 dark:bg-gray-500 transition  hover:scale-95"
                  src={room_images[0]}
                />
                </Link>
              
              <div className="flex flex-col flex-1 p-6">
                <div className="flex">
                <div className="text-white bg-[#CC9933] rounded-xl px-2">{availability}</div>
                </div>
                <h3 className="flex-1 py-2 text-2xl font-semibold leading-snug">
                  {room_description}
                </h3>
                <p className="font-serif text-xl">Price: ${price_per_night}/night</p>
                <div className="flex flex-wrap  justify-between pt-3 space-x-2 text-lg dark:text-gray-600 h-24">
                  {special_offers ? <p className="font-serif text-[#3A516E]"><span className=" font-bold">Exclusive Offer: </span>{special_offers}.</p> : ""}
                </div>
              </div>
            </article>
        </div>
    );
};

export default RoomCards;