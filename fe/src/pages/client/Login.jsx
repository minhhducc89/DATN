import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axiosClient from '../../api/axiosClient';

function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setLoading(true);

    try {
      const data = await axiosClient.post('/auth/login', formData);
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
      setMessage(data.message || 'Đăng nhập thành công!');
      const nextPage = data.user?.role === 'admin' ? '/admin' : '/';
      navigate(nextPage);
    } catch (error) {
      setMessage(error.response?.data?.message || 'Có lỗi xảy ra khi đăng nhập!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: '420px', margin: '60px auto', padding: '24px', border: '1px solid #ddd', borderRadius: '12px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>🔐 Đăng Nhập</h2>

      {message && (
        <div style={{ padding: '12px', marginBottom: '16px', borderRadius: '8px', backgroundColor: '#f0f7ff', color: '#0f2540' }}>
          {message}
        </div>
      )}

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
        <input
          type="email"
          name="email"
          placeholder="Email của bạn"
          value={formData.email}
          onChange={handleChange}
          required
          style={{ padding: '12px', fontSize: '16px', borderRadius: '8px', border: '1px solid #ccc' }}
        />

        <input
          type="password"
          name="password"
          placeholder="Mật khẩu"
          value={formData.password}
          onChange={handleChange}
          required
          style={{ padding: '12px', fontSize: '16px', borderRadius: '8px', border: '1px solid #ccc' }}
        />

        <button
          type="submit"
          disabled={loading}
          style={{ padding: '12px', fontSize: '16px', borderRadius: '8px', border: 'none', backgroundColor: '#1e90ff', color: '#fff', cursor: 'pointer' }}
        >
          {loading ? 'Đang đăng nhập...' : 'Đăng Nhập'}
        </button>
      </form>

      <p style={{ textAlign: 'center', marginTop: '18px' }}>
        Chưa có tài khoản?{' '}
        <Link to="/register" style={{ color: '#1e90ff', textDecoration: 'none' }}>
          Đăng ký ngay
        </Link>
      </p>
    </div>
  );
}

export default Login;
