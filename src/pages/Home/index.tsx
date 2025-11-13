import { useNavigate } from 'react-router-dom';
import { Card, Button, Row, Col, Tag, Rate, Badge, Input } from 'antd';
import {
  ShoppingCartOutlined,
  HeartOutlined,
  StarFilled,
  FireOutlined,
  ThunderboltOutlined,
  CrownOutlined,
  SearchOutlined
} from '@ant-design/icons';
import { products } from '../../mock/products';
import './index.css';

const { Meta } = Card;

const Home = () => {
  const navigate = useNavigate();

  // 获取热门商品（前8个）
  const hotProducts = products.slice(0, 8);

  return (
    <div className="modern-home-container">
      {/* 顶部导航栏 */}
      <div className="top-nav">
        <div className="nav-content">
          <div className="logo-section">
            <ShoppingCartOutlined className="logo-icon" />
            <span className="logo-text">跨境优选商城</span>
          </div>
          <div className="search-section">
            <Input
              size="large"
              placeholder="搜索商品..."
              prefix={<SearchOutlined />}
              className="search-input"
            />
          </div>
          <div className="nav-actions">
            <Button type="text" icon={<HeartOutlined />} className="nav-btn">
              收藏
            </Button>
            <Badge count={0} showZero>
              <Button type="text" icon={<ShoppingCartOutlined />} className="nav-btn">
                购物车
              </Button>
            </Badge>
            <Button type="primary" onClick={() => navigate('/admin')}>
              后台管理
            </Button>
          </div>
        </div>
      </div>

      {/* Banner 区域 */}
      <div className="hero-banner">
        <div className="banner-content">
          <h1 className="banner-title">
            <FireOutlined /> 全球精选好物
          </h1>
          <p className="banner-subtitle">品质保证 · 极速配送 · 售后无忧</p>
          <div className="banner-tags">
            <Tag icon={<ThunderboltOutlined />} color="gold">限时特惠</Tag>
            <Tag icon={<CrownOutlined />} color="purple">新品首发</Tag>
            <Tag icon={<StarFilled />} color="red">爆款推荐</Tag>
          </div>
        </div>
      </div>

      {/* 快捷入口 */}
      <div className="quick-links">
        <div className="container">
          <Row gutter={16}>
            <Col xs={24} sm={8}>
              <div className="quick-link-card" onClick={() => navigate('/shop1')}>
                <div className="quick-icon" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
                  🎨
                </div>
                <div className="quick-info">
                  <h3>现代简约</h3>
                  <p>清新简洁的购物体验</p>
                </div>
              </div>
            </Col>
            <Col xs={24} sm={8}>
              <div className="quick-link-card" onClick={() => navigate('/shop2')}>
                <div className="quick-icon" style={{ background: 'linear-gradient(135deg, #00d4ff 0%, #0099ff 100%)' }}>
                  🚀
                </div>
                <div className="quick-info">
                  <h3>科技潮流</h3>
                  <p>炫酷科技感设计</p>
                </div>
              </div>
            </Col>
            <Col xs={24} sm={8}>
              <div className="quick-link-card" onClick={() => navigate('/shop3')}>
                <div className="quick-icon" style={{ background: 'linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 100%)' }}>
                  🛍️
                </div>
                <div className="quick-info">
                  <h3>经典电商</h3>
                  <p>传统电商布局</p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>

      {/* 热门商品区域 */}
      <div className="products-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              <FireOutlined /> 热门推荐
            </h2>
            <p className="section-subtitle">精选全球优质商品，为您带来极致购物体验</p>
          </div>

          <Row gutter={[16, 16]}>
            {hotProducts.map((product) => (
              <Col xs={12} sm={12} md={6} lg={6} key={product.id}>
                <Card
                  hoverable
                  className="product-card-modern"
                  cover={
                    <div className="product-image-container">
                      <img alt={product.name} src={product.image} />
                      {product.originalPrice && (
                        <div className="discount-badge">
                          -{Math.round((1 - product.price / product.originalPrice) * 100)}%
                        </div>
                      )}
                      <div className="product-overlay">
                        <Button type="primary" icon={<ShoppingCartOutlined />} size="large">
                          加入购物车
                        </Button>
                      </div>
                    </div>
                  }
                >
                  <Meta
                    title={
                      <div className="product-title-modern">{product.name}</div>
                    }
                    description={
                      <div className="product-info-modern">
                        <div className="product-rating">
                          <Rate disabled defaultValue={product.rating} style={{ fontSize: 12 }} />
                          <span className="rating-text">({product.rating})</span>
                        </div>
                        <div className="product-price-section">
                          <span className="current-price">¥{product.price}</span>
                          {product.originalPrice && (
                            <span className="original-price">¥{product.originalPrice}</span>
                          )}
                        </div>
                        <div className="product-sales">
                          已售 {product.sales.toLocaleString()}
                        </div>
                      </div>
                    }
                  />
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>

      {/* 底部 */}
      <div className="modern-footer">
        <div className="container">
          <Row gutter={[32, 32]}>
            <Col xs={24} sm={8}>
              <h3>关于我们</h3>
              <p>致力于为全球用户提供优质的跨境购物体验</p>
            </Col>
            <Col xs={24} sm={8}>
              <h3>客户服务</h3>
              <p>7×24小时在线客服</p>
              <p>电话：400-888-8888</p>
            </Col>
            <Col xs={24} sm={8}>
              <h3>支付方式</h3>
              <p>支持多种支付方式，安全便捷</p>
            </Col>
          </Row>
          <div className="footer-bottom">
            <p>© 2025 跨境优选商城. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

