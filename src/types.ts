import {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, FormEvent } from "react";

export interface TodoItemProps {
    todo: TodoItemInterface
    handleTodoClick: (id: number) => void
    openModal: () => void
    passId: (id: number) => void
} 

export interface TodoItemInterface {
    id: number
    name: string
    isDone: boolean
}

export interface AddTodoPanelProps {
    inputValue: string
    handleSubmit: () => void
    handleChange: (event: ChangeEvent<HTMLInputElement>) => void
    handleKeyUp: (event: FormEvent<HTMLInputElement>) => void
}

export interface SearchPanelInterface {
    searchInputValue: string
    handleSearchInputChange: (event: ChangeEvent<HTMLInputElement>) => void
    searchTodo: () => void
}

export interface ConfirmModalInterface {
   removeTodo: (id: number) => void
   closeModal: () => void
   id: number
}