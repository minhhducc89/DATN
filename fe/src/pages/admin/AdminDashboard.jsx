import React from 'react';

function AdminDashboard() {
  return (
    <div style={{ maxWidth: '860px', margin: '60px auto', padding: '24px', backgroundColor: '#fff', borderRadius: '16px', boxShadow: '0 1px 10px rgba(0,0,0,0.08)' }}>
      <h1>Trang quản trị</h1>
      <p style={{ marginTop: '16px', color: '#555', lineHeight: '1.7' }}>
        Đây là khu vực dành cho quản trị viên. Bạn có thể xem báo cáo, quản lý sản phẩm và theo dõi người dùng tại đây.
      </p>
    </div>
  );
}

export default AdminDashboard;
