import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

function AdminLayout() {
  return (
    <div className="container-fluid  min-vh-100" style={{backgroundColor:'#57c5fc'}}>
      <div className="row min-vh-100">
          <div className="col-2 bg-white">
          <Sidebar />
          </div>
          <div className="col">
          <Navbar />
            <Outlet />
          </div>
      </div>
        
    </div>
  )
}

export default AdminLayout;