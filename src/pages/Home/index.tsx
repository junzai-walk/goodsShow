import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Button, Row, Col, Tag, Rate, Badge, Input, Drawer, message, InputNumber, Empty } from 'antd';
import {
  ShoppingCartOutlined,
  HeartOutlined,
  StarFilled,
  FireOutlined,
  ThunderboltOutlined,
  CrownOutlined,
  SearchOutlined,
  DeleteOutlined,
  MinusOutlined,
  PlusOutlined
} from '@ant-design/icons';
import { products, categories } from '../../mock/products';
import { useCart } from '../../contexts/CartContext';
import './index.css';

const { Meta } = Card;

const Home = () => {
  const navigate = useNavigate();
  const { cartItems, addToCart, removeFromCart, updateQuantity, getCartTotal, getCartCount } = useCart();
  const [cartVisible, setCartVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('全部');

  // 根据分类筛选商品
  const filteredProducts = selectedCategory === '全部'
    ? products
    : products.filter(p => p.category === selectedCategory);

  // 处理加入购物车
  const handleAddToCart = (product: any) => {
    addToCart(product, 1);
    message.success(`${product.name} 已加入购物车！`);
  };

  // 处理查看商品详情
  const handleViewDetail = (productId: number) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div className="modern-home-container">
      {/* 顶部导航栏 */}
      <div className="top-nav">
        <div className="nav-content">
          <div className="logo-section" onClick={() => navigate('/')}>
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
            <Badge count={getCartCount()} showZero>
              <Button
                type="text"
                icon={<ShoppingCartOutlined />}
                className="nav-btn"
                onClick={() => setCartVisible(true)}
              >
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
        {/* <div className="banner-content">
          <h1 className="banner-title">
            <FireOutlined /> 全球精选好物
          </h1>
          <p className="banner-subtitle">品质保证 · 极速配送 · 售后无忧</p>
          <div className="banner-tags">
            <Tag icon={<ThunderboltOutlined />} color="gold">限时特惠</Tag>
            <Tag icon={<CrownOutlined />} color="purple">新品首发</Tag>
            <Tag icon={<StarFilled />} color="red">爆款推荐</Tag>
          </div>
        </div> */}
      </div>

      {/* 分类导航 */}
      <div className="category-nav">
        <div className="container">
          <div className="category-list">
            <div
              className={`category-item ${selectedCategory === '全部' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('全部')}
            >
              <span className="category-icon">🏪</span>
              <span className="category-name">全部</span>
            </div>
            {categories.map((cat) => (
              <div
                key={cat.id}
                className={`category-item ${selectedCategory === cat.name ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat.name)}
              >
                <span className="category-icon">{cat.icon}</span>
                <span className="category-name">{cat.name}</span>
              </div>
            ))}
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

      {/* 商品展示区域 */}
      <div className="products-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              <FireOutlined /> {selectedCategory === '全部' ? '热门推荐' : selectedCategory}
            </h2>
            <p className="section-subtitle">
              {selectedCategory === '全部'
                ? '精选全球优质商品，为您带来极致购物体验'
                : `共 ${filteredProducts.length} 件商品`}
            </p>
          </div>

          <Row gutter={[16, 16]}>
            {filteredProducts.map((product) => (
              <Col xs={12} sm={12} md={6} lg={6} key={product.id}>
                <Card
                  hoverable
                  className="product-card-modern"
                  cover={
                    <div className="product-image-container" onClick={() => handleViewDetail(product.id)}>
                      <img alt={product.name} src={product.image} />
                      {product.originalPrice && (
                        <div className="discount-badge">
                          -{Math.round((1 - product.price / product.originalPrice) * 100)}%
                        </div>
                      )}
                      <div className="product-overlay">
                        <Button
                          type="primary"
                          icon={<ShoppingCartOutlined />}
                          size="large"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleAddToCart(product);
                          }}
                        >
                          加入购物车
                        </Button>
                      </div>
                    </div>
                  }
                >
                  <Meta
                    title={
                      <div className="product-title-modern" onClick={() => handleViewDetail(product.id)}>
                        {product.name}
                      </div>
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

      {/* 购物车抽屉 */}
      <Drawer
        title={`购物车 (${getCartCount()} 件商品)`}
        placement="right"
        onClose={() => setCartVisible(false)}
        open={cartVisible}
        width={400}
        footer={
          cartItems.length > 0 && (
            <div style={{ padding: '16px 0' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 16, fontSize: 16, fontWeight: 600 }}>
                <span>总计：</span>
                <span style={{ color: '#ff4d4f', fontSize: 20 }}>¥{getCartTotal().toFixed(2)}</span>
              </div>
              <Button type="primary" size="large" block onClick={() => navigate('/cart')}>
                去结算
              </Button>
            </div>
          )
        }
      >
        {cartItems.length === 0 ? (
          <Empty description="购物车是空的" />
        ) : (
          <div className="cart-items">
            {cartItems.map((item) => (
              <Card key={item.id} style={{ marginBottom: 16 }} size="small">
                <div style={{ display: 'flex', gap: 12 }}>
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{ width: 80, height: 80, objectFit: 'cover', borderRadius: 4, cursor: 'pointer' }}
                    onClick={() => {
                      setCartVisible(false);
                      handleViewDetail(item.id);
                    }}
                  />
                  <div style={{ flex: 1 }}>
                    <h4 style={{ margin: '0 0 8px 0', fontSize: 14 }}>{item.name}</h4>
                    <p style={{ color: '#ff4d4f', fontSize: 16, fontWeight: 'bold', margin: '0 0 8px 0' }}>
                      ¥{item.price}
                    </p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <Button
                        size="small"
                        icon={<MinusOutlined />}
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      />
                      <span style={{ minWidth: 30, textAlign: 'center' }}>{item.quantity}</span>
                      <Button
                        size="small"
                        icon={<PlusOutlined />}
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      />
                      <Button
                        size="small"
                        danger
                        icon={<DeleteOutlined />}
                        onClick={() => {
                          removeFromCart(item.id);
                          message.success('已从购物车移除');
                        }}
                        style={{ marginLeft: 'auto' }}
                      />
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </Drawer>

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

