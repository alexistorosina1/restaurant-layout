import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Homepage from './Components/HomePage';


function App() {
  return (
    <>
      <Navbar />
      <Homepage />
    </>
  );
}

export default App;
