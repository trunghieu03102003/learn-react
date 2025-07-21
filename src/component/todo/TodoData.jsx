const TodoData = (props) => {
    const {todosList,deleteTodo} = props;
    return(
    <div className="todo-data">
        {todosList.map((todo,index) =>{
            return (
                <div className={`todo-item`} key={index} id={todosList.id}>
                    <div>
                     My is {todo.name}
                    </div>
                   <button className="todo-item-delete" onClick={() =>{deleteTodo(todo.id)}}>Delete</button>
                </div>
            )
            
        })}
    </div>
    )
}
export default TodoData;