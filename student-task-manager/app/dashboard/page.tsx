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

const topBar: React.CSSProperties = {
  height: "88px",
  background: "#ffffff",
  borderBottom: "1px solid #e5edf7",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 32px",
};

const greeting: React.CSSProperties = {
  margin: 0,
  fontSize: "14px",
  color: "#7a8799",
  fontWeight: 600,
};

const pageTitle: React.CSSProperties = {
  margin: "4px 0 0",
  fontSize: "28px",
  color: "#1f2a44",
};

const topBarActions: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "12px",
};

const iconButton: React.CSSProperties = {
  width: "42px",
  height: "42px",
  borderRadius: "12px",
  border: "1px solid #e5edf7",
  background: "#ffffff",
  display: "grid",
  placeItems: "center",
  cursor: "pointer",
  fontSize: "18px",
};

const topAvatar: React.CSSProperties = {
  width: "42px",
  height: "42px",
  borderRadius: "50%",
  background: "#2f80d7",
  color: "#ffffff",
  display: "grid",
  placeItems: "center",
  fontWeight: 700,
};

const appLayout: React.CSSProperties = {
  minHeight: "100vh",
  display: "flex",
  background: "#f3f7fc",
};

const mainArea: React.CSSProperties = {
  flex: 1,
  minHeight: "100vh",
};

const dashboardContent: React.CSSProperties = {
  padding: "32px",
};

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
        <div style={appLayout}>
              <div className="flex flex-1">
                <SideBar />

                {/* Main Content */}
                <main style={mainArea}>
                    <header style={topBar}>
                        <div>
                            <p style={greeting}>Good morning, Scholar</p>
                            <h1 style={pageTitle}>Dashboard</h1>
                        </div>

                        <div style={topBarActions}>
                            <button style={iconButton} aria-label="Notifications">
                            🔔
                            </button>

                            <div style={topAvatar}>N</div>
                        </div>
                    </header>

                    <section style={dashboardContent}>
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
                    </section>
                </main>
              </div>
           </div>
    );
};