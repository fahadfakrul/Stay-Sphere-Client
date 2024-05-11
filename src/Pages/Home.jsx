import Banner from "../Components/Banner/Banner";
import FeaturedRooms from "../Components/FeaturedRooms/FeaturedRooms";
import Footer from "../Components/Footer/Footer";
import MapSection from "../Components/MapSection/MapSection";
import NewsLetter from "../Components/NewsLetter/NewsLetter";
import Review from "../Components/Review/Review";


const Home = () => {
    return (
        <div>
           
            <Banner></Banner>
            <FeaturedRooms></FeaturedRooms>
            <MapSection></MapSection>
            <Review></Review>
            <NewsLetter></NewsLetter>
            <Footer></Footer>
        </div>
    );
};

export default Home;