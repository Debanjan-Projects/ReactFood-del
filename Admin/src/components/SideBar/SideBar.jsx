import React, { useState } from 'react'
import './SideBar.css'
import { assets } from '../../assets/admin_assets/assets.js'
import { NavLink } from 'react-router-dom'

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  const closeSidebar = () => {
    setIsOpen(false)
  }

  return (
    <>
      {/* Mobile Toggle Button */}
      <button className="mobile-toggle" onClick={toggleSidebar}>
        {isOpen ? '✕' : '☰'}
      </button>

      {/* Backdrop for mobile */}
      <div 
        className={`sidebar-backdrop ${isOpen ? 'active' : ''}`} 
        onClick={closeSidebar}
      />

      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        
        {/* Sidebar Header with Logo */}
        <div className='sidebar-header'>
          <NavLink to="/" className='sidebar-logo'>
            <img src={assets.logo} alt='logo' />
            <h2>SwadAnand Admin</h2>
          </NavLink>
        </div>

        {/* Sidebar Navigation */}
        <div className='sidebar-options'>
          <NavLink 
            to="/add" 
            className='sidebar-option'
            onClick={closeSidebar}
          >
            <img src={assets.add_icon} alt='add-icon'/>
            <p>Add Items</p>
          </NavLink>

          <NavLink 
            to="/list" 
            className='sidebar-option'
            onClick={closeSidebar}
          >
            <img src={assets.order_icon} alt='list-icon'/>
            <p>List Items</p>
          </NavLink>

          <NavLink 
            to="/orders" 
            className='sidebar-option'
            onClick={closeSidebar}
          >
            <img src={assets.order_icon} alt='orders-icon'/>
            <p>Orders</p>
          </NavLink>
        </div>

        {/* User Profile Section */}
        <div className='sidebar-user'>
          <div className='user-avatar'>
            AD
          </div>
          <div className='user-info'>
            <h4>Admin User</h4>
            <p>Administrator</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default SideBar