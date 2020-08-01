import React from 'react'

import { ConfirmModalInterface } from '../../types'
import './ConfirmModal.scss'

export default function ConfirmModal({id, removeTodo, closeModal}: ConfirmModalInterface) {
    return (
        <div className="confirmModal">
            <div className="confirmModal__question">
                <p>Are you sure you want to delete this ToDo item?</p>
            </div>
            <div className="confirmModal__buttons">
                <button className="confirmModal__okButton" onClick={() => removeTodo(id)}>OK</button>
                {console.log(id)}
                <button className="confirmModal__cancelButton" onClick={() => closeModal()}>Cancel</button>
            </div>
        </div>
    )
}
