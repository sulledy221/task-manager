import Task from './Task'

export default function Tasks({ tasks, onToggleStatus }) {
  return (
    <div className="card">
      <div className="row">
        {tasks.map((task) => (
          <div className="col-12" key={task.id}>
            <Task task={task} onTglStatus={onToggleStatus} />
          </div>
        ))}
      </div>
    </div>
  );
}
