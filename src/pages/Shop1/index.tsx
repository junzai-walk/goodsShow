import { useState } from 'react';
import { Layout, Menu, Carousel, Card, Button, Badge, Input, Row, Col, Tag, Rate, Modal, Descriptions, message, Drawer } from 'antd';
import { ShoppingCartOutlined, UserOutlined, SearchOutlined, HomeOutlined, ArrowLeftOutlined, EyeOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { products, categories, banners } from '../../mock/products';
import type { Product } from '../../types/product';
import './index.css';

const { Header, Content, Footer } = Layout;
const { Meta } = Card;

const Shop1 = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string>('全部');
  const [searchText, setSearchText] = useState<string>('');
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [cartVisible, setCartVisible] = useState(false);
  const [detailModalVisible, setDetailModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // 筛选商品
  const filteredProducts = products.filter(p => {
    const matchCategory = selectedCategory === '全部' || p.category === selectedCategory;
    const matchSearch = searchText === '' || p.name.toLowerCase().includes(searchText.toLowerCase());
    return matchCategory && matchSearch;
  });

  // 加入购物车
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

  // 搜索
  const handleSearch = (value: string) => {
    setSearchText(value);
    if (value) {
      message.info(`搜索: ${value}`);
    }
  };

  return (
    <Layout className="shop1-layout">
      <Header className="shop1-header">
        <div className="header-content">
          <div className="logo" onClick={() => navigate('/')}>
            <ArrowLeftOutlined style={{ marginRight: 8 }} />
            <ShoppingCartOutlined style={{ fontSize: 24, marginRight: 8 }} />
            <span>优品商城</span>
          </div>
          <div className="search-bar">
            <Input.Search
              size="large"
              placeholder="搜索商品..."
              prefix={<SearchOutlined />}
              style={{ width: 400 }}
              onSearch={handleSearch}
              onChange={(e) => setSearchText(e.target.value)}
              value={searchText}
              allowClear
            />
          </div>
          <div className="header-actions">
            <Button
              icon={<UserOutlined />}
              type="text"
              style={{ color: '#fff' }}
              onClick={() => navigate('/login')}
            >
              登录
            </Button>
            <Badge count={cartItems.length}>
              <ShoppingCartOutlined
                style={{ fontSize: 24, color: '#fff', cursor: 'pointer' }}
                onClick={() => navigate('/cart')}
              />
            </Badge>
            <UserOutlined style={{ fontSize: 24, color: '#fff', marginLeft: 24, cursor: 'pointer' }} />
          </div>
        </div>
      </Header>

      <Content>
        {/* 轮播图 */}
        <Carousel autoplay className="shop1-carousel">
          {banners.map(banner => (
            <div key={banner.id}>
              <div className="carousel-item" style={{ backgroundImage: `url(${banner.image})` }}>
                <div className="carousel-content">
                  <h2>{banner.title}</h2>
                  <p>{banner.subtitle}</p>
                  <Button type="primary" size="large">立即抢购</Button>
                </div>
              </div>
            </div>
          ))}
        </Carousel>

        {/* 分类导航 */}
        <div className="category-section">
          <div className="container">
            <Menu
              mode="horizontal"
              selectedKeys={[selectedCategory]}
              onClick={({ key }) => setSelectedCategory(key)}
              style={{ justifyContent: 'center', border: 'none' }}
            >
              <Menu.Item key="全部" icon={<HomeOutlined />}>全部商品</Menu.Item>
              {categories.map(cat => (
                <Menu.Item key={cat.name}>
                  <span style={{ marginRight: 4 }}>{cat.icon}</span>
                  {cat.name}
                </Menu.Item>
              ))}
            </Menu>
          </div>
        </div>

        {/* 商品列表 */}
        <div className="container" style={{ padding: '40px 20px' }}>
          <h2 style={{ marginBottom: 24, fontSize: 28 }}>
            {selectedCategory === '全部' ? '热门商品' : selectedCategory}
          </h2>
          <Row gutter={[24, 24]}>
            {filteredProducts.map(product => (
              <Col xs={24} sm={12} md={8} lg={6} key={product.id}>
                <Card
                  hoverable
                  cover={
                    <div style={{ position: 'relative', cursor: 'pointer' }} onClick={() => handleViewDetail(product)}>
                      <img alt={product.name} src={product.image} style={{ height: 240, objectFit: 'cover', width: '100%' }} />
                      <Button
                        icon={<EyeOutlined />}
                        style={{ position: 'absolute', top: 10, right: 10 }}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleQuickView(product);
                        }}
                      >
                        快速查看
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
                        <Rate disabled defaultValue={product.rating} style={{ fontSize: 14 }} />
                        <div style={{ marginTop: 12 }}>
                          <span className="price">¥{product.price}</span>
                          {product.originalPrice && (
                            <span className="original-price">¥{product.originalPrice}</span>
                          )}
                        </div>
                        <div style={{ marginTop: 8 }}>
                          <Tag color="blue">已售 {product.sales}</Tag>
                        </div>
                        <Button type="primary" block style={{ marginTop: 12 }} onClick={() => handleAddToCart(product)}>
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

      <Footer style={{ textAlign: 'center', background: '#001529', color: '#fff' }}>
        <p>优品商城 ©2025 - 现代简约风格</p>
        <Button type="link" onClick={() => navigate('/admin')} style={{ color: '#1890ff' }}>
          进入后台管理
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

export default Shop1;

