import { useState, useEffect } from 'react';
import axios from 'axios';

function ProductList() {
  // 1. Tạo state để chứa danh sách dữ liệu
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // 2. Tự động gọi API khi component được mount
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Gọi tới API của Backend (nhớ cấu hình domain Backend hoặc Proxy)
        const response = await axios.get('http://localhost:5000/api/products');
        
        // Cập nhật dữ liệu vào state
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Lỗi khi tải dữ liệu:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []); // Mảng rỗng [] giúp API chỉ gọi 1 lần duy nhất

  // 3. Hiển thị màn hình chờ (Loading)
  if (loading) return <h2>Đang tải dữ liệu từ DB...</h2>;

  // 4. Lặp (map) qua mảng dữ liệu và vẽ ra giao diện (HTML/JSX)
  return (
    <div style={{ padding: '20px' }}>
      <h1>Danh sách Sản phẩm</h1>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
        {products.map((product) => (
          // Bắt buộc phải có key={product._id} (_id là ID mặc định của MongoDB)
          <div key={product._id} style={{ border: '1px solid #ccc', padding: '15px' }}>
            <h3>{product.name}</h3>
            <p style={{ color: 'red', fontWeight: 'bold' }}>
               Giá: {product.price} VNĐ
            </p>
          </div>
        ))}
      </div>
      
      
      {products.length === 0 && <p>Chưa có sản phẩm nào trong Database.</p>}
    </div>
  );
}

export default ProductList;