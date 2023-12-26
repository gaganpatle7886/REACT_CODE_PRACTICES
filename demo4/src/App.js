
import './App.css';

function App() {
    const mystyle = {
      color: "white",
      backgroundColor: "DodgerBlue",
      padding: "10px",
      fontFamily: "Sans-Serif"
    };
  
  return (
    <>
    <h1 style={{ color:"red", backgroundColor:'green'}}>CSS Inline Styling</h1>

    <h2 style={mystyle}>Internal CSS</h2>

    <h3>External CSS</h3>
    </>
  );
}

export default App;
