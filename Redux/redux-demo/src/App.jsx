import { useDispatch, useSelector } from "react-redux"
import { decrement, increment, incrementByAmount, reset } from "./features/counterSlice";
import { useState } from "react";

const App=()=>{

  const count = useSelector(state=> state.counter.value);
  const dispatch = useDispatch();
  const [amount,setAmount]=useState(0);

  const incrementHandler=()=>{
    dispatch(increment());
  }
  const decrementHandler=()=>{
    dispatch(decrement());
  }
  const resetHandler=()=>{
    dispatch(reset());
  }
  const incrementByAmountHandler = () =>{
    dispatch(incrementByAmount(amount));
  }

return <div>
  <button onClick={incrementHandler}>+</button>
  <p>Count : {count}</p>
  <button onClick={decrementHandler}>-</button>
  <button onClick={resetHandler}>Reset</button>
  <input type="number" value={amount} onChange={(event)=>setAmount(+event.target.value)} />
  <button onClick={incrementByAmountHandler}>Update by amount</button>
</div>
}
export default App;