import { useState } from 'react';
import { ProTable } from '@ant-design/pro-components';
import { Tag, Button, Space, Modal, Descriptions, message } from 'antd';
import { EyeOutlined, CheckOutlined, CloseOutlined } from '@ant-design/icons';

interface Order {
  id: string;
  orderNo: string;
  customer: string;
  product: string;
  amount: number;
  status: 'pending' | 'processing' | 'completed' | 'cancelled';
  createTime: string;
  address?: string;
  phone?: string;
  notes?: string;
}

const OrderManage = () => {
  const [dataSource, setDataSource] = useState<Order[]>([
    {
      id: '1',
      orderNo: 'ORD20250213001',
      customer: '张三',
      product: 'iPhone 17 Pro Max',
      amount: 9999,
      status: 'completed',
      createTime: '2025-02-13 10:30:00',
      address: '北京市朝阳区建国路88号',
      phone: '13800138001',
      notes: '请在工作日送货',
    },
    {
      id: '2',
      orderNo: 'ORD20250213002',
      customer: '李四',
      product: 'MacBook Pro 14英寸',
      amount: 15999,
      status: 'processing',
      createTime: '2025-02-13 11:20:00',
      address: '上海市浦东新区陆家嘴环路1000号',
      phone: '13800138002',
      notes: '需要发票',
    },
    {
      id: '3',
      orderNo: 'ORD20250213003',
      customer: '王五',
      product: 'AirPods Pro 2',
      amount: 1899,
      status: 'pending',
      createTime: '2025-02-13 12:15:00',
      address: '广州市天河区珠江新城花城大道123号',
      phone: '13800138003',
      notes: '尽快发货',
    },
    {
      id: '4',
      orderNo: 'ORD20250213004',
      customer: '赵六',
      product: '运动跑鞋',
      amount: 599,
      status: 'completed',
      createTime: '2025-02-13 13:45:00',
      address: '深圳市南山区科技园南区深南大道9988号',
      phone: '13800138004',
      notes: '无',
    },
    {
      id: '5',
      orderNo: 'ORD20250213005',
      customer: '孙七',
      product: '智能扫地机器人',
      amount: 2999,
      status: 'cancelled',
      createTime: '2025-02-13 14:30:00',
      address: '杭州市西湖区文三路508号',
      phone: '13800138005',
      notes: '客户取消订单',
    },
  ]);

  const [detailModalVisible, setDetailModalVisible] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  const statusMap = {
    pending: { text: '待处理', color: 'orange' },
    processing: { text: '处理中', color: 'blue' },
    completed: { text: '已完成', color: 'green' },
    cancelled: { text: '已取消', color: 'red' },
  };

  const handleViewDetail = (record: Order) => {
    setSelectedOrder(record);
    setDetailModalVisible(true);
  };

  const handleProcess = (record: Order) => {
    Modal.confirm({
      title: '确认处理订单',
      content: `确定要处理订单 "${record.orderNo}" 吗？`,
      okText: '确定',
      cancelText: '取消',
      onOk: () => {
        setDataSource(dataSource.map(item =>
          item.id === record.id ? { ...item, status: 'processing' } : item
        ));
        message.success('订单已开始处理！');
      },
    });
  };

  const handleCancel = (record: Order) => {
    Modal.confirm({
      title: '确认取消订单',
      content: `确定要取消订单 "${record.orderNo}" 吗？此操作不可恢复。`,
      okText: '确定',
      cancelText: '取消',
      okType: 'danger',
      onOk: () => {
        setDataSource(dataSource.map(item =>
          item.id === record.id ? { ...item, status: 'cancelled' } : item
        ));
        message.success('订单已取消！');
      },
    });
  };

  const columns = [
    {
      title: '订单号',
      dataIndex: 'orderNo',
      key: 'orderNo',
      width: 150,
      copyable: true,
    },
    {
      title: '客户',
      dataIndex: 'customer',
      key: 'customer',
      width: 100,
    },
    {
      title: '商品',
      dataIndex: 'product',
      key: 'product',
      width: 200,
    },
    {
      title: '金额',
      dataIndex: 'amount',
      key: 'amount',
      width: 120,
      render: (_: any, record: Order) => `¥${record.amount.toLocaleString()}`,
      sorter: (a: Order, b: Order) => a.amount - b.amount,
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      width: 120,
      filters: true,
      valueEnum: {
        pending: { text: '待处理', status: 'Warning' },
        processing: { text: '处理中', status: 'Processing' },
        completed: { text: '已完成', status: 'Success' },
        cancelled: { text: '已取消', status: 'Error' },
      },
      render: (_: any, record: Order) => {
        const status = record.status as keyof typeof statusMap;
        if (!status || !statusMap[status]) {
          return <Tag color="default">未知状态</Tag>;
        }
        return <Tag color={statusMap[status].color}>{statusMap[status].text}</Tag>;
      },
    },
    {
      title: '创建时间',
      dataIndex: 'createTime',
      key: 'createTime',
      width: 180,
      sorter: (a: Order, b: Order) => new Date(a.createTime).getTime() - new Date(b.createTime).getTime(),
    },
    {
      title: '操作',
      key: 'action',
      width: 200,
      search: false,
      fixed: 'right' as const,
      render: (_: any, record: Order) => (
        <Space>
          <Button type="link" icon={<EyeOutlined />} size="small" onClick={() => handleViewDetail(record)}>
            查看
          </Button>
          {record.status === 'pending' && (
            <>
              <Button type="link" icon={<CheckOutlined />} size="small" onClick={() => handleProcess(record)}>
                处理
              </Button>
              <Button type="link" danger icon={<CloseOutlined />} size="small" onClick={() => handleCancel(record)}>
                取消
              </Button>
            </>
          )}
        </Space>
      ),
    },
  ];

  return (
    <>
      <ProTable<Order>
        columns={columns}
        dataSource={dataSource}
        rowKey="id"
        pagination={{
          pageSize: 10,
          showSizeChanger: true,
          showQuickJumper: true,
        }}
        search={{
          labelWidth: 'auto',
        }}
        dateFormatter="string"
        headerTitle="订单列表"
        scroll={{ x: 1200 }}
      />

      <Modal
        title="订单详情"
        open={detailModalVisible}
        onCancel={() => setDetailModalVisible(false)}
        footer={[
          <Button key="close" onClick={() => setDetailModalVisible(false)}>
            关闭
          </Button>,
        ]}
        width={700}
      >
        {selectedOrder && (
          <Descriptions bordered column={2}>
            <Descriptions.Item label="订单号" span={2}>
              {selectedOrder.orderNo}
            </Descriptions.Item>
            <Descriptions.Item label="客户姓名">
              {selectedOrder.customer}
            </Descriptions.Item>
            <Descriptions.Item label="订单状态">
              <Tag color={statusMap[selectedOrder.status]?.color || 'default'}>
                {statusMap[selectedOrder.status]?.text || '未知状态'}
              </Tag>
            </Descriptions.Item>
            <Descriptions.Item label="商品名称" span={2}>
              {selectedOrder.product}
            </Descriptions.Item>
            <Descriptions.Item label="订单金额">
              ¥{selectedOrder.amount.toLocaleString()}
            </Descriptions.Item>
            <Descriptions.Item label="创建时间">
              {selectedOrder.createTime}
            </Descriptions.Item>
            <Descriptions.Item label="收货地址" span={2}>
              {selectedOrder.address || '暂无地址'}
            </Descriptions.Item>
            <Descriptions.Item label="联系电话" span={2}>
              {selectedOrder.phone || '暂无电话'}
            </Descriptions.Item>
            <Descriptions.Item label="备注" span={2}>
              {selectedOrder.notes || '无'}
            </Descriptions.Item>
          </Descriptions>
        )}
      </Modal>
    </>
  );
};

export default OrderManage;

