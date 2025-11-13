import { useNavigate } from 'react-router-dom';
import { Card, Button, Row, Col } from 'antd';
import { ShopOutlined, RocketOutlined, ShoppingOutlined, DashboardOutlined } from '@ant-design/icons';
import './index.css';

const Home = () => {
  const navigate = useNavigate();

  const shops = [
    {
      id: 1,
      title: '现代简约风格',
      description: '简洁大方，注重用户体验，适合年轻时尚群体',
      icon: <ShopOutlined style={{ fontSize: 48, color: '#1890ff' }} />,
      path: '/shop1',
      color: '#e6f7ff',
    },
    {
      id: 2,
      title: '科技感风格',
      description: '深色主题，炫酷动效，展现科技与未来感',
      icon: <RocketOutlined style={{ fontSize: 48, color: '#722ed1' }} />,
      path: '/shop2',
      color: '#f9f0ff',
    },
    {
      id: 3,
      title: '传统电商风格',
      description: '经典布局，信息丰富，适合综合性电商平台',
      icon: <ShoppingOutlined style={{ fontSize: 48, color: '#52c41a' }} />,
      path: '/shop3',
      color: '#f6ffed',
    },
  ];

  return (
    <div className="home-container">
      <div className="home-header">
        <h1>电商平台店铺系统</h1>
        <p>选择您喜欢的店铺风格开始体验</p>
      </div>

      <Row gutter={[24, 24]} style={{ maxWidth: 1200, margin: '0 auto', padding: '40px 20px' }}>
        {shops.map((shop) => (
          <Col xs={24} sm={24} md={8} key={shop.id}>
            <Card
              hoverable
              className="shop-card"
              style={{ backgroundColor: shop.color }}
              onClick={() => navigate(shop.path)}
            >
              <div style={{ textAlign: 'center', padding: '20px 0' }}>
                {shop.icon}
                <h2 style={{ margin: '20px 0 10px' }}>{shop.title}</h2>
                <p style={{ color: '#666', marginBottom: 20 }}>{shop.description}</p>
                <Button type="primary" size="large">
                  进入店铺
                </Button>
              </div>
            </Card>
          </Col>
        ))}
      </Row>

      <Row gutter={[24, 24]} style={{ maxWidth: 1200, margin: '40px auto 0', padding: '0 20px' }}>
        <Col xs={24}>
          <Card style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', height: '100%' }}>
            <div style={{ padding: '20px 0', textAlign: 'center' }}>
              <DashboardOutlined style={{ fontSize: 48, color: '#fff' }} />
              <h2 style={{ color: '#fff', margin: '20px 0 10px' }}>后台管理系统</h2>
              <p style={{ color: '#f0f0f0', marginBottom: 20 }}>
                数据可视化看板，实时监控店铺运营数据
              </p>
              <Button type="default" size="large" onClick={() => navigate('/admin')}>
                进入后台管理
              </Button>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};


export default Home;

