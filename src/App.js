import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {incNumber,decNumber } from "./actions/index";
import 'bootstrap/dist/css/bootstrap.min.css';



const App = () => {
  const myState = useSelector((state) => state.changeTheNumber)
  const dispatch = useDispatch();
 
  return (
    <div className="container" >
      <h1>Increment / Decrement</h1>
      <h4>Using React and Redux</h4>
      <div className="quentity" >
        <a className="quentity_minus"   title="Decrement" onClick={() => dispatch(decNumber())} ><span type="button" class="btn btn-danger">-</span></a>
        <span class="jumbotron" >
         <span style={{borderStyle:"none",paddingLeft:"50px" ,paddingRight:"50px",fontSize:"50px"}} type="text" className="quentity_input" >{myState}</span>
        </span>
      
        <a className="quentity_plus" title="Increment" onClick={ () => dispatch(incNumber(5))} ><span type="button" class="btn btn-success" >+</span></a>
      </div>
      
      
    </div>
  )
}

export default App
