import TodoNew from "./TodoNew";
import TodoData from "./TodoData";
import reactLogo from '../../assets/react.svg' ;
import { useState } from 'react';
const TodoApp = ()=>{
    const[todosList,setTodos] = useState([
    
  ])
  
  const addNewTodo = (name) =>{
    const newTodo ={
      id:radomIntFromInterval(1,1000),
      name:name
    }
    setTodos([...todosList,newTodo])
  }
  const deleteTodo = (id) =>{
    const newTodos = todosList.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  }
  const radomIntFromInterval = (max,min)=>{
    return Math.floor(Math.random()*(max - min +1) + min)
  }
  return(
    <div className="todo-container">
    <div className="todo-title">Todo List</div>
    <TodoNew 
    addNewTodo ={addNewTodo}
    />
    {
      todosList.length > 0 ?
        <TodoData
     
    
      todosList ={todosList}
      deleteTodo = {deleteTodo}
    />
    :
      <div className='todo-image'>
      <img src={reactLogo}/>
    </div>
    }
    
    
   </div>
  )
}
export default TodoApp;