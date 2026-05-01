import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { getCurrentUser, logout } from '../utils/auth';

const AdminLayout = () => {
  const user = getCurrentUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div style={{ display: 'flex' }}>
     
      <div style={{ flex: 1 }}>
        <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 24px', backgroundColor: '#24292f', color: '#fff' }}>
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            <Link to="/admin" style={{ textDecoration: 'none', color: '#fff', fontWeight: '700' }}>
              Admin Dashboard
            </Link>
            <Link to="/" style={{ textDecoration: 'none', color: '#cbd9e6' }}>
              Về trang client
            </Link>
          </div>

          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            {user && <span>Admin: {user.name}</span>}
            <button type="button" onClick={handleLogout} style={{ padding: '8px 14px', borderRadius: '8px', border: 'none', backgroundColor: '#d32f2f', color: '#fff', cursor: 'pointer' }}>
              Đăng xuất
            </button>
          </div>
        </header>

        <main style={{ padding: '24px' }}>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
