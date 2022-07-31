import React from 'react';
import './App.css';
import { BrowserRouter as Router} from 'react-router-dom';
import NavigationBar from './components/NavigationBar';

const App: React.FC = () => {
  
  return (
    <Router>
      {/* <NavigationBar /> */}
      <h1>Project Baymax</h1>
      
    </Router>
  );
}

export default App;
