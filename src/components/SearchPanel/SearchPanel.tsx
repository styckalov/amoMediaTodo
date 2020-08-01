import React from 'react'

import {SearchPanelInterface} from '../../types'
import './SearchPanel.scss'

export default function SearchPanel({searchInputValue, handleSearchInputChange, searchTodo}: SearchPanelInterface) {
    return (
        <div className="searchPanel">
            <input 
            className="searchPanel__input" 
            onChange={handleSearchInputChange} 
            value={searchInputValue} 
            onKeyUp={searchTodo} 
            placeholder="Enter task name for search..."
            type="text"
            />
        </div>
    )
}
