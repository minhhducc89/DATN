import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { getCurrentUser, logout } from '../utils/auth';

const ClientLayout = () => {
  const user = getCurrentUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div>
      <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 24px', backgroundColor: '#f7f9fc', borderBottom: '1px solid #e1e4e8' }}>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <Link to="/" style={{ textDecoration: 'none', color: '#111', fontWeight: '700' }}>
            Trang chủ
          </Link>
          <Link to="/products" style={{ textDecoration: 'none', color: '#111' }}>
            Sản phẩm
          </Link>
        </div>

        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          {user ? (
            <>
              <span style={{ color: '#333' }}>Xin chào, {user.name}</span>
              <button type="button" onClick={handleLogout} style={{ padding: '8px 14px', borderRadius: '8px', border: 'none', backgroundColor: '#ef5350', color: '#fff', cursor: 'pointer' }}>
                Đăng xuất
              </button>
            </>
          ) : (
            <Link to="/login" style={{ textDecoration: 'none', color: '#1e88e5' }}>
              Đăng nhập
            </Link>
          )}
        </div>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default ClientLayout;
