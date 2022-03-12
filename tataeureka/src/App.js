import 'bootstrap/dist/js/bootstrap.bundle.js';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navigation from './components/navbar/Navigation';

import Banner from './components/banner';
import AboutUs from './components/aboutUs';
import LocationAdv from './components/locationadv';
import Iframecom from './components/iframe';
import PriceList from './components/pricelist';
import Floorplan from './components/floorplan';
import Amenities from './components/amenities';
import Location from './components/location';
import Footer from './components/footer';
var rootStyle = {
    height: '100vh',
    innerHeight:'100vh'
  }

const App = () => {
    return(
        <div className="App"  style={rootStyle}  >
         
      <Navigation />
      <Banner />
      <AboutUs />
      <LocationAdv />
      <Iframecom />
      <PriceList />
      <Floorplan />
      <Amenities />
      <Location />
      <Footer />
     
    </div>
  );
}

export default App;
