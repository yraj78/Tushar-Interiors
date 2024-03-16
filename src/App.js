import './App.css';
import HomeComponent from './pages/HomeComponent';
import About from './pages/About';
import Kitchen from './pages/Kitchen';
import Bedroom from './pages/Bedroom';
import Hall from './pages/Hall';
import HotelandRestaurant from './pages/HotelandRestaurant';
import All from './pages/All';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomeComponent />} />
          <Route path='/about' element={<About/>}/>
          <Route path='/kitchen' element={<Kitchen/>}/>
          <Route path='/bedroom' element={<Bedroom/>}/>
          <Route path='/hall' element={<Hall/>}/>
          <Route path='/hotelandrestaurant' element={<HotelandRestaurant/>}/>
          <Route path='/all' element={<All/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;