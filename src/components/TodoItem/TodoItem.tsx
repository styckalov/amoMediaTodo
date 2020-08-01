import React from 'react'

import { TodoItemProps } from '../../types'
import './TodoItem.scss'

export default function TodoItem({todo, passId, openModal, handleTodoClick}: TodoItemProps, ) {
    return (
        <div className="todoItem">
            <p onClick={() => handleTodoClick(todo.id)} className={todo.isDone ? 'todoItem__text__done' : 'todoItem__text'}>{todo.name}</p>
            {todo.isDone && <button className="todoItem__button" onClick={() => {openModal(); passId(todo.id)}}>Delete</button>}
        </div>
    )
}
