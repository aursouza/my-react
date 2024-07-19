import './Task.css'
import { CgClose, CgInfo } from 'react-icons/cg'
import { useNavigate } from 'react-router-dom'

const Task = (props: any) => {
  const history = useNavigate()
  const handleTaskDetailsClick = () => {
    history(`/${props.task.title}`, { replace: true })
  }
  return (
    <div
      className="task-container"
      style={props.task.completed ? { borderLeft: '6px solid chartreuse' } : {}}
    >
      <div
        className="task-title"
        onClick={() => props.handleTaskClick(props.task.id)}
      >
        {props.task.title}
      </div>
      <div className="buttons-container">
        <button className="see-task-details" onClick={handleTaskDetailsClick}>
          <CgInfo />
        </button>
        <button
          onClick={() => props.handleTaskRemove(props.task.id)}
          className="remove-task-button"
        >
          <CgClose />
        </button>
      </div>
    </div>
  )
}

export default Task
