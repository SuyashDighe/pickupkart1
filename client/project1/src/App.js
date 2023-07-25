import logo from './logo.svg';
import React from 'react';
import {BrowserRouter ,Route,Routes} from "react-router-dom";
import './App.css';
import Main from './component/Main';
import Location from './component/Location';
import Parsal from './component/Parsal';
import Report from './component/Report';
import Schedule from './component/Schedule';
import Services from './component/Services';
import About from './component/About';
import Contact from './component/Contact';
import Pickup from './component/Pickup';
import Delivery from './component/Delivery';
import FirstPage from './component/FirstPage';
import Payment from './component/Payment';

function App() {
  return (

    <BrowserRouter>
        <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/Services" element={<Services/>}/>
        <Route path="/Location" element={<Location/>}/>
        <Route path="/Pickup" element={<Pickup/>}/>
        <Route path="/Delivery" element={<Delivery/>}/>
        <Route path="/Parsal" element={<Parsal/>}/>
        <Route path="/Schedule" element={<Schedule/>}/>
        <Route path="/Report" element={<Report/>}/>
        <Route path="/FirstPage" element={<FirstPage/>}/>
        <Route path="/Payment" element={<Payment/>}/>
        </Routes>
    
    </BrowserRouter>
    // <Router>
    //   <Routes>
    //     <Route exact path="./component/Main" component={Main}/>
    //     <Route exact path="./component/Location" component={Location}/>
    //   </Routes>
    // </Router>

    //<Main/>
    //<About/>
    //<Contact/>
    //<Services/>
    //<Location/>
    //<Parsal/>
    //<Schedule/>
    //<Report/>
    //<Pickup/>
    //<Delivery/>
    
    
  );
}

export default App;
