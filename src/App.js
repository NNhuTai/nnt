import { Routes, Route } from 'react-router-dom'
import { Home } from './components/Home'
import { NoPage } from './components/NoPage'
import { Pizzas } from './components/Pizzas'
import {Calculator} from './components/Calculator'
import Navbar from './components/Navbar'
import PizzaMap from './components/PizzaMap'
import AboutUs from './components/AboutUs'
import Footer from './components/Footer'
import './App.css';
// const Home = lazy(() => import('./components/Home' ));
// const NoPage = lazy(() => import('./components/NoPage' ));
// const Videos = lazy(() => import('./components/Videos' ));
// const Tips = lazy(() => import('./components/Tips' ));
// const Pizzas = lazy(() => import('./components/Pizzas' ));
// const Navbar = lazy(() => import('./components/Navbar' ));



function App() {
  
  return (
    <>
    <Navbar />
    <div className='container'>
    {/* <Suspense fallback={<div>Loading...</div>}> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pizzas' element={<Pizzas />} />
        <Route path='*' element={<NoPage />} />
        <Route path='/calculator' element={<Calculator />} />
        <Route path='/map' element={<PizzaMap />} />
        <Route path='/aboutus' element={<AboutUs />}/>
      </Routes>
    {/* </Suspense> */}
    </div>
    <Footer/>
    </>
  );
}

export default App;
