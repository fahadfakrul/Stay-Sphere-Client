import axios from "axios";
import { useEffect, useState } from "react";

const Review = () => {
  const [reviews, setReviews] = useState([]);

  const getData = async () => {
    const { data } = await axios(`${import.meta.env.VITE_API_URL}/reviews`);
    setReviews(data);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <section className="py-6 sm:py-12 dark:bg-gray-100 dark:text-gray-800">
        <div className="container p-6 mx-auto ">
          <div className="space-y-2 ">
            <h2 className="text-3xl mb-3 font-bold">Reviews </h2>
            <p className="font-sans font-semibold text-base mb-3 dark:text-gray-600">
              Read firsthand experiences from our satisfied customers.
            </p>
          </div>
          <div className="mt-5 grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map((review) => (
              <div key={review._id}>
                <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md dark:divide-gray-300 dark:bg-gray-50 dark:text-gray-800 border shadow-xl min-h-64">
                  <div className="flex justify-between p-4">
                    <div className="flex space-x-4">
                      <div>
                        <h4 className="font-bold">{review.name}</h4>
                        <span className="text-xs dark:text-gray-600">
                          {new Date(review.timestamp).toLocaleString()}
                        </span>
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
                      <span className="text-xl font-bold">{review.rating}</span>
                    </div>
                  </div>
                  <div className="p-4 space-y-2 text-sm dark:text-gray-600">
                    <p>{review.review.slice(0,200)}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Review;
