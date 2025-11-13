import { useState } from 'react';
import { ProTable } from '@ant-design/pro-components';
import { Button, Tag, Image, Space, Modal, message, Form, Input, InputNumber, Select } from 'antd';
import { PlusOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { products, categories } from '../../../mock/products';
import type { Product } from '../../../types/product';

const { TextArea } = Input;

const ProductManage = () => {
  const [dataSource, setDataSource] = useState<Product[]>(products);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [form] = Form.useForm();

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      width: 60,
      search: false,
    },
    {
      title: '商品图片',
      dataIndex: 'image',
      key: 'image',
      width: 100,
      search: false,
      render: (_: any, record: Product) => <Image src={record.image} width={60} height={60} style={{ objectFit: 'cover' }} />,
    },
    {
      title: '商品名称',
      dataIndex: 'name',
      key: 'name',
      width: 200,
    },
    {
      title: '分类',
      dataIndex: 'category',
      key: 'category',
      width: 120,
      filters: true,
      valueEnum: {
        '电子产品': { text: '电子产品' },
        '服装鞋包': { text: '服装鞋包' },
        '食品饮料': { text: '食品饮料' },
        '家居生活': { text: '家居生活' },
        '美妆护肤': { text: '美妆护肤' },
        '运动户外': { text: '运动户外' },
      },
    },
    {
      title: '价格',
      dataIndex: 'price',
      key: 'price',
      width: 100,
      search: false,
      render: (_: any, record: Product) => `¥${record.price}`,
      sorter: (a: Product, b: Product) => a.price - b.price,
    },
    {
      title: '库存',
      dataIndex: 'stock',
      key: 'stock',
      width: 100,
      search: false,
      render: (_: any, record: Product) => (
        <Tag color={record.stock > 500 ? 'green' : record.stock > 100 ? 'orange' : 'red'}>
          {record.stock}
        </Tag>
      ),
      sorter: (a: Product, b: Product) => a.stock - b.stock,
    },
    {
      title: '销量',
      dataIndex: 'sales',
      key: 'sales',
      width: 100,
      search: false,
      sorter: (a: Product, b: Product) => a.sales - b.sales,
    },
    {
      title: '评分',
      dataIndex: 'rating',
      key: 'rating',
      width: 100,
      search: false,
      render: (_: any, record: Product) => (
        <Tag color="blue">{record.rating} ⭐</Tag>
      ),
    },
    {
      title: '操作',
      key: 'action',
      width: 150,
      search: false,
      fixed: 'right' as const,
      render: (_: any, record: Product) => (
        <Space>
          <Button
            type="link"
            icon={<EditOutlined />}
            onClick={() => handleEdit(record)}
          >
            编辑
          </Button>
          <Button
            type="link"
            danger
            icon={<DeleteOutlined />}
            onClick={() => handleDelete(record)}
          >
            删除
          </Button>
        </Space>
      ),
    },
  ];

  const handleEdit = (record: Product) => {
    setEditingProduct(record);
    form.setFieldsValue(record);
    setIsModalVisible(true);
  };

  const handleDelete = (record: Product) => {
    Modal.confirm({
      title: '确认删除',
      content: `确定要删除商品 "${record.name}" 吗？`,
      okText: '确定',
      cancelText: '取消',
      onOk: () => {
        setDataSource(dataSource.filter(item => item.id !== record.id));
        message.success('删除成功！');
      },
    });
  };

  const handleAdd = () => {
    setEditingProduct(null);
    form.resetFields();
    setIsModalVisible(true);
  };

  const handleModalOk = async () => {
    try {
      const values = await form.validateFields();

      if (editingProduct) {
        // 编辑商品
        setDataSource(dataSource.map(item =>
          item.id === editingProduct.id ? { ...item, ...values } : item
        ));
        message.success('商品更新成功！');
      } else {
        // 新建商品
        const newProduct: Product = {
          ...values,
          id: Math.max(...dataSource.map(p => p.id)) + 1,
          sales: 0,
          rating: 5.0,
        };
        setDataSource([...dataSource, newProduct]);
        message.success('商品创建成功！');
      }

      setIsModalVisible(false);
      form.resetFields();
    } catch (error) {
      console.error('表单验证失败:', error);
    }
  };

  const handleModalCancel = () => {
    setIsModalVisible(false);
    form.resetFields();
  };

  return (
    <>
      <ProTable<Product>
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
        headerTitle="商品列表"
        toolBarRender={() => [
          <Button key="button" icon={<PlusOutlined />} type="primary" onClick={handleAdd}>
            新建商品
          </Button>,
        ]}
        scroll={{ x: 1200 }}
      />

      <Modal
        title={editingProduct ? '编辑商品' : '新建商品'}
        open={isModalVisible}
        onOk={handleModalOk}
        onCancel={handleModalCancel}
        width={600}
        okText="确定"
        cancelText="取消"
      >
        <Form form={form} layout="vertical">
          <Form.Item
            label="商品名称"
            name="name"
            rules={[{ required: true, message: '请输入商品名称' }]}
          >
            <Input placeholder="请输入商品名称" />
          </Form.Item>

          <Form.Item
            label="商品分类"
            name="category"
            rules={[{ required: true, message: '请选择商品分类' }]}
          >
            <Select placeholder="请选择商品分类">
              {categories.map(cat => (
                <Select.Option key={cat.name} value={cat.name}>
                  {cat.name}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item
            label="商品价格"
            name="price"
            rules={[{ required: true, message: '请输入商品价格' }]}
          >
            <InputNumber
              min={0}
              precision={2}
              style={{ width: '100%' }}
              placeholder="请输入商品价格"
              addonBefore="¥"
            />
          </Form.Item>

          <Form.Item
            label="原价"
            name="originalPrice"
          >
            <InputNumber
              min={0}
              precision={2}
              style={{ width: '100%' }}
              placeholder="请输入原价"
              addonBefore="¥"
            />
          </Form.Item>

          <Form.Item
            label="库存数量"
            name="stock"
            rules={[{ required: true, message: '请输入库存数量' }]}
          >
            <InputNumber
              min={0}
              style={{ width: '100%' }}
              placeholder="请输入库存数量"
            />
          </Form.Item>

          <Form.Item
            label="商品图片URL"
            name="image"
            rules={[{ required: true, message: '请输入商品图片URL' }]}
          >
            <Input placeholder="https://example.com/image.jpg" />
          </Form.Item>

          <Form.Item
            label="商品描述"
            name="description"
          >
            <TextArea rows={4} placeholder="请输入商品描述" />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default ProductManage;

