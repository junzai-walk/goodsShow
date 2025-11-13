import { useState } from 'react';
import { Layout, Menu, Carousel, Card, Button, Badge, Input, Row, Col, Tag, Rate, Space, Modal, Descriptions, message, Drawer } from 'antd';
import {
  ShoppingCartOutlined,
  UserOutlined,
  SearchOutlined,
  ArrowLeftOutlined,
  FireOutlined,
  CrownOutlined,
  GiftOutlined,
  CustomerServiceOutlined,
  EyeOutlined,
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { products, categories, banners } from '../../mock/products';
import type { Product } from '../../types/product';
import './index.css';

const { Header, Content, Footer, Sider } = Layout;
const { Meta } = Card;

const Shop3 = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string>('全部');
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

  return (
    <Layout className="shop3-layout">
      {/* 顶部通知栏 */}
      <div className="top-notice">
        <div className="container">
          <Space>
            <FireOutlined /> 限时抢购进行中
            <CrownOutlined /> 新用户专享优惠
            <GiftOutlined /> 满299包邮
          </Space>
        </div>
      </div>

      <Header className="shop3-header">
        <div className="header-top">
          <div className="container">
            <div className="logo-section" onClick={() => navigate('/')}>
              <ArrowLeftOutlined style={{ marginRight: 8 }} />
              <ShoppingCartOutlined className="logo-icon" />
              <span className="logo-text">品质商城</span>
            </div>
            <div className="search-section">
              <Input.Search
                size="large"
                placeholder="搜索商品"
                enterButton="搜索"
                className="main-search"
                onSearch={(value) => setSearchText(value)}
                onChange={(e) => setSearchText(e.target.value)}
                value={searchText}
                allowClear
              />
              <div className="hot-keywords">
                <span>热门：</span>
                <a href="#" onClick={(e) => { e.preventDefault(); setSearchText('iPhone 17'); }}>iPhone 17</a>
                <a href="#" onClick={(e) => { e.preventDefault(); setSearchText('运动鞋'); }}>运动鞋</a>
                <a href="#" onClick={(e) => { e.preventDefault(); setSearchText('咖啡'); }}>咖啡</a>
              </div>
            </div>
            <div className="user-section">
              <Space size="large">
                <div className="user-item" style={{ cursor: 'pointer' }} onClick={() => navigate('/login')}>
                  <UserOutlined />
                  <span>登录/注册</span>
                </div>
                <Badge count={cartItems.length}>
                  <div className="user-item" style={{ cursor: 'pointer' }} onClick={() => navigate('/cart')}>
                    <ShoppingCartOutlined />
                    <span>购物车</span>
                  </div>
                </Badge>
                <div className="user-item">
                  <CustomerServiceOutlined />
                  <span>客服</span>
                </div>
              </Space>
            </div>
          </div>
        </div>

        <div className="header-nav">
          <div className="container">
            <Menu
              mode="horizontal"
              selectedKeys={[selectedCategory]}
              onClick={({ key }) => setSelectedCategory(key)}
              className="main-nav"
            >
              <Menu.Item key="全部">全部商品</Menu.Item>
              {categories.map(cat => (
                <Menu.Item key={cat.name}>
                  {cat.icon} {cat.name}
                </Menu.Item>
              ))}
            </Menu>
          </div>
        </div>
      </Header>

      <Content className="shop3-content">
        <div className="container">
          <Row gutter={16}>
            {/* 左侧分类 */}
            <Col span={4}>
              <Card title="商品分类" className="category-card">
                <Menu
                  mode="vertical"
                  selectedKeys={[selectedCategory]}
                  onClick={({ key }) => setSelectedCategory(key)}
                  className="category-menu"
                >
                  <Menu.Item key="全部">全部商品</Menu.Item>
                  {categories.map(cat => (
                    <Menu.Item key={cat.name}>
                      {cat.icon} {cat.name}
                    </Menu.Item>
                  ))}
                </Menu>
              </Card>

              <Card title="热销排行" className="hot-card" style={{ marginTop: 16 }}>
                {products.slice(0, 5).map((product, index) => (
                  <div key={product.id} className="hot-item">
                    <span className={`rank rank-${index + 1}`}>{index + 1}</span>
                    <div className="hot-info">
                      <div className="hot-name">{product.name}</div>
                      <div className="hot-price">¥{product.price}</div>
                    </div>
                  </div>
                ))}
              </Card>
            </Col>

            {/* 右侧内容 */}
            <Col span={20}>
              {/* 轮播图 */}
              <Carousel autoplay className="shop3-carousel">
                {banners.map(banner => (
                  <div key={banner.id}>
                    <div className="carousel-item" style={{ backgroundImage: `url(${banner.image})` }}>
                      <div className="carousel-text">
                        <h2>{banner.title}</h2>
                        <p>{banner.subtitle}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </Carousel>

              {/* 商品列表 */}
              <div style={{ marginTop: 20 }}>
                <h2 className="section-title">
                  {selectedCategory === '全部' ? '推荐商品' : selectedCategory}
                </h2>
                <Row gutter={[16, 16]}>
                  {filteredProducts.map(product => (
                    <Col xs={24} sm={12} md={8} lg={6} key={product.id}>
                      <Card
                        hoverable
                        cover={
                          <div style={{ position: 'relative', cursor: 'pointer' }} onClick={() => handleViewDetail(product)}>
                            <img alt={product.name} src={product.image} style={{ height: 200, objectFit: 'cover', width: '100%' }} />
                            <Button
                              icon={<EyeOutlined />}
                              size="small"
                              style={{ position: 'absolute', top: 10, right: 10 }}
                              onClick={(e) => {
                                e.stopPropagation();
                                handleQuickView(product);
                              }}
                            >
                              查看
                            </Button>
                          </div>
                        }
                        className="product-card"
                      >
                        <Meta
                          title={product.name}
                          description={
                            <div>
                              <p className="product-desc">{product.description}</p>
                              <Rate disabled defaultValue={product.rating} style={{ fontSize: 12 }} />
                              <div className="price-row">
                                <span className="price">¥{product.price}</span>
                                {product.originalPrice && (
                                  <span className="original-price">¥{product.originalPrice}</span>
                                )}
                              </div>
                              <div style={{ marginTop: 8 }}>
                                <Tag color="red">已售 {product.sales}</Tag>
                              </div>
                              <Space style={{ marginTop: 12, width: '100%' }}>
                                <Button type="primary" danger onClick={() => handleAddToCart(product)} style={{ flex: 1 }}>
                                  加入购物车
                                </Button>
                              </Space>
                            </div>
                          }
                        />
                      </Card>
                    </Col>
                  ))}
                </Row>
              </div>
            </Col>
          </Row>
        </div>
      </Content>

      <Footer className="shop3-footer">
        <div className="container">
          <Row gutter={32}>
            <Col span={6}>
              <h3>购物指南</h3>
              <ul>
                <li><a href="#">购物流程</a></li>
                <li><a href="#">会员介绍</a></li>
                <li><a href="#">常见问题</a></li>
              </ul>
            </Col>
            <Col span={6}>
              <h3>配送方式</h3>
              <ul>
                <li><a href="#">上门自提</a></li>
                <li><a href="#">快递配送</a></li>
                <li><a href="#">配送时间</a></li>
              </ul>
            </Col>
            <Col span={6}>
              <h3>支付方式</h3>
              <ul>
                <li><a href="#">在线支付</a></li>
                <li><a href="#">货到付款</a></li>
                <li><a href="#">分期付款</a></li>
              </ul>
            </Col>
            <Col span={6}>
              <h3>售后服务</h3>
              <ul>
                <li><a href="#">退换货政策</a></li>
                <li><a href="#">退款说明</a></li>
                <li><a href="#">联系客服</a></li>
              </ul>
            </Col>
          </Row>
          <div className="footer-bottom">
            <p>品质商城 ©2025 - 传统电商风格</p>
            <Button type="link" onClick={() => navigate('/admin')}>
              进入后台管理
            </Button>
          </div>
        </div>
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
            <ShoppingCartOutlined style={{ fontSize: 64, color: '#ccc' }} />
            <p style={{ marginTop: 16, color: '#999' }}>购物车是空的</p>
          </div>
        ) : (
          <>
            {cartItems.map((item, index) => (
              <Card key={index} style={{ marginBottom: 16 }} size="small">
                <div style={{ display: 'flex', gap: 12 }}>
                  <img src={item.image} alt={item.name} style={{ width: 80, height: 80, objectFit: 'cover' }} />
                  <div style={{ flex: 1 }}>
                    <h4>{item.name}</h4>
                    <p style={{ color: '#f5222d', fontSize: 16, fontWeight: 'bold' }}>¥{item.price}</p>
                  </div>
                </div>
              </Card>
            ))}
            <div style={{ marginTop: 24, padding: '16px 0', borderTop: '1px solid #f0f0f0' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 16 }}>
                <span>总计:</span>
                <span style={{ fontSize: 20, color: '#f5222d', fontWeight: 'bold' }}>
                  ¥{cartItems.reduce((sum, item) => sum + item.price, 0).toFixed(2)}
                </span>
              </div>
              <Button type="primary" danger block size="large" onClick={() => message.success('结算功能开发中...')}>
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
                  <span style={{ fontSize: 24, color: '#f5222d', fontWeight: 'bold' }}>¥{selectedProduct.price}</span>
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
                <Button type="primary" danger size="large" block onClick={() => {
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

export default Shop3;

