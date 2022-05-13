
import FunctionalComponent from './Components/FunctionalComponent';
import ClassComponent from './Components/ClassComponent';
import './Components/Style.css'
import { useState } from 'react';
function App() {
  const[toggle1,setToggle1]=useState(false);
  const[toggle2,setToggle2]=useState(false);

    return (
    <div className="App">
      <h1 style={{fontSize:"3vw" , marginLeft:"12vw" , textDecoration:"underline"}}>Style Using Function Component and Class Component</h1>
      <div className="hidden">
      <header1>  
      <button onClick={()=>{toggle1?setToggle1(false):setToggle1(true)}}>Made with Functional Component</button>
      {toggle1 && <FunctionalComponent />} 
      </header1>

      <header2>
      <button onClick={()=>{toggle2?setToggle2(false):setToggle2(true)}} >Made with Class Component</button>
      {toggle2 && <ClassComponent />}
      </header2>
      </div>
    </div>
  );
}

export default App;
