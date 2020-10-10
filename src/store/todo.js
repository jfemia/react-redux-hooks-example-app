const ADD_TODO = "ADD_TODO";

const UPDATE_TODO = "UPDATE_TODO";
const DELETE_TODO = "DELETE_TODO";

export const addTodo = (title) => ({ type: ADD_TODO, payload: { title } });

export const updateTodo = (id, status) => ({ type: UPDATE_TODO, payload: { id, status }});
export const deleteTodo = (id) => ({ type: DELETE_TODO, payload: { id }});

const initialState = []
let nextId = 1

export default function(state = initialState, action) {
  switch(action.type) {
    case ADD_TODO:
      return [...state, { title: action.payload.title, id: nextId++ }];
    case UPDATE_TODO:
      {
        const toUpdateIndex = state.findIndex(t => t.id === action.payload.id);
        const newState = [...state];
        newState[toUpdateIndex] = { ...newState[toUpdateIndex], status: action.payload.status };
        return newState;
      }
    case DELETE_TODO:
      return [...state.filter(t => t.id !== action.payload.id)];
    default:
      return state;
  }
}