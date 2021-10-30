import React,{useState} from 'react'
export default function App() {
  const [counter, setCounter] = useState(0);
  return (
    <React.Fragment>
      <div className="container text-center">
        <button onClick={() => setCounter(c => c + 1)} className="my-4 btn btn-outline-success">Count Up</button>
        <h1>{counter}</h1>
        <button onClick={() => setCounter(c => c - 1)} className="my-4 btn btn-outline-danger">Count Down</button>
      </div>
    </React.Fragment>
  );
}
 