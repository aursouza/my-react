import { useState } from 'react'
import './AddTask.css'
import Button from './Button'

export default function AddTask(props: any) {
  const [inputData, setInputData] = useState('')

  const handleInputChange = (event: any) => {
    setInputData(event.target.value)
  }
  const handleAddTaskClick = (event: any) => {
    props.Addition(inputData)
    setInputData('')
  }
  return (
    <div className="add-task-container">
      <input
        onChange={handleInputChange}
        value={inputData}
        type="text"
        className="add-task-input"
      />
      <Button onClick={handleAddTaskClick}>Adicionar</Button>
    </div>
  )
}
