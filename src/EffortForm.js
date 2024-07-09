import React, { useState } from 'react';
import axios from 'axios';

function EffortForm() {
    const [name, setName] = useState("");
    const [effort, setEffort] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/effort', { name, effort })
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.error("There was an error!", error);
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Log Effort</h2>
            <div>
                <label>Name:</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div>
                <label>Effort:</label>
                <input type="text" value={effort} onChange={(e) => setEffort(e.target.value)} required />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}

export default EffortForm;
