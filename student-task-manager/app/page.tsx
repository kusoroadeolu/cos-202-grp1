"use client"

import React, { useState } from 'react';
import Link from "next/link";
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
            <div className="flex flex-col min-h-screen">

            {/* Heading */}
            <header className="w-full flex justify-end p-6" style={{position: "sticky", top: 0, zIndex: 1000, background: "white"}}>
                <div className="flex gap-6" >
                    <Link
                    href="/login"
                    className="px-4 py-2 border border-[#2F80D1] text-[#2F80D1] rounded"
                    >
                    Login
                    </Link>

                    <Link
                    href="/sign-up"
                    className="px-4 py-2 bg-[#2F80D1] text-white rounded"
                    >
                    Sign Up
                    </Link>
                </div>
            </header>

            <div className="flex flex-1">
                <SideBar />

                {/* Main Content */}
                <main className="flex-1 pt-10 px-10">
                    <h1 className="text-3xl font-bold mb-10 text-[#2F80D1]">Student Task Manager</h1>
                
                    {/* Add New Task */}
                    <div style={{ marginBottom: '20px' }}>
                        <input
                            type="text"
                            value={newTask}
                            onChange={(e) => setNewTask(e.target.value)}
                            placeholder="Add new task"
                            style={{ padding: '10px', width: '300px', color: "#A7ADB5" }}
                        />
                        <button onClick={addTask} style={{ padding: '10px', marginLeft: '10px' }}>Add Task</button>
                    </div>

                    {/* Task Cards */}
                    <div>
                        {tasks.map(task => (
                            <div key={task.id} style={{ border: 'none', backgroundColor: "#E8F0FA" , padding: '10px', marginBottom: '10px', display: 'flex', justifyContent: 'space-between' }}>
                                <div>
                                    <h3 style={{ textDecoration: task.completed ? 'line-through' : 'none', color: "#2A3342" }}>{task.title}</h3>
                                    <p>Due: {task.dueDate}</p>
                                </div>
                                <button onClick={() => toggleComplete(task.id)} style={{color: "#2F80D1"}}>
                                    {task.completed ? 'Mark Incomplete' : 'Mark Complete'}
                                </button>
                            </div>
                        ))}
                    </div>
                </main>
            </div>
        </div>
    );
};