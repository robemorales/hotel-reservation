import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer'
import Search from './components/Search';
import { BrowserRouter as  BroRouter, Routes,Route, Link} from "react-router-dom"
import Mail from './components/Mail';
import InfoRoom from './components/InfoRoom';
import Gestion from './components/roomManagemen/Gestion';

function App() {
  return (
    <div>

      <BroRouter>
        <Header/>
        <Routes>
          <Route path='/search' element={<Search/>}></Route>
          
          <Route path='/' element={<Home/>}></Route>

          <Route path='/mail' element={<Mail/>}></Route>

          <Route path='/infoRoom' element={<InfoRoom/>}></Route>
          <Route path='/roomManagemen/management' element={<Gestion/>}></Route>
         
        </Routes>
        <Footer/>
      </BroRouter>
      
      
    </div>
  );
}

export default App;
