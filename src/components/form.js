import React from "react";




const Form = ({ setInputText, inputText, todos, setTodos, setStatus, setErrorText }) => {

    const inputTextHandler = (e) => {
        console.log(e.target.value);
        setInputText(e.target.value);

    };

    const submitHandler = (e) => {

        e.preventDefault();

        if(inputText)
        {
            setTodos([...todos,
                { text: inputText, completed: false, id: Date.now() }]);
        
        setInputText("");
        setErrorText("");

        }      
        

        else{
            setErrorText("please enter something")
        }
    }

    const satusHandler=(e)=>
    {
        setStatus(e.target.value)
    }


    return (
        <form >
            <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
            <button onClick={submitHandler} className="todo-button" type="submit">
                <i class="fa-solid fa-square-plus fa-2x"></i>
            </button>
            <div className="select">
                <select  onChange={satusHandler} name="todos" id="filter-todos">
                    <option value="all">all</option>
                    <option value="completed">completed</option>
                    <option value="not completed">not completed</option>
                </select>
            </div>

        </form>
    )
}

export default Form;