import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ClientLayout from './layouts/ClientLayout';
import AdminLayout from './layouts/AdminLayout';
import Home from './pages/client/Home';
import Login from './pages/client/Login';
import Register from './pages/client/Register';
import ProductList from './components/client/ProductList';
import AdminDashboard from './pages/admin/AdminDashboard';
import { getCurrentUser } from './utils/auth';
import List from './pages/admin/List';



const AdminRoute = ({ children }) => {
  const user = getCurrentUser();
  return user?.role === 'admin' ? children : <Navigate to="/" replace />;
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={<ClientLayout />}>
          <Route path='/' element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="/products" element={<ProductList />} />
        </Route>

        <Route path="admin" element={<AdminRoute><AdminLayout /></AdminRoute>}>
          <Route path='/admin' element={<AdminDashboard />} />
          <Route path="/admin/products" element={<List />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;