"use client"

import React, { useState } from 'react';
import SideBar from "@/components/SideBar";

interface Task {
    id: number;
    title: string;
    completed: boolean;
    dueDate: string;
}

export default function Home() {
    const [tasks, setTasks] = useState<Task[]>([
        { id: 1, title: 'Complete homework', completed: false, dueDate: '2023-10-01' },
        { id: 2, title: 'Study for exam', completed: true, dueDate: '2023-10-02' },
    ]);
    const [newTask, setNewTask] = useState('');

    const addTask = () => {
        if (newTask.trim()) {
            const task: Task = {
                id: Date.now(),
                title: newTask,
                completed: false,
                dueDate: new Date().toISOString().split('T')[0],
            };
            setTasks([...tasks, task]);
            setNewTask('');
        }
    };

    const toggleComplete = (id: number) => {
        setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
    };

    return (
        <div style={{ display: "flex" }}>
            <SideBar />

            {/* Main Content */}
            <main style={{ flex: 1, padding: '20px' }}>
                <h1>Student Task Manager</h1>
                
                {/* Add New Task */}
                <div style={{ marginBottom: '20px' }}>
                    <input
                        type="text"
                        value={newTask}
                        onChange={(e) => setNewTask(e.target.value)}
                        placeholder="Add new task"
                        style={{ padding: '10px', width: '300px' }}
                    />
                    <button onClick={addTask} style={{ padding: '10px', marginLeft: '10px' }}>Add Task</button>
                </div>

                {/* Task Cards */}
                <div>
                    {tasks.map(task => (
                        <div key={task.id} style={{ border: '1px solid #ddd', padding: '10px', marginBottom: '10px', display: 'flex', justifyContent: 'space-between' }}>
                            <div>
                                <h3 style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>{task.title}</h3>
                                <p>Due: {task.dueDate}</p>
                            </div>
                            <button onClick={() => toggleComplete(task.id)}>
                                {task.completed ? 'Mark Incomplete' : 'Mark Complete'}
                            </button>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
};