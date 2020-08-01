import React from 'react'

import { AddTodoPanelProps } from '../../types'
import './AddTodoPanel.scss'


export default function AddTodoPanel({inputValue, handleKeyUp, handleSubmit, handleChange}: AddTodoPanelProps) {
    return (
        <div className="addTodoPanel">
            <input className="addTodoPanel__input" onChange={handleChange} value={inputValue} type="text" onKeyUp={handleKeyUp} 
                placeholder='Enter task and press "Add Task" Button'/>
            <button className="addTodoPanel__button" disabled={inputValue ? false : true} onClick={() => handleSubmit()}>
                Add Task!
            </button>
        </div>
    )
}
