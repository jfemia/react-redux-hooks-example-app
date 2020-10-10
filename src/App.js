import React, { useRef, useCallback } from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, updateTodo, deleteTodo } from './store/todo';

function App() {
  const todos = useSelector(state => state.todos);

  const dispatch = useDispatch();
  const inputRef = useRef();
  const onAdd = useCallback(() => {
    const todo = inputRef.current.value;
    dispatch(addTodo(todo));
  }, [inputRef, dispatch]);

  return (
    <div className="App">
      <header className="App-header">
        <input type="text" ref={inputRef} />
        <button onClick={onAdd}>Add</button>
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
