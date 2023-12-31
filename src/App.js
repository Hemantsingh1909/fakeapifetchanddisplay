import './App.css';
import FetchData from './FetchData';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About'
import Contact from './pages/Contact'

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";



function App() {
  return (
    <>
    <Header/>

    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/fetchdata" element={<FetchData/>} />
    </Routes>
    </>
  );
}

export default App;
