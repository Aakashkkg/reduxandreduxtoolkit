import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';

function App() {

const mystate = useSelector(state=>state)
const addsubstate = mystate.Addsub
  console.log(addsubstate)


  const dispatch = useDispatch()
  return (
    <>
{/* ma, */}
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "150px" }}>
        <button onClick={()=>dispatch()} style={{ background: "green", height: "35px", borderRadius: "3px", color: "white", marginRight: "10px", width: "80px", cursor: "pointer" }}>
          add +
        </button>
        <div>
          <div style={{ height: "30px", width: "80px", background: "lightgrey", textAlign: "center", alignItems: "center", padding: "6px 0px", fontSize: "23px" }}>{addsubstate}</div>
        </div>

        <div>
          <button onClick={()=>dispatch()}  style={{ background: "green", height: "35px", borderRadius: "3px", color: "white", marginLeft: "10px", width: "80px", cursor: "pointer" }}>sub-</button>
        </div>
      </div>

    </>
  );
}

export default App;
