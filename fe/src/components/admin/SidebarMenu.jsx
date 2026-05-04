import { ProductOutlined, UserOutlined, DashboardOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import React from 'react'
import { useNavigate } from 'react-router-dom';

const SidebarMenu = () => {
    function getItem(label, key, icon, children) {
        return {
            key,
            icon,
            children,
            label,
        };
    }
    const items = [
        getItem('Dashboard', '/admin', <DashboardOutlined />),
        getItem('Quản lý', 'sub1', <ProductOutlined />, [
            getItem('Danh sách ', '/admin/products'),
            getItem('Thêm mới ', '#'),
        ]),
        getItem('Quản lý người dùng', '#', <UserOutlined />),
    ];
    const navigate = useNavigate();
    const handleClickMenu = ({ key }) => {
        navigate(key);
    };
  return (
    <Menu onClick={handleClickMenu} theme="dark" defaultSelectedKeys={['sub1']} mode="inline" items={items} />
  )
}

export default SidebarMenu