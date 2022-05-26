import logo from './logo.svg';
import './App.css';
import Pantalla from './componentes/pantalla.js';
import Boton from './componentes/boton.js';
import BotonClear from './componentes/boton-clear';
import { useState } from 'react';
import {evaluate} from 'mathjs';

function App() {

  const [input, setinput] = useState('');

  const agregarInput = val =>{
    setinput(input + val);
  };

  const calcularResultado = () => {
    if(input){
      setinput(evaluate(input));
    }
    else{
      alert("Ingrese valores para realizar los calculos");
    }
  };

  return (
    <div className='App'>
      <div className='cabecera'>
        <img src={logo} className="App-logo" alt="logo" />
        <p> Calculadora en React</p>
      </div>
      <div className='contenedor-principal'>
        <Pantalla input={input} />
        <div className='fila'>
          <Boton manejarClicks={agregarInput} >1</Boton>
          <Boton manejarClicks={agregarInput} >2</Boton>
          <Boton manejarClicks={agregarInput} >3</Boton>
          <Boton manejarClicks={agregarInput} >+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClicks={agregarInput} >4</Boton>
          <Boton manejarClicks={agregarInput} >5</Boton>
          <Boton manejarClicks={agregarInput} >6</Boton>
          <Boton manejarClicks={agregarInput} >-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClicks={agregarInput} >7</Boton>
          <Boton manejarClicks={agregarInput} >8</Boton>
          <Boton manejarClicks={agregarInput} >9</Boton>
          <Boton manejarClicks={agregarInput} >*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClicks={calcularResultado}>=</Boton>
          <Boton manejarClicks={agregarInput} >0</Boton>
          <Boton manejarClicks={agregarInput} >.</Boton>
          <Boton manejarClicks={agregarInput} >/</Boton>
        </div>
        <div className='fila'>
          <BotonClear manejarClear={()=> setinput('')}>

          </BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
