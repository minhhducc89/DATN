import axios from 'axios';
import { Button, message, Popconfirm, Table } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

const List = () => {
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    const { data, isLoading } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const { data } = await axios.get('http://localhost:5000/api/products');
            return data;
        },
        staleTime: Infinity,
    });

    const mutation = useMutation({
        mutationFn: async (id) => {
            await axios.delete(`http://localhost:5000/api/products/${id}`);
            return id;
        },
        onSuccess: (id) => {
            message.success('Xóa sản phẩm thành công');
            queryClient.setQueryData(['products'], (oldData) =>
                oldData ? oldData.filter((item) => item._id !== id) : []
            );
        },
        onError: () => {
            message.error('Xóa thất bại!');
        },
    });

    const onDelete = (id) => {
        mutation.mutate(id);
    };

    const columns = [
        {
            title: 'STT',
            dataIndex: 'key',
            key: 'key',
            render: (_, __, index) => index + 1,
        },
        {
            title: 'Tên sản phẩm',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Giá tiền',
            dataIndex: 'price',
            key: 'price',
            render: (price) => `${price?.toLocaleString()} VNĐ`,
        },
        {
            title: 'Action',
            dataIndex: '_id',
            key: 'action',
            render: (id) => (
                <div className='flex gap-2'>
                    <Button type='primary' onClick={() => navigate(`/admin/products/edit/${id}`)}>
                        Sửa
                    </Button>
                    <Popconfirm
                        title='Xóa sản phẩm'
                        description='Bạn có chắc chắn muốn xóa sản phẩm này?'
                        onConfirm={() => onDelete(id)}
                        okText='Đồng ý'
                        cancelText='Hủy'
                    >
                        <Button danger>Xóa</Button>
                    </Popconfirm>
                </div>
            ),
        },
    ];

    if (isLoading) return <h2 className='p-5'>Đang tải dữ liệu từ DB...</h2>;

    return (
        <div style={{ padding: '20px' }}>
            <h1 className='text-center text-4xl mb-5 font-bold'>Danh sách Sản phẩm</h1>
            {data && <Table rowKey='_id' dataSource={data} columns={columns} bordered />}
        </div>
    );
};

export default List;