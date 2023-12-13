import { Route, Routes } from 'react-router';
import logo from './logo.svg';
import './App.css';
import {Home, Pricing, Nav, Product, Resources, Solutions, Footer} from './shand'




function App() {
  return (
    <div className='App'>
      <Nav/>

      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/pricing' element = {<Pricing/>} />
        <Route path='/product' element =  {<Product/>} />
        <Route path='/resources' element = {<Resources/>} />
        <Route path='/solutions' element = {<Solutions/>} />
      </Routes>



      <Footer/>

      

    </div>
  );
}

export default App;
