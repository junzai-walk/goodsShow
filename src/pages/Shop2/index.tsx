import { useState, useEffect } from 'react';
import { Layout, Card, Button, Badge, Input, Row, Col, Tag, Rate, Modal, Descriptions, message, Drawer } from 'antd';
import { ShoppingCartOutlined, UserOutlined, SearchOutlined, ArrowLeftOutlined, ThunderboltOutlined, EyeOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { products, categories, banners } from '../../mock/products';
import type { Product } from '../../types/product';
import './index.css';

const { Header, Content, Footer } = Layout;
const { Meta } = Card;

const Shop2 = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string>('全部');
  const [currentBanner, setCurrentBanner] = useState(0);
  const [searchText, setSearchText] = useState<string>('');
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [cartVisible, setCartVisible] = useState(false);
  const [detailModalVisible, setDetailModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filteredProducts = products.filter(p => {
    const matchCategory = selectedCategory === '全部' || p.category === selectedCategory;
    const matchSearch = searchText === '' || p.name.toLowerCase().includes(searchText.toLowerCase());
    return matchCategory && matchSearch;
  });

  const handleAddToCart = (product: Product) => {
    setCartItems([...cartItems, product]);
    message.success(`${product.name} 已加入购物车！`);
  };

  // 查看商品详情 - 跳转到详情页
  const handleViewDetail = (product: Product) => {
    navigate(`/product/${product.id}`);
  };

  // 快速查看 - 弹窗
  const handleQuickView = (product: Product) => {
    setSelectedProduct(product);
    setDetailModalVisible(true);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Layout className="shop2-layout">
      <Header className="shop2-header">
        <div className="header-content">
          <div className="logo" onClick={() => navigate('/')}>
            <ArrowLeftOutlined style={{ marginRight: 8 }} />
            <ThunderboltOutlined className="logo-icon" />
            <span className="logo-text">未来商城</span>
          </div>
          <div className="search-bar">
            <Input.Search
              size="large"
              placeholder="探索未来科技产品..."
              prefix={<SearchOutlined />}
              className="tech-search"
              onSearch={(value) => setSearchText(value)}
              onChange={(e) => setSearchText(e.target.value)}
              value={searchText}
              allowClear
            />
          </div>
          <div className="header-actions">
            <Button
              icon={<UserOutlined />}
              type="text"
              className="header-icon"
              onClick={() => navigate('/login')}
            >
              登录
            </Button>
            <Badge count={cartItems.length} className="cart-badge">
              <ShoppingCartOutlined className="header-icon" onClick={() => navigate('/cart')} style={{ cursor: 'pointer' }} />
            </Badge>
          </div>
        </div>
      </Header>

      <Content className="shop2-content">
        {/* 科技感轮播 */}
        <div className="tech-banner">
          <div className="banner-bg" style={{ backgroundImage: `url(${banners[currentBanner].image})` }}>
            <div className="banner-overlay"></div>
            {/* <div className="banner-content">
              <h1 className="glitch" data-text={banners[currentBanner].title}>
                {banners[currentBanner].title}
              </h1>
              <p className="tech-subtitle">{banners[currentBanner].subtitle}</p>
              <Button type="primary" size="large" className="tech-button">
                立即探索
              </Button>
            </div> */}
          </div>
          <div className="banner-indicators">
            {banners.map((_, index) => (
              <span
                key={index}
                className={`indicator ${index === currentBanner ? 'active' : ''}`}
                onClick={() => setCurrentBanner(index)}
              />
            ))}
          </div>
        </div>

        {/* 分类导航 */}
        <div className="tech-categories">
          <div className="container">
            <div className="category-grid">
              <div
                className={`category-item ${selectedCategory === '全部' ? 'active' : ''}`}
                onClick={() => setSelectedCategory('全部')}
              >
                <div className="category-icon">🌐</div>
                <span>全部</span>
              </div>
              {categories.map(cat => (
                <div
                  key={cat.id}
                  className={`category-item ${selectedCategory === cat.name ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(cat.name)}
                >
                  <div className="category-icon">{cat.icon}</div>
                  <span>{cat.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 商品网格 */}
        <div className="container" style={{ padding: '60px 20px' }}>
          <h2 className="section-title">
            <span className="title-line"></span>
            {selectedCategory === '全部' ? '精选产品' : selectedCategory}
            <span className="title-line"></span>
          </h2>
          <Row gutter={[24, 24]}>
            {filteredProducts.map(product => (
              <Col xs={24} sm={12} md={8} lg={6} key={product.id}>
                <Card
                  hoverable
                  className="tech-product-card"
                  cover={
                    <div className="product-image-wrapper" style={{ cursor: 'pointer' }} onClick={() => handleViewDetail(product)}>
                      <img alt={product.name} src={product.image} />
                      <div className="product-overlay">
                        <Button
                          type="primary"
                          className="quick-view"
                          icon={<EyeOutlined />}
                          onClick={(e) => {
                            e.stopPropagation();
                            handleQuickView(product);
                          }}
                        >
                          快速查看
                        </Button>
                      </div>
                    </div>
                  }
                >
                  <Meta
                    title={<span className="product-title">{product.name}</span>}
                    description={
                      <div>
                        <p className="product-desc">{product.description}</p>
                        <Rate disabled defaultValue={product.rating} style={{ fontSize: 12 }} />
                        <div className="price-section">
                          <span className="tech-price">¥{product.price}</span>
                          {product.originalPrice && (
                            <span className="tech-original-price">¥{product.originalPrice}</span>
                          )}
                        </div>
                        <Tag color="cyan" className="sales-tag">销量 {product.sales}</Tag>
                        <Button type="primary" block className="add-cart-btn" onClick={() => handleAddToCart(product)}>
                          加入购物车
                        </Button>
                      </div>
                    }
                  />
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </Content>

      <Footer className="shop2-footer">
        <p>未来商城 ©2025 - 科技引领未来</p>
        <Button type="link" onClick={() => navigate('/admin')} className="admin-link">
          进入后台管理系统
        </Button>
      </Footer>

      {/* 购物车抽屉 */}
      <Drawer
        title="购物车"
        placement="right"
        onClose={() => setCartVisible(false)}
        open={cartVisible}
        width={400}
      >
        {cartItems.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '40px 0' }}>
            <ShoppingCartOutlined style={{ fontSize: 64, color: '#00d4ff' }} />
            <p style={{ marginTop: 16, color: '#999' }}>购物车是空的</p>
          </div>
        ) : (
          <>
            {cartItems.map((item, index) => (
              <Card key={index} style={{ marginBottom: 16, background: '#1a1a2e', border: '1px solid #00d4ff' }} size="small">
                <div style={{ display: 'flex', gap: 12 }}>
                  <img src={item.image} alt={item.name} style={{ width: 80, height: 80, objectFit: 'cover' }} />
                  <div style={{ flex: 1 }}>
                    <h4 style={{ color: '#fff' }}>{item.name}</h4>
                    <p style={{ color: '#00ff88', fontSize: 16, fontWeight: 'bold' }}>¥{item.price}</p>
                  </div>
                </div>
              </Card>
            ))}
            <div style={{ marginTop: 24, padding: '16px 0', borderTop: '1px solid #00d4ff' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 16 }}>
                <span style={{ color: '#fff' }}>总计:</span>
                <span style={{ fontSize: 20, color: '#00ff88', fontWeight: 'bold' }}>
                  ¥{cartItems.reduce((sum, item) => sum + item.price, 0).toFixed(2)}
                </span>
              </div>
              <Button type="primary" block size="large" onClick={() => message.success('结算功能开发中...')}>
                去结算
              </Button>
            </div>
          </>
        )}
      </Drawer>

      {/* 商品详情弹窗 */}
      <Modal
        title="商品详情"
        open={detailModalVisible}
        onCancel={() => setDetailModalVisible(false)}
        footer={null}
        width={800}
      >
        {selectedProduct && (
          <Row gutter={24}>
            <Col span={12}>
              <img src={selectedProduct.image} alt={selectedProduct.name} style={{ width: '100%', borderRadius: 8 }} />
            </Col>
            <Col span={12}>
              <h2>{selectedProduct.name}</h2>
              <Rate disabled defaultValue={selectedProduct.rating} />
              <span style={{ marginLeft: 8 }}>{selectedProduct.rating} 分</span>
              <Descriptions column={1} style={{ marginTop: 16 }}>
                <Descriptions.Item label="价格">
                  <span style={{ fontSize: 24, color: '#00ff88', fontWeight: 'bold' }}>¥{selectedProduct.price}</span>
                  {selectedProduct.originalPrice && (
                    <span style={{ marginLeft: 8, textDecoration: 'line-through', color: '#999' }}>
                      ¥{selectedProduct.originalPrice}
                    </span>
                  )}
                </Descriptions.Item>
                <Descriptions.Item label="分类">{selectedProduct.category}</Descriptions.Item>
                <Descriptions.Item label="销量">{selectedProduct.sales} 件</Descriptions.Item>
                <Descriptions.Item label="库存">{selectedProduct.stock} 件</Descriptions.Item>
                <Descriptions.Item label="描述">{selectedProduct.description}</Descriptions.Item>
              </Descriptions>
              <div style={{ marginTop: 24 }}>
                <Button type="primary" size="large" block onClick={() => {
                  handleAddToCart(selectedProduct);
                  setDetailModalVisible(false);
                }}>
                  加入购物车
                </Button>
              </div>
            </Col>
          </Row>
        )}
      </Modal>
    </Layout>
  );
};

export default Shop2;

