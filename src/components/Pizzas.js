import * as React from 'react';
import pizza1 from '../assets/inox01.png';
import pizza2 from '../assets/inox02.png';
import pizza3 from '../assets/inox03.png';
import pizza4 from '../assets/inox04.png';
import pizza5 from '../assets/inox05.png';
import pizza6 from '../assets/inox06.png';
import pizza7 from '../assets/inox07.png';
import pizza8 from '../assets/inox08.png';
import pizza9 from '../assets/inox09.png';
import pizza10 from '../assets/inox10.png';
import pizza11 from '../assets/inox11.png';
import pizza12 from '../assets/inox12.png';

import '../App.css';


export const Pizzas = () => {
  return (
    <>
  <div className='Pizzas-Color'>
  <p className='quote-text'> "Cung cấp các mặt hàng bằng sắt/inox"
  </p>
 

    <div className="pizza-container">
        <img src={pizza1} alt="Girl in a jacket" className="pizza-photo"></img>
        <img src={pizza2} alt="Girl in a jacket" className="pizza-photo"></img>
        <img src={pizza3} alt="Girl in a jacket" className="pizza-photo"></img>
        <img src={pizza4} alt="Girl in a jacket" className="pizza-photo"></img>
        <img src={pizza5} alt="Girl in a jacket" className="pizza-photo"></img>
        <img src={pizza6} alt="Girl in a jacket" className="pizza-photo"></img>
        <img src={pizza7} alt="Girl in a jacket" className="pizza-photo"></img>
        <img src={pizza8} alt="Girl in a jacket" className="pizza-photo"></img>
        <img src={pizza9} alt="Girl in a jacket" className="pizza-photo"></img>
        <img src={pizza10} alt="Girl in a jacket" className="pizza-photo"></img>
        <img src={pizza11} alt="Girl in a jacket" className="pizza-photo"></img>
        <img src={pizza12} alt="Girl in a jacket" className="pizza-photo"></img>
    </div>

    </div>
    
  </>
  )
}
