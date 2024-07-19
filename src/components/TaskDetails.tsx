import { useNavigate, useParams } from 'react-router-dom'
import Button from './Button'
import './TaskDetails.css'

export default function TaskDetails() {
  const params = useParams()
  const navigate = useNavigate()
  const handlebackButtonClick = () => {
    navigate('/', { replace: true })
  }
  return (
    <>
      <div className="back-button-container">
        <Button onClick={handlebackButtonClick}>Voltar</Button>
      </div>
      <div className="task-detail-container">
        <h2>{params.taskTitle}</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis harum
          ut tempora omnis mollitia accusantium vitae reprehenderit fuga,
          maiores, cupiditate labore similique dolores repellat esse distinctio
          reiciendis vel perspiciatis? Commodi.
        </p>
      </div>
    </>
  )
}
