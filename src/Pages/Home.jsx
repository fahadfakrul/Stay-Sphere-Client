import Banner from "../Components/Banner/Banner";
import FeaturedRooms from "../Components/FeaturedRooms/FeaturedRooms";
import Footer from "../Components/Footer/Footer";
import MapSection from "../Components/MapSection/MapSection";


const Home = () => {
    return (
        <div>
           
            <Banner></Banner>
            <FeaturedRooms></FeaturedRooms>
            <MapSection></MapSection>
            <Footer></Footer>
        </div>
    );
};

export default Home;