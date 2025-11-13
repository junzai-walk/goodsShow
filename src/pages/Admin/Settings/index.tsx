import { Card, Form, Input, Button, Switch, Select, message, Divider, Space } from 'antd';
import { SaveOutlined } from '@ant-design/icons';
import './index.css';

const { Option } = Select;

const Settings = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log('保存设置:', values);
    message.success('设置保存成功！');
  };

  return (
    <div className="settings-container">
      <Card title="基本设置" className="settings-card">
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          initialValues={{
            siteName: '电商平台',
            siteUrl: 'https://www.example.com',
            contactEmail: 'admin@example.com',
            contactPhone: '400-888-8888',
            enableNotification: true,
            enableEmailNotification: false,
            language: 'zh-CN',
            timezone: 'Asia/Shanghai',
          }}
        >
          <Form.Item label="网站名称" name="siteName" rules={[{ required: true, message: '请输入网站名称' }]}>
            <Input placeholder="请输入网站名称" />
          </Form.Item>

          <Form.Item label="网站地址" name="siteUrl" rules={[{ required: true, message: '请输入网站地址' }]}>
            <Input placeholder="https://www.example.com" />
          </Form.Item>

          <Form.Item label="联系邮箱" name="contactEmail" rules={[{ required: true, type: 'email', message: '请输入有效的邮箱地址' }]}>
            <Input placeholder="admin@example.com" />
          </Form.Item>

          <Form.Item label="联系电话" name="contactPhone">
            <Input placeholder="400-888-8888" />
          </Form.Item>

          <Divider>通知设置</Divider>

          <Form.Item label="启用系统通知" name="enableNotification" valuePropName="checked">
            <Switch />
          </Form.Item>

          <Form.Item label="启用邮件通知" name="enableEmailNotification" valuePropName="checked">
            <Switch />
          </Form.Item>

          <Divider>区域设置</Divider>

          <Form.Item label="语言" name="language">
            <Select>
              <Option value="zh-CN">简体中文</Option>
              <Option value="zh-TW">繁体中文</Option>
              <Option value="en-US">English</Option>
            </Select>
          </Form.Item>

          <Form.Item label="时区" name="timezone">
            <Select>
              <Option value="Asia/Shanghai">中国标准时间 (UTC+8)</Option>
              <Option value="Asia/Tokyo">日本标准时间 (UTC+9)</Option>
              <Option value="America/New_York">美国东部时间 (UTC-5)</Option>
              <Option value="Europe/London">格林威治时间 (UTC+0)</Option>
            </Select>
          </Form.Item>

          <Form.Item>
            <Space>
              <Button type="primary" htmlType="submit" icon={<SaveOutlined />}>
                保存设置
              </Button>
              <Button onClick={() => form.resetFields()}>重置</Button>
            </Space>
          </Form.Item>
        </Form>
      </Card>

      <Card title="商品设置" className="settings-card" style={{ marginTop: 16 }}>
        <Form layout="vertical" initialValues={{ autoApprove: true, showStock: true, minStock: 10 }}>
          <Form.Item label="自动审核新商品" name="autoApprove" valuePropName="checked">
            <Switch />
          </Form.Item>

          <Form.Item label="显示库存数量" name="showStock" valuePropName="checked">
            <Switch />
          </Form.Item>

          <Form.Item label="库存预警阈值" name="minStock">
            <Input type="number" placeholder="10" addonAfter="件" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" icon={<SaveOutlined />} onClick={() => message.success('商品设置保存成功！')}>
              保存设置
            </Button>
          </Form.Item>
        </Form>
      </Card>

      <Card title="订单设置" className="settings-card" style={{ marginTop: 16 }}>
        <Form layout="vertical" initialValues={{ autoConfirm: false, cancelTimeout: 30, deliveryTimeout: 7 }}>
          <Form.Item label="自动确认订单" name="autoConfirm" valuePropName="checked">
            <Switch />
          </Form.Item>

          <Form.Item label="未支付订单自动取消时间" name="cancelTimeout">
            <Input type="number" placeholder="30" addonAfter="分钟" />
          </Form.Item>

          <Form.Item label="发货超时提醒" name="deliveryTimeout">
            <Input type="number" placeholder="7" addonAfter="天" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" icon={<SaveOutlined />} onClick={() => message.success('订单设置保存成功！')}>
              保存设置
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Settings;

