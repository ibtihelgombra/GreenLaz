import React from 'react'
import './Admin.css'
import Sidebar from '../../Components/SideBar/Sidebar'
import {Route,Routes} from 'react-router-dom'
import ListUsers from '../../Components/ListUsers/ListUsers'



const Admin = () => {
  return (
    <div className='admin'>
        <Sidebar/>
       <Routes>
       
        <Route path='/listusers' element={<ListUsers/>}/>
       </Routes>
        
        
    </div>
  )
}

export default Admin