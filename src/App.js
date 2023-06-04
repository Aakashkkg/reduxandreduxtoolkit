import logo from './logo.svg';
import './App.css';

function App() {

  
  return (
    <>

      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "150px" }}>
        <button style={{ background: "green", height: "35px", borderRadius: "3px", color: "white", marginRight: "10px", width: "80px", cursor: "pointer" }}>
          add +
        </button>
        <div>
          <div style={{ height: "30px", width: "80px", background: "lightgrey", textAlign: "center", alignItems: "center", padding: "6px 0px", fontSize: "23px" }}>0</div>
        </div>

        <div>
          <button style={{ background: "green", height: "35px", borderRadius: "3px", color: "white", marginLeft: "10px", width: "80px", cursor: "pointer" }}>sub-</button>
        </div>
      </div>

    </>
  );
}

export default App;
