import React from 'react'
import '../Styles/AdminUpperNav.css'
import { FcSearch } from "react-icons/fc";
import { IoMail } from "react-icons/io5";
import { IoNotifications } from "react-icons/io5";

const AdminUpperNav = () => {
  return (
    <>
      <div className="admin-upper-nav">
        <h2>Admin Panel</h2>
        <form>
          <div className="right-admin-upper-nav">
            <IoMail className="Admin_mail" />
            <IoNotifications className="Admin_notification" />

            <div className="admin-search-box">
              <input
                type="text"
                name="search"
                placeholder="Search..."
                className="Admin_search"
              />
              <FcSearch className="search-icon" />
            </div>
          </div>

        </form>
      </div>
    </>
  )
}

export default AdminUpperNav