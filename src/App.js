import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { Adata, add, deldata, div, mul, sub } from './actions';
import { useState } from 'react';

function App() {
  const dispatch = useDispatch()

  const mystate = useSelector(state => state)
  const addsubstate = mystate.Addsub

  const divstate = mystate.Divmul
  let todostate = mystate.Todoapp
  const [inp, setinp] = useState("")

  const [t, setto] = useState(todostate)

  function addd() {
    if (inp == "") {

    }else{
      let a = todostate.some((ele) => ele == inp)
      if (a) {
        alert("this name is already added")
      } else {
        dispatch(Adata(inp))
        setinp("")
        let addat = mystate.Todoapp
        setto(()=>[...addat])
      }

    }
  }

  // console.log(todostate)
  function del(ex) {
    dispatch(deldata(ex))
    let updatestate = mystate.Todoapp
    setto(()=>[...updatestate])
  }

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "100px" }}>
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

      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "100px" }}>
        <button onClick={() => dispatch(div(5))} style={{ background: "green", height: "35px", borderRadius: "3px", color: "white", marginRight: "10px", width: "80px", cursor: "pointer" }}>
          Divide
        </button>
        <div>
          <div style={{ height: "30px", width: "80px", background: "lightgrey", textAlign: "center", alignItems: "center", padding: "6px 0px", fontSize: "23px" }}>{divstate}</div>
        </div>

        <div>
          <button onClick={() => dispatch(mul(5))} style={{ background: "green", height: "35px", borderRadius: "3px", color: "white", marginLeft: "10px", width: "80px", cursor: "pointer" }}>mulitply</button>
        </div>
      </div>


      <div className='todoapp' >

        <div className='inp' >
          <input value={inp} onChange={(e) => setinp(e.target.value)} />
          <button onClick={addd}>add</button>
        </div>

        {t.map((row, index) => (
          <div className='list' key={index}>
            <span>{row}</span>
            <span><button onClick={() => del(index)}>del</button></span>
          </div>
        ))}

      </div>


    </>
  );
}

export default App;
