import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Home from './pages';
import FoodTracker from './pages/food-tracker';
import HealthTracker from './pages/health-tracker';
import SubstanceQuitter from './pages/substance-quitter';

const App: React.FC = () => {
  
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/food-tracker' element={<FoodTracker/>} />
        <Route path='/health-tracker' element={<HealthTracker/>} />
        <Route path='/substance-quitter' element={<SubstanceQuitter/>} />
      </Routes>
      
    </Router>
  );
}


export default App;
