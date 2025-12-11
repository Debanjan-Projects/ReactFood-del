import React from 'react'
import './SideBar.css'
import { assets } from '../../assets/admin_assets/assets.js'


const SideBar = () => {
  return (
    <div className='sidebar'>

    <div className='sidebar-options'>
        <div className='sidebar-option'>
            <img src={assets.add_icon} alt='add-icon'/>
            <p>Add Items</p>
        </div>

        <div className='sidebar-option'>
            <img src={assets.order_icon} alt='order-icon'/>
            <p>List Items</p>
        </div>

        <div className='sidebar-option'>
            <img src={assets.order_icon} alt='order-icon'/>
            <p>Orders</p>
        </div>
    </div>

    </div>
  )
}

export default SideBar