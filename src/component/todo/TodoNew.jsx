import { useState } from "react";

const TodoNew = (props) => {
    const[valueInput,setValueInput] = useState("eric");
    const{addNewTodo} = props;
    const handleClick = () =>{
        addNewTodo(valueInput)
        setValueInput("")
    }
    const handleOnChange = (name) =>{
        
        setValueInput(name)
        
    }
    return(
    <div>
        <input type="text" className='todo-input' onChange={(event) =>{handleOnChange(event.target.value)}} value={valueInput}/>
        <button className='todo-submit' onClick={handleClick}>Add</button>
        <div>My text input is {valueInput}</div>
    </div>
    )
}
export default TodoNew;