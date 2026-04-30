import { Link } from 'react-router-dom';

function Home() {
  return (
    <div style={{ maxWidth: '720px', margin: '60px auto', padding: '24px', textAlign: 'center' }}>
      <h1>Chào mừng đến với ứng dụng</h1>
      <p style={{ marginTop: '16px', color: '#555', lineHeight: '1.6' }}>
        Vui lòng đăng nhập hoặc đăng ký để xem danh sách sản phẩm.
      </p>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginTop: '32px' }}>
        <Link
          to="/login"
          style={{ padding: '12px 22px', borderRadius: '8px', backgroundColor: '#1e90ff', color: '#fff', textDecoration: 'none' }}
        >
          Đăng Nhập
        </Link>
        <Link
          to="/register"
          style={{ padding: '12px 22px', borderRadius: '8px', backgroundColor: '#28a745', color: '#fff', textDecoration: 'none' }}
        >
          Đăng Ký
        </Link>
      </div>
    </div>
  );
}

export default Home;