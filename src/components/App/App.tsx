import React from 'react';
import './App.scss';
import TodoList from '../TodoList/TodoList';

function App() {
  return (
    <div className="app__wrapper">
        <h1>ToDo Application</h1>
        <TodoList />
    </div>
  );
}

export default App;
