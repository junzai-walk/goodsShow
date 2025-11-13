import { useState } from 'react';
import { Form, Input, Button, Tabs, message, Checkbox, Radio } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined, PhoneOutlined, ShopOutlined, IdcardOutlined, HomeOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import './index.css';

type UserRole = 'user' | 'shop1' | 'shop2' | 'shop3' | 'admin' | 'supplier' | 'distributor';

const Login = () => {
  const [activeTab, setActiveTab] = useState('login');
  const [userRole, setUserRole] = useState<UserRole>('user');
  const [loginForm] = Form.useForm();
  const [registerForm] = Form.useForm();
  const navigate = useNavigate();

  // 登录处理
  const handleLogin = async (values: any) => {
    console.log('登录信息:', values);

    // 模拟登录验证
    if (values.username && values.password) {
      message.success('登录成功！');

      // 根据用户名判断角色（实际应该从后端获取）
      let role: UserRole = 'user' as UserRole;
      if (values.username === 'admin') {
        role = 'admin' as UserRole;
      } else if (values.username.startsWith('supplier')) {
        role = 'supplier' as UserRole;
      } else if (values.username.startsWith('distributor')) {
        role = 'distributor' as UserRole;
      }

      // 保存登录状态到 localStorage
      localStorage.setItem('user', JSON.stringify({
        username: values.username,
        role: role,
        loginTime: new Date().toISOString()
      }));

      // 根据角色跳转到不同页面
      setTimeout(() => {
        if (role === 'admin') {
          navigate('/admin/dashboard');
        } else if (role === 'supplier') {
          navigate('/admin/supplier/products');
        } else if (role === 'distributor') {
          navigate('/admin/distributor/products');
        } else {
          navigate('/');
        }
      }, 1000);
    } else {
      message.error('请输入用户名和密码！');
    }
  };

  // 注册处理
  const handleRegister = async (values: any) => {
    console.log('注册信息:', values);

    // 验证两次密码是否一致
    if (values.password !== values.confirmPassword) {
      message.error('两次输入的密码不一致！');
      return;
    }

    // 验证企业信息（供应商和分销商）
    if ((userRole === 'supplier' || userRole === 'distributor') && !values.agreement) {
      message.error('请阅读并同意企业用户协议！');
      return;
    }

    // 模拟注册
    message.success(`${userRole === 'supplier' ? '供应商' : userRole === 'distributor' ? '分销商' : '用户'}注册成功！请登录`);
    registerForm.resetFields();
    setActiveTab('login');
    setUserRole('user' as UserRole);
  };

  const loginFormContent = (
    <Form
      form={loginForm}
      name="login"
      onFinish={handleLogin}
      autoComplete="off"
      size="large"
    >
      <Form.Item
        name="username"
        rules={[{ required: true, message: '请输入用户名！' }]}
      >
        <Input 
          prefix={<UserOutlined />} 
          placeholder="用户名/手机号/邮箱" 
        />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[{ required: true, message: '请输入密码！' }]}
      >
        <Input.Password
          prefix={<LockOutlined />}
          placeholder="密码"
        />
      </Form.Item>

      <Form.Item>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Checkbox>记住我</Checkbox>
          <a href="#" onClick={(e) => { e.preventDefault(); message.info('请联系管理员重置密码'); }}>
            忘记密码？
          </a>
        </div>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" block>
          登录
        </Button>
      </Form.Item>

      <div className="login-extra">
        <span>还没有账号？</span>
        <a onClick={() => setActiveTab('register')}>立即注册</a>
      </div>
    </Form>
  );

  const registerFormContent = (
    <Form
      form={registerForm}
      name="register"
      onFinish={handleRegister}
      autoComplete="off"
      size="large"
    >
      {/* 用户角色选择 */}
      <Form.Item label="注册类型">
        <Radio.Group
          value={userRole}
          onChange={(e) => setUserRole(e.target.value)}
          buttonStyle="solid"
        >
          <Radio.Button value="user">普通用户</Radio.Button>
          <Radio.Button value="supplier">供应商</Radio.Button>
          <Radio.Button value="distributor">分销商</Radio.Button>
        </Radio.Group>
      </Form.Item>

      <Form.Item
        name="username"
        rules={[
          { required: true, message: '请输入用户名！' },
          { min: 3, message: '用户名至少3个字符！' }
        ]}
      >
        <Input
          prefix={<UserOutlined />}
          placeholder="用户名"
        />
      </Form.Item>

      <Form.Item
        name="email"
        rules={[
          { required: true, message: '请输入邮箱！' },
          { type: 'email', message: '请输入有效的邮箱地址！' }
        ]}
      >
        <Input 
          prefix={<MailOutlined />} 
          placeholder="邮箱" 
        />
      </Form.Item>

      <Form.Item
        name="phone"
        rules={[
          { required: true, message: '请输入手机号！' },
          { pattern: /^1[3-9]\d{9}$/, message: '请输入有效的手机号！' }
        ]}
      >
        <Input 
          prefix={<PhoneOutlined />} 
          placeholder="手机号" 
        />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[
          { required: true, message: '请输入密码！' },
          { min: 6, message: '密码至少6个字符！' }
        ]}
      >
        <Input.Password
          prefix={<LockOutlined />}
          placeholder="密码"
        />
      </Form.Item>

      <Form.Item
        name="confirmPassword"
        rules={[
          { required: true, message: '请确认密码！' },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('两次输入的密码不一致！'));
            },
          }),
        ]}
      >
        <Input.Password
          prefix={<LockOutlined />}
          placeholder="确认密码"
        />
      </Form.Item>

      {/* 企业信息（供应商和分销商） */}
      {(userRole === 'supplier' || userRole === 'distributor') && (
        <>
          <div style={{
            margin: '20px 0 15px',
            padding: '10px',
            background: 'rgba(138, 43, 226, 0.1)',
            borderRadius: '8px',
            borderLeft: '4px solid #8a2be2'
          }}>
            <h4 style={{ margin: 0, color: '#00f2fe', fontSize: '14px' }}>
              {userRole === 'supplier' ? '供应商' : '分销商'}企业信息
            </h4>
          </div>

          <Form.Item
            name="companyName"
            rules={[{ required: true, message: '请输入公司名称！' }]}
          >
            <Input
              prefix={<ShopOutlined />}
              placeholder="公司名称"
            />
          </Form.Item>

          <Form.Item
            name="businessLicense"
            rules={[
              { required: true, message: '请输入营业执照号！' },
              { pattern: /^[0-9A-Z]{18}$/, message: '请输入有效的营业执照号（18位）！' }
            ]}
          >
            <Input
              prefix={<IdcardOutlined />}
              placeholder="营业执照号（18位统一社会信用代码）"
            />
          </Form.Item>

          <Form.Item
            name="contactPerson"
            rules={[{ required: true, message: '请输入联系人姓名！' }]}
          >
            <Input
              prefix={<UserOutlined />}
              placeholder="联系人姓名"
            />
          </Form.Item>

          <Form.Item
            name="contactPhone"
            rules={[
              { required: true, message: '请输入联系电话！' },
              { pattern: /^1[3-9]\d{9}$/, message: '请输入有效的手机号！' }
            ]}
          >
            <Input
              prefix={<PhoneOutlined />}
              placeholder="联系电话"
            />
          </Form.Item>

          <Form.Item
            name="companyAddress"
            rules={[{ required: true, message: '请输入公司地址！' }]}
          >
            <Input
              prefix={<HomeOutlined />}
              placeholder="公司地址"
            />
          </Form.Item>

          <Form.Item
            name="companyDescription"
          >
            <Input.TextArea
              placeholder="公司简介（选填）"
              rows={3}
              maxLength={200}
              showCount
            />
          </Form.Item>
        </>
      )}

      <Form.Item
        name="agreement"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value ? Promise.resolve() : Promise.reject(new Error('请阅读并同意用户协议')),
          },
        ]}
      >
        <Checkbox>
          我已阅读并同意 <a href="#" onClick={(e) => e.preventDefault()}>
            {userRole === 'supplier' || userRole === 'distributor' ? '《企业用户协议》' : '《用户协议》'}
          </a> 和 <a href="#" onClick={(e) => e.preventDefault()}>《隐私政策》</a>
        </Checkbox>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" block>
          注册
        </Button>
      </Form.Item>

      <div className="login-extra">
        <span>已有账号？</span>
        <a onClick={() => setActiveTab('login')}>立即登录</a>
      </div>
    </Form>
  );

  return (
    <div className="login-container">
      <div className="login-content">
        <div className="login-box">
          <div className="login-header">
            <h1>欢迎来到电商平台</h1>
            <p>优质商品，品质生活</p>
          </div>

          <Tabs
            activeKey={activeTab}
            onChange={setActiveTab}
            centered
            items={[
              {
                key: 'login',
                label: '登录',
                children: loginFormContent,
              },
              {
                key: 'register',
                label: '注册',
                children: registerFormContent,
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;

