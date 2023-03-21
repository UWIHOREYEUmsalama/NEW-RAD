import React, { Component } from 'react';

// import './App.css';



import Navbars from './components/Navbars'
import Cfooter from './components/footer'
import Cards from './components/Cards';

class App extends Component {


  render(){



    return (
      <div className="" style={{ backgroundImage: "url(/back1.jpg)" }}>
        {/* <Routes>
              <Route path="/Homepage" element={<Homepage/>}></Route>
              
              <Route path="/Shop" element={<Shop/>}></Route>
              <Route path="/Players" element={<Players/>}></Route>
              <Route path="/" element={<Homepage/>}></Route>
              <Route path="/Create" element={<Create/>}></Route>
              <Route path="/News" element={<News/>}></Route>
              
            
              
            </Routes> */}
        <Navbars />
        <Cards />
        <Cfooter />
      </div>
    );
  }
}

export default App;
