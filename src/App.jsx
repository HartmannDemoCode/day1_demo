import { useState } from 'react';
import Names from './Names';
import Cars from './Cars';
import Cars2 from './Cars2';
import './App.css';

const cars = [{id:101 ,brand:"Audi",make:"A1"},{id: 102,brand:"VW",make:"UP"},{id: 103,brand:"Volvo",make:"xc90"}];
const Wellcome = (props) => {
  return <h1>Hello, {props.name} {props.age}</h1>;
}

function App() {
  return (
    <div className="App">
     <Names/>
     <Wellcome name="Helga" age={23} />
     <Wellcome name="Holger" age={43} />
     <Cars cars={cars}/>
     <Cars2 cars={cars}/>
    </div>
  )
}
const Test = ()=>"Hello"
const test2 = ()=>{return "Hello"}

export default App
export {Test, test2}

