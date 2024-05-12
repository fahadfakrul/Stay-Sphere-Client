const NewsLetter = () => {
  return (
    
      <div
        className="hero h-[350px]"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/x3JWQqD/zq-lee-Vb-Djv8-8ibc-unsplash.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
           
            <p className="mb-5 text-white">
              To recieve our best monthly deals
            </p>
            <h1 className="mb-5 text-3xl font-bold text-white">JOIN THE NEWSLETTER</h1>
           
            <div className="flex flex-row bg-transparent p-2 bg-gray-900 bg-opacity-30 rounded-lg">
			<input type="text" placeholder="example@email.com" className="w-3/5 p-3 rounded-l-lg sm:w-2/3" />
			<button type="button " className="w-2/5 p-3 font-semibold rounded-r-lg sm:w-1/3 dark:bg-[#CC9933] hover:text-black  dark:text-white">Subscribe</button>
		</div>

            
          </div>
        </div>
      </div>
    
  );
};

export default NewsLetter;
