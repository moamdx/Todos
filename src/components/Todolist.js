import React from "react";
import Todo from './Todo';

const ToDoList = ({ todos,setTodos, filteredTodos }) => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {
                    filteredTodos.map((todo) => (
                        <Todo text={todo.text} key={todo.id} todo={todo} todos={todos} setTodos={setTodos} filteredTodos={filteredTodos} />
                    ))
                }
            </ul>

        </div>
    )
}

export default ToDoList;