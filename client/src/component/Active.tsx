import './component.css'
import { useStore } from '../store/store'

const Active = () => {
  const { todos } = useStore();

  return (
    <div className='activetitle'>
      <h1>Active</h1>
      <div className='activeline'></div>
      {todos.map((todo) => (
        <div key={todo.id}>{todo.task}</div>
      ))}
    </div>
  )
}

export default Active