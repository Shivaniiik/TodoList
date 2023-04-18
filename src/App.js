import { useState } from 'react';
import './App.css';
import {useDispatch, useSelector} from 'react-redux'
import { Form } from './components/Form';
import Todo from './components/Todo';
import { deleteAll } from './redux/todoapp/actions';



function App() {
  const dispatch = useDispatch();
  const todos = useSelector((state)=>state.operationsReducer)
  const [editTodo, setEditTodo] = useState("");
  const [editFormVisibility , setEditFormVisibility] =useState(false)
  
  const handleEditClick=(todo)=> {
    setEditFormVisibility(true);
    setEditTodo(todo);
  }
  return (
    <div className="App">
      
      <h1>Todo App</h1>
      <Form editFormVisibility={editFormVisibility} editTodo={editTodo}/>
      <Todo handleEditClick={handleEditClick} editFormVisibility={editFormVisibility} style={{display: "inline-block"}}/>
      {todos.length >0 &&(
        <button style={{backgroundColor: 'black', color: 'white',fontWeight: 'bold',marginTop: 20, marginRight: 10}} onClick={()=>dispatch(deleteAll())}>DELETE ALL</button>
      )}
      

    </div>
  );
}

export default App;
