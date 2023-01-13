
import { text } from 'node:stream/consumers';
import React, { useEffect } from 'react';
import { RootState, useAppDispatch, useAppSelector } from './store';
import { removeTodo, fetchTodos} from './store/counterSlice';
function App() {
const dispatch = useAppDispatch()
const {status,error} = useAppSelector((state:RootState)=> state.posts)
const text= useAppSelector((state:RootState)=> state.posts.posts)
console.log(text)
useEffect(()=>{
  dispatch(fetchTodos())
},[dispatch])
  return(
   <div className='App'>
    <p>sdfsd</p>
   {status === "Loading" &&  <h1>...Loading</h1>} 
    {error && <h1>{error}</h1>}
  <ul>
     {text.map((todo)=><li key={todo.id}>
      <span>{todo.title}</span>
      <span onClick={()=>dispatch(removeTodo(todo.id))}>&times;</span>
    </li>)}

  </ul>
    </div>
  );
}

export default App;
