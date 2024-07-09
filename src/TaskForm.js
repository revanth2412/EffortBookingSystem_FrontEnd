import React, { useState } from 'react';
import axios from 'axios';

function TaskForm() {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [status, setStatus] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/task', { name, description, status })
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.error("There was an error!", error);
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add Task</h2>
            <div>
                <label>Task Name:</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div>
                <label>Description:</label>
                <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} required />
            </div>
            <div>
                <label>Status:</label>
                <input type="text" value={status} onChange={(e) => setStatus(e.target.value)} required />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}

export default TaskForm;
