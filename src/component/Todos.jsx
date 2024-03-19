import React, { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';

import { removeTodo, updateTodo } from '../features/todo/todoSlice';

const Todos = () => {
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();
    const [editedTodo, setEditedTodo] = useState({ id: null, text: '' });

    const handleEdit = (id, text) => {
        setEditedTodo({ id, text });
    };

    const handleUpdate = () => {
        dispatch(updateTodo(editedTodo));
        setEditedTodo({ id: null, text: '' });
    };

    const cancelEdit = () => {
        setEditedTodo({ id: null, text: '' });
    };

    return (
        <div>
            <div>Todos</div>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        {editedTodo.id === todo.id ? (
                            <>
                                <input
                                    type="text"
                                    value={editedTodo.text}
                                    onChange={(e) => setEditedTodo({ ...editedTodo, text: e.target.value })}
                                    placeholder="Edit todo..."
                                />
                                <button className='m-2' onClick={handleUpdate}>
                                    Update
                                </button>
                                <button className='m-2' onClick={cancelEdit}>
                                    Cancel
                                </button>
                            </>
                        ) : (
                            <>
                                {todo.text}
                                <button className='m-2' onClick={() => handleEdit(todo.id, todo.text)}>
                                    <AiOutlineEdit />
                                </button>
                                <button className='m-2' onClick={() => dispatch(removeTodo(todo.id))}>
                                    <AiOutlineDelete />
                                </button>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Todos;
