import { useEffect, useState } from "react";
import './App.css'

function Counter() {

  const [count, setCount] = useState(0);

  const Increment = () => {
    setCount((prevCount) => prevCount + 1) ;
  }

  useEffect(() => {
    const interval = setInterval(Increment, 1000);
    return () => clearInterval(interval);
  }, []);

  return {count}

}

function App() {
  const {count} = Counter();
  return(
    <div className="bg-container">
      <h1 className="heading">
        Counter App
      </h1>
      <h1 className="timer"> Timer:<span className="span"> { count } </span> </h1>
      <p className="phara">This Counter is created using setInterval method, for automatic Timer</p>
    </div>
  )
}

export default App