import React from 'react'
import NavBar from './components/NavBar/NavBar'
import SideBar from './components/SideBar/SideBar'

const App = () => {
  return (
    <div>
      <NavBar/>
      <hr/>

      {/* //create a div for mounded the sidebar component. */}
      <div className='app-content'>

      <SideBar/>
      </div>
      
    </div>
  )
}

export default App
