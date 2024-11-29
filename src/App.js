import logo from './logo.svg';
import './App.css';
import Contact from './componenets/contact.js'
import{ BrowserRouter, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import NavBars from './componenets/nav.js';
import Footer from './componenets/footer.js';
import Home from './componenets/home.js';
import About from './componenets/about.js';
import Service from './componenets/service.js';

function App() {
  return (
    
    <BrowserRouter>
    <NavBars/>
      <Routes>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/service' element={<Service/>}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
    
  );
}

export default App;
