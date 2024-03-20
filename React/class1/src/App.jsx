import { FunctionSample } from "./components/FunctionSample"
import "./css/student.css"

function App() {
  
  const handleClick = ()=>
  {
      alert("Button Clicked")
  }

  return (
   <>
   <div>
    <p>Parent Component</p>
    <FunctionSample handleClick={handleClick} />
   </div>
  
   </>
  )
}

export default App
