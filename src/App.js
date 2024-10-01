import logo from './logo.svg';
import './App.css';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Weather from './weather';

function App() {
  return (
   <Router>
      <Routes>
        <Route path="/" exact element={<Weather/>}/>
      </Routes>
   </Router>
  );
}

export default App;
