import { Route, Routes } from 'react-router';
import logo from './logo.svg';
import './App.css';
import { useLocation } from 'react-router-dom';
import {Home, Pricing, Nav, Product, Resources, Solutions, Footer} from './shand'
import FourOhFour from './pages/404/FourOhFour';
import { AnimatePresence } from 'framer-motion';




function App() {
  const location = useLocation();
  return (
    <div className='App'>
      <Nav/>

      <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname}>
          <Route path='/' element = {<Home/>}/>
          <Route path='/pricing' element = {<Pricing/>} />
          <Route path='/product' element =  {<Product/>} />
          <Route path='/resources' element = {<Resources/>} />
          <Route path='/solutions' element = {<Solutions/>} />
          <Route path='/404' element = {<FourOhFour/>} />
        </Routes>
      </AnimatePresence>



      <Footer/>

      

    </div>
  );
}

export default App;
