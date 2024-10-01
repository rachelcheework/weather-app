import logo from './logo.svg';
import './App.css';
import { HashRouter as Router, Routes, Route, HashRouter } from "react-router-dom";
//import { BrowserRouter as Router, Routes, Route, HashRouter } from "react-router-dom";
import Weather from './weather';

function App() {
  return (
   <Router>
  {/* <Router basename='/weather-app'> */}
     <div className='app-container'>
      <h1> welcome to my weather app</h1>
        <Routes>
          <Route path="/" exact element={<Weather/>}/>
        </Routes>
      </div>
   </Router>
  );
}

export default App;
