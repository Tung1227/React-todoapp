import react, { useState } from "react";
import { AiOutlineClose } from 'react-icons/ai'

function Todo({ todos, completeTodo, removeTodo }) {
    // todos = Array.from(todos);
    // console.log(Array.isArray(todos))
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    });
    return todos.map((todo, index) => (
        <div className="between">
            <div
                className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
                key={index}
            >
                <div key={todo.id} onClick={() => completeTodo(todo.id)}>
                    {todo.text}
                </div>
                <div className="icons">
                    <AiOutlineClose
                        onClick={() => removeTodo(todo.id)} />
                </div>
            </div>
        </div>


    ));
}
export default Todo;