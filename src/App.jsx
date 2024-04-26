import { useState } from 'react';
import answers from "./assets/answers";
import ball from "./assets/ball";
import EightBall from './EightBall';
import './App.css'
const imageName = ball;
const App = () => {
  const [index, setIndex] = useState(0);
  return  <div>
      <img className='logo logo1' src={imageName} alt="" /> 
      <img className='logo logo2' src={imageName} alt="" /> 
      <img className='logo logo3' src={imageName} alt="" /> 
      <img className='logo logo4' src={imageName} alt="" /> 
      <div id='logo-box'>
        <img className='magic-logo' src="https://littleshopofpins.com/cdn/shop/products/magic_8_ball_01_Legal.jpg?v=1635970818" alt=''></img>
      </div>
      <div id="magic">
      <button id="reset" onClick={()=>(setIndex(0))}>Reset</button>
        <div className='magic-middle'>
          <div className='triangle'>
            <div id='fortune-box'><EightBall answers={answers} index={index} setIndex={setIndex}/></div>
          </div>
        </div>
      </div>
    </div>
}

export default App;
