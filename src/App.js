import React from 'react';
import './App.css';
import EffortForm from './EffortForm';
import TaskForm from './TaskForm';

function App() {
    return (
        <div className="App">
            <h1>Project Tracker</h1>
            <EffortForm />
            <TaskForm />
        </div>
    );
}

export default App;
