import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, updateTodo, deleteTodo } from './store/todo';
import './App.css';

function App() {
  const todos = useSelector(state => state.todo);

  const dispatch = useDispatch();
  const inputRef = useRef();

  return (
    <div className="App">
      <header className="App-header">
        <input type="text" ref={inputRef} />
        <button onClick={() => dispatch(addTodo(inputRef.current.value))}>Add</button>
        <ul>
          {todos.map(t => 
            <li key={t.id}>
              ({t.id}) {t.title} {t.status && `[${t.status}]`} 
              { t.status !== "done" && <button onClick={() => dispatch(updateTodo(t.id, "done"))}>Done</button>}
              <button onClick={() => dispatch(deleteTodo(t.id))}>X</button>
            </li>)}
        </ul>
      </header>
    </div>
  );
}

export default App;
