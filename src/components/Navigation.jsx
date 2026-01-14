import { NavLink } from 'react-router-dom'
import { Home, Briefcase, Award, Compass, User } from 'lucide-react'

const Navigation = () => {
    const navItems = [
        { path: '/', label: 'Dashboard', icon: <Home size={24} /> },
        { path: '/trayectoria', label: 'Trayectoria', icon: <Briefcase size={24} /> },
        { path: '/certificaciones', label: 'Certificaciones', icon: <Award size={24} /> },
        { path: '/vision', label: 'Visión', icon: <Compass size={24} /> },
    ]

    return (
        <nav className="side-nav">
            <div className="nav-logo">
                <User size={32} className="nav-icon" color="var(--text-accent)" />
                <span className="nav-label" style={{ fontWeight: 'bold' }}>Diego Dengo</span>
            </div>

            <div className="nav-links">
                {navItems.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
                    >
                        <div className="nav-icon">{item.icon}</div>
                        <span className="nav-label">{item.label}</span>
                    </NavLink>
                ))}
            </div>
        </nav>
    )
}

export default Navigation
