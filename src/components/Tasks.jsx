import Task from './Task'

export default function Tasks({ tasks }) {
  return (
    <div>
    <div>
      <button>New</button>
    </div>
    {tasks.map((task) => (
      <Task task={task} key={task.id} />
    ))}
    </div>
  )
}