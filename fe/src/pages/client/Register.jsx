import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axiosClient from '../../api/axiosClient';

function Register() {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
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
      const data = await axiosClient.post('/auth/register', formData);
      setMessage(data.message || 'Đăng ký thành công!');
      setFormData({ name: '', email: '', password: '' });
      setTimeout(() => navigate('/login'), 1200);
    } catch (error) {
      setMessage(error.response?.data?.message || 'Có lỗi xảy ra khi đăng ký!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: '420px', margin: '60px auto', padding: '24px', border: '1px solid #ddd', borderRadius: '12px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>📝 Đăng Ký</h2>

      {message && (
        <div style={{ padding: '12px', marginBottom: '16px', borderRadius: '8px', backgroundColor: '#f6ffed', color: '#2f6627' }}>
          {message}
        </div>
      )}

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
        <input
          type="text"
          name="name"
          placeholder="Họ và tên"
          value={formData.name}
          onChange={handleChange}
          required
          style={{ padding: '12px', fontSize: '16px', borderRadius: '8px', border: '1px solid #ccc' }}
        />

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
          style={{ padding: '12px', fontSize: '16px', borderRadius: '8px', border: 'none', backgroundColor: '#28a745', color: '#fff', cursor: 'pointer' }}
        >
          {loading ? 'Đang đăng ký...' : 'Đăng Ký'}
        </button>
      </form>

      <p style={{ textAlign: 'center', marginTop: '18px' }}>
        Đã có tài khoản?{' '}
        <Link to="/login" style={{ color: '#28a745', textDecoration: 'none' }}>
          Đăng nhập
        </Link>
      </p>
    </div>
  );
}

export default Register;
