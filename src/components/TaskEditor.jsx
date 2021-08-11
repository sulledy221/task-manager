import { useState } from "react";

export default function TaskEditor({ task, onSaveTask }) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  const saveTask = (e) => {
    e.preventDefault();
    saveTask({ title: title, date: date });

    setTitle("");
    setDate("");
  };
  return (
    <div className="card">
      <h3>Add Task</h3>
      <form>
        <label htmlFor="title">Description</label>
        <input
          type="text"
          name="title"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label htmlFor="date">Date</label>
        <input
          type="text"
          name="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <div className="text-right">
          <button className="button dark" onClick={saveTask}>
            Save
          </button>
        </div>
      </form>
    </div>
  );
}