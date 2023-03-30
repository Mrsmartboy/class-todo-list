import './index.css'

const TodoItem = props => {
  const {eachTodo, onDelete} = props
  const {title, id} = eachTodo

  const onDeleteButton = () => {
    onDelete(id)
  }

  return (
    <li className="item-container">
      <p className="title">{title}</p>
      <button type="button" className="button" onClick={onDeleteButton}>
        delete
      </button>
    </li>
  )
}

export default TodoItem
