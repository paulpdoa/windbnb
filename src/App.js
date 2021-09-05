import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Rooms from "./components/Rooms";
import rooms from "./rooms";
import { useState } from 'react';

const App = () => {

  const [found,setFound] = useState([]);

  const searchRoom = (lounge,visitor) => {
      rooms.filter((room) => {
        if(room.city === lounge && room.maxGuests <= visitor) {
          setFound(room);
        } 
        return room;
     })
  }

  return (
    <>
     <Navbar searchRoom={searchRoom} />
     <Header />
     <Rooms found={found} />
     <Footer />
    </>
  );
}

export default App;
