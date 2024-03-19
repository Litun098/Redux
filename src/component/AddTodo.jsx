import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todoSlice';


const AddTodo = () => {
    const [inputs, setInputs] = useState("")
    const dispatch = useDispatch();

    const addTodoHandler = (e) => {
        e.preventDefault();
        dispatch(addTodo(inputs))
        setInputs("")
    }
    return (
        <div>
            <form onSubmit={addTodoHandler}>
                <input type="text"
                    placeholder='Enter a todo...'
                    value={inputs}
                    onChange={(e) => setInputs(e.target.value)}
                />
                <button type='submit'>Add Todo</button>
            </form>
        </div>
    )
}

export default AddTodo
