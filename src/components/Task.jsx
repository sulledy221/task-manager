

export default function Task({ task }) {
  return(
    <div key={task.id}>
      <h4>{task.title} {task.date}</h4>
    </div>
  )
}