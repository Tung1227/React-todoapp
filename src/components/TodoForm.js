import React, { useState } from "react";
import { AiOutlinePlusCircle} from 'react-icons/ai'

function TodoForm(props) {
    const [input, setInput] = useState('');

    const handleChange = e =>{
        setInput(e.target.value)
    }
    const handleSubmit  = e=>{
        e.preventDefault();

        props.onSubmit({
            id:Math.floor(Math.random()*1000),
            text:input,
            isComplete:false
        });
        setInput('')
    }
    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Input to do"
                value={input} name="text"
                className="todo-input"
                onChange={handleChange}
            />
            <AiOutlinePlusCircle 
            className="todo-button"
            onClick={handleSubmit}
            />
        </form>
    )
}

export default TodoForm;