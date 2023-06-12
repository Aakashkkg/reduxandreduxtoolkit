import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { add, div, mul, sub } from './actions';
import { useState } from 'react';

function App() {
  const dispatch = useDispatch()

  const mystate = useSelector(state => state)
  const addsubstate = mystate.Addsub

  const divstate = mystate.Divmul
  const todostate = mystate.Todoapp
  const [inp, setinp] = useState("")

  return (
    <>
      {/* <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "150px" }}>
        <button onClick={() => dispatch(add(2))} style={{ background: "green", height: "35px", borderRadius: "3px", color: "white", marginRight: "10px", width: "80px", cursor: "pointer" }}>
          add +
        </button>
        <div>
          <div style={{ height: "30px", width: "80px", background: "lightgrey", textAlign: "center", alignItems: "center", padding: "6px 0px", fontSize: "23px" }}>{addsubstate}</div>
        </div>

        <div>
          <button onClick={() => dispatch(sub(1))} style={{ background: "green", height: "35px", borderRadius: "3px", color: "white", marginLeft: "10px", width: "80px", cursor: "pointer" }}>sub-</button>
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "150px" }}>
        <button onClick={() => dispatch(div(5))} style={{ background: "green", height: "35px", borderRadius: "3px", color: "white", marginRight: "10px", width: "80px", cursor: "pointer" }}>
          Divide
        </button>
        <div>
          <div style={{ height: "30px", width: "80px", background: "lightgrey", textAlign: "center", alignItems: "center", padding: "6px 0px", fontSize: "23px" }}>{divstate}</div>
        </div>

        <div>
          <button onClick={() => dispatch(mul(5))} style={{ background: "green", height: "35px", borderRadius: "3px", color: "white", marginLeft: "10px", width: "80px", cursor: "pointer" }}>mulitply</button>
        </div>
      </div> */}


      <div className='todoapp' >

        <div className='inp' >
          <input />
          <button>add</button>
        </div>

{todostate.map((row)=>{})}
        <div className='list'>
          <span>aakash</span>
          <span><button>del</button></span>
        </div>


      </div>


    </>
  );
}

export default App;
