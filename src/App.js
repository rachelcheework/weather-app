import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, HashRouter } from "react-router-dom";
import Weather from './weather';

function App() {
  return (
  <Router basename='/weather-app'>
        <Routes>
          <Route path="/" exact element={<Weather/>}/>
        </Routes>
   </Router>
  );
}

export default App;
