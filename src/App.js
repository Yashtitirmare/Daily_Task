import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Header from './Components/Header'
import Home from './Components/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import User from './Components/User';

// BrowserRouter react component which help to execute routing process
function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/user/:id' element={<User />}></Route>
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
