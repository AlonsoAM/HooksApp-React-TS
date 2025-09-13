interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TasksState {
  todos: Todo[]
  length: number
  completedCount: number
  pendingCount: number
}

export type TasksAction =
  { type: 'ADD_TODO', payload: string } |
  { type: 'TOGGLE_TODO', payload: number } |
  { type: 'DELETE_TODO', payload: number }

export const getTasksInitialState = (): TasksState => {
  return {
    todos: [],
    length: 0,
    completedCount: 0,
    pendingCount: 0,
  }
}

export const tasksReducer = (state: TasksState, action: TasksAction): TasksState => {

  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        length: state.length + 1,
        pendingCount: state.pendingCount + 1,
        todos: [
          ...state.todos,
          {
            id: Date.now(),
            text: action.payload,
            completed: false,
          }
        ]
      }
    case "DELETE_TODO": {
      const currentTodos = state.todos.filter(todo => todo.id !== action.payload)
      return {
        ...state,
        todos: currentTodos,
        length: currentTodos.length,
        completedCount: currentTodos.filter(todo => todo.completed).length,
        pendingCount: currentTodos.filter(todo => !todo.completed).length,
      }
    }

    case "TOGGLE_TODO": {
      const updatedTodos = state.todos.map(todo =>
        todo.id === action.payload
          ? {...todo, completed: !todo.completed}
          : todo
      )
      return {
        ...state,
        completedCount: updatedTodos.filter(todo => todo.completed).length,
        pendingCount: updatedTodos.filter(todo => !todo.completed).length,
        length: state.length,
        todos: updatedTodos
      }
    }

    default:
      return state
  }
}