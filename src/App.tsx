import { useEffect, useState } from 'react'
import AddTask from './components/AddTask'
import Header from './components/Header'
import Tasks from './components/Tasks'
import { v4 as uuidv4 } from 'uuid'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TaskDetails from './components/TaskDetails'
import NoPage from './components/NoPage'
import axios from 'axios'

export default function App() {
  const [tasks, setTasks] = useState([
    {
      id: '2b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed',
      title: 'Estudar Programação',
      completed: true,
    },
    {
      id: '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed',
      title: 'Estudar',
      completed: false,
    },
    {
      id: '1a9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed',
      title: 'Ler Livros',
      completed: false,
    },
  ])

  useEffect(() => {
    const fetchTasks = async () => {
      const response = await axios.get(
        'https://jsonplaceholder.cypress.io/todos?_limit=10'
      )
      setTasks(response.data)
    }

    fetchTasks()
  }, [])

  const handleTaskClick = (taskId: string) => {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) return { ...task, completed: !task.completed }
      return task
    })
    setTasks(newTasks)
  }
  const handleTaskAddition = (taskTitle: string) => {
    const newTasks = [
      ...tasks,
      { title: taskTitle, id: uuidv4(), completed: false },
    ]
    setTasks(newTasks)
  }
  const handleTaskRemove = (taskId: string) => {
    const newTasks = tasks.filter((task) => task.id !== taskId)
    setTasks(newTasks)
  }
  return (
    <div className="container">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            index
            element={
              <>
                <AddTask Addition={handleTaskAddition} />
                <Tasks
                  tasks={tasks}
                  handleTaskClick={handleTaskClick}
                  handleTaskRemove={handleTaskRemove}
                />
              </>
            }
          />
          <Route path="/:taskTitle" element={<TaskDetails />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
