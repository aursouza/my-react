import Task from './Task'

export default function Tasks(props: any) {
  const { tasks } = props
  return (
    <>
      {tasks.map((task: any) => (
        <Task
          task={task}
          key={task.id}
          handleTaskClick={props.handleTaskClick}
          handleTaskRemove={props.handleTaskRemove}
        />
      ))}
    </>
  )
}
