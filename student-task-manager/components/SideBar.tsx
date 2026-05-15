export default function Sidebar() {
    return (
        <aside
            style={{
                width: '200px',
                padding: '20px',
                borderRight: '1px solid #E9631A',
                height: '100vh'
            }}
        >
            <h2>Menu</h2>

            <ul style={{ listStyle: 'none', padding: 0 }}>
                <li><a href="#dashboard">Dashboard</a></li>
                <li><a href="#today">Today's Tasks</a></li>
                <li><a href="#completed">Completed Tasks</a></li>
                <li><a href="#upcoming">Upcoming Tasks</a></li>
                <li><a href="#calendar">Calendar</a></li>
                <li><a href="#settings">Settings</a></li>
            </ul>
        </aside>
    );
}