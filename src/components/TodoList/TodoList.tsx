import React, { useState, useCallback, ReactNode, ChangeEvent, FormEvent} from 'react';

import './TodoList.scss';
import TodoItem from '../TodoItem/TodoItem';
import { TodoItemInterface } from '../../types';
import AddTodoPanel from '../AddTodoPanel/AddTodoPanel';
import SearchPanel from '../SearchPanel/SearchPanel';
import ConfirmModal from '../ConfirmModal/ConfirmModal';

export default function TodoList() {
    const [todoList, setTodoList] = useState<TodoItemInterface[]>([])
    const [inputValue, setInputValue] = useState('');
    const [searchInputValue, setSearchInputValue] = useState('');
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [currentTodoId, setCurrentTodoId] = useState<number>();

    const removeTodo = (id: number) => setTodoList((prevState: TodoItemInterface[]): TodoItemInterface[] => {
        const index = prevState.findIndex(todo => todo.id === id);
        closeModal();
        return [
        ...prevState.slice(0, index),
        ...prevState.slice(index + 1)
        ]
    })

    const closeModal = () => {
        setIsModalVisible(false)
    }

    const openModal = useCallback(() => {
        setIsModalVisible(true)
    }, [])

    const passId = (id: number) => {
        setCurrentTodoId(id)
    }

    const handleTodoClick = useCallback(
        (id) => {
            const currentTodo = todoList.find(todo => todo.id === id) as TodoItemInterface;
            const index = todoList.findIndex(todo => todo.id === id);
            currentTodo.isDone = !currentTodo.isDone
            setTodoList((prevState: TodoItemInterface[]): TodoItemInterface[] => {
                return [
                    ...prevState.slice(0, index),
                    currentTodo,
                    ...prevState.slice(index + 1)
                ]
            })
        },
        [todoList]
    )

    const renderTodoList = useCallback (
        (todos: TodoItemInterface[]): ReactNode => {
            return todos.map((key: TodoItemInterface, index: number) => {
                return (
                    <TodoItem
                        key={index}
                        passId={passId}
                        todo={key}
                        handleTodoClick={handleTodoClick}
                        openModal={openModal}
                    />
                )
            })
        },
        [handleTodoClick, openModal]
    )

    const renderFilteredTodoList = useCallback(
        () => {
            const todos = todoList
            const filtered = todos.filter(todo => todo.name.toLowerCase().includes(searchInputValue.toLowerCase()))
            return renderTodoList(filtered)
        },
        [renderTodoList, todoList, searchInputValue]
    )

    const handleSubmit = useCallback(
        () => {
            setTodoList(
                (prevState: TodoItemInterface[]): TodoItemInterface[] => [
                    ...prevState,
                    {
                        id: new Date().valueOf(),
                        name: inputValue,
                        isDone: false
                    }
                ]
            )
            setInputValue('')
        },
        [inputValue],
    )

    const handleSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        const { value } = e.target as HTMLInputElement;
        setSearchInputValue(value)
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        const { value } = e.target as HTMLInputElement;
        setInputValue(value)
    }

    const handleKeyUp = (e: FormEvent<HTMLInputElement>) => {
        e.preventDefault();
        const { value } = e.currentTarget as HTMLInputElement;
        setInputValue(value)
    }

    return (
        <React.Fragment>
            <div className='todoList'>
                <SearchPanel
                    handleSearchInputChange={handleSearchInputChange}
                    searchInputValue={searchInputValue}
                    searchTodo={renderFilteredTodoList}
                />
                <div className='todoList__inner'>
                    <div className="todoList__list">
                        {renderFilteredTodoList()}
                    </div>
                </div>
                <div className="todoList__addTodo">
                    <AddTodoPanel
                        handleKeyUp={handleKeyUp}
                        inputValue={inputValue}
                        handleSubmit={handleSubmit}
                        handleChange={handleChange}
                    />
                </div>
            </div>
            <div className={isModalVisible ? "todoList__confirmModal" : "todoList__confirmModal__hidden"}>
                <ConfirmModal
                removeTodo={removeTodo}
                closeModal={closeModal}
                id={currentTodoId!}
                />
            </div>
        </React.Fragment>
    )
}

