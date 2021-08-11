export default function Task({ task, onToggleStatus }) {
  return (
    <div className="card text-left" key={task.id}>
      <div className="row">
        <div className="col-10">
          <h4>{task.title}</h4>
          <div className="task-meta">
            {task.date}
          </div>
        </div>

        <div className="col-2 is-center">
          {task.complete}
          <button
            className="button icon-only clear"
            onClick={() => onToggleStatus(task)}>
            {task.complete && "✅"}
            {!task.complete && "⬜"}
          </button>
        </div>
      </div>
    </div>
  );
}
