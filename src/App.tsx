import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Home from './pages';
import foodTracker from './pages';

const App: React.FC = () => {
  
  return (
    <Router>
      <NavigationBar />

    </Router>
  );
}


export default App;
