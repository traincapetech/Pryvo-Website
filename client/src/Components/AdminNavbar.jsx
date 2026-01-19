import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../Styles/AdminNavbar.css'
const AdminNavbar = () => {

    const [open, setOpen] = useState(true)
    return (

        <>
            <div className="admin-layout">
                <div className={`Admin-Nav ${open ? 'open' : 'closed'}`}>
                    <Link to="/admin/Dashboard">Dashboard</Link>
                    <Link to="/admin/analytics">Analytics</Link>
                    <Link to="/admin/Chart">Chart</Link>
                    <Link to="/admin/Email">Email</Link>
                    <Link to="/admin/Profile">Profile</Link>
                    <Link to="/admin/Setting">Settings</Link>
                <div className="Admin-nav-logout">
                    <Link to="/admin/logout">Logout</Link>
                </div>
                </div>
                <button className={`toggle-btn ${open ? '' : 'closed'}`} onClick={() => setOpen(!open)}> {open ? '❮' : '❯'}
                </button >
            </div >
        </>
    )
}
export default AdminNavbar