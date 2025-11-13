import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Button,
  InputNumber,
  Rate,
  Tabs,
  message,
  Breadcrumb,
  Image,
  Tag,
  Divider,
  Progress,
  Card,
  Avatar,
  Radio,
  Space
} from 'antd';
import {
  ShoppingCartOutlined,
  HeartOutlined,
  ShareAltOutlined,
  SafetyOutlined,
  TruckOutlined,
  CustomerServiceOutlined,
  HomeOutlined
} from '@ant-design/icons';
import { products } from '../../mock/products';
import type { Product } from '../../types/product';
import { useCart } from '../../contexts/CartContext';
import './index.css';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState<string>();
  const [selectedSize, setSelectedSize] = useState<string>();

  useEffect(() => {
    const foundProduct = products.find(p => p.id === Number(id));
    if (foundProduct) {
      setProduct(foundProduct);
      // 设置默认选项
      if (foundProduct.colors && foundProduct.colors.length > 0) {
        setSelectedColor(foundProduct.colors[0]);
      }
      if (foundProduct.sizes && foundProduct.sizes.length > 0) {
        setSelectedSize(foundProduct.sizes[0]);
      }
    } else {
      message.error('商品不存在');
      navigate('/');
    }
  }, [id, navigate]);

  if (!product) {
    return <div className="product-detail-loading">加载中...</div>;
  }

  // 使用商品的多张图片，如果没有则使用主图
  const productImages = product.images && product.images.length > 0
    ? product.images
    : [product.image, product.image, product.image];

  // 加入购物车
  const handleAddToCart = () => {
    addToCart(product, quantity, selectedColor, selectedSize);
    message.success(`已添加 ${quantity} 件商品到购物车`);
  };

  // 立即购买
  const handleBuyNow = () => {
    addToCart(product, quantity, selectedColor, selectedSize);
    navigate('/cart');
  };

  // 收藏商品
  const handleFavorite = () => {
    message.success('已添加到收藏夹');
  };

  // 分享商品
  const handleShare = () => {
    message.info('分享功能开发中...');
  };

  // 评价数据
  const reviews = [
    {
      id: 1,
      user: '张三',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=1',
      rating: 5,
      date: '2025-01-10',
      content: '非常好的商品，质量很棒，物流也很快！',
      images: []
    },
    {
      id: 2,
      user: '李四',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=2',
      rating: 4,
      date: '2025-01-08',
      content: '整体不错，性价比很高，推荐购买。',
      images: []
    },
    {
      id: 3,
      user: '王五',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=3',
      rating: 5,
      date: '2025-01-05',
      content: '超出预期，包装精美，客服态度也很好！',
      images: []
    },
  ];

  // 评分统计
  const ratingStats = [
    { star: 5, count: 1523, percent: 85 },
    { star: 4, count: 189, percent: 10 },
    { star: 3, count: 45, percent: 3 },
    { star: 2, count: 18, percent: 1 },
    { star: 1, count: 18, percent: 1 },
  ];

  const tabItems = [
    {
      key: 'detail',
      label: '商品详情',
      children: (
        <div className="detail-content">
          <h3>商品介绍</h3>
          <p>{product.description}</p>
          {product.detailDescription && (
            <>
              <Divider />
              <h3>详细描述</h3>
              <p>{product.detailDescription}</p>
            </>
          )}
          <Divider />
          <h3>商品参数</h3>
          <div className="product-params">
            <div className="param-item">
              <span className="param-label">商品名称：</span>
              <span className="param-value">{product.name}</span>
            </div>
            <div className="param-item">
              <span className="param-label">商品分类：</span>
              <span className="param-value">{product.category}</span>
            </div>
            <div className="param-item">
              <span className="param-label">库存数量：</span>
              <span className="param-value">{product.stock} 件</span>
            </div>
            <div className="param-item">
              <span className="param-label">已售数量：</span>
              <span className="param-value">{product.sales} 件</span>
            </div>
            {product.specs && Object.entries(product.specs).map(([key, value]) => (
              <div key={key} className="param-item">
                <span className="param-label">{key}：</span>
                <span className="param-value">{value}</span>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      key: 'reviews',
      label: `用户评价 (${reviews.length})`,
      children: (
        <div className="reviews-content">
          <div className="rating-summary">
            <div className="rating-score">
              <div className="score-number">{product.rating}</div>
              <Rate disabled value={product.rating} allowHalf />
              <div className="score-text">综合评分</div>
            </div>
            <div className="rating-distribution">
              {ratingStats.map(stat => (
                <div key={stat.star} className="rating-bar">
                  <span className="star-label">{stat.star}星</span>
                  <Progress
                    percent={stat.percent}
                    strokeColor="#fadb14"
                    showInfo={false}
                  />
                  <span className="count-label">{stat.count}</span>
                </div>
              ))}
            </div>
          </div>
          <Divider />
          <div className="reviews-list">
            {reviews.map(review => (
              <Card key={review.id} className="review-card">
                <div className="review-header">
                  <Avatar src={review.avatar} size={48} />
                  <div className="review-user-info">
                    <div className="review-user-name">{review.user}</div>
                    <Rate disabled value={review.rating} />
                  </div>
                  <div className="review-date">{review.date}</div>
                </div>
                <div className="review-content">{review.content}</div>
              </Card>
            ))}
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="product-detail-container">
      <div className="product-detail-header">
        <Breadcrumb
          items={[
            { title: <HomeOutlined />, href: '/' },
            { title: product.category },
            { title: product.name },
          ]}
        />
      </div>

      <div className="product-detail-content">
        <div className="product-gallery">
          <div className="main-image">
            <Image
              src={productImages[selectedImage]}
              alt={product.name}
              preview={{
                src: productImages[selectedImage],
              }}
            />
          </div>
          <div className="thumbnail-list">
            {productImages.map((img, index) => (
              <div
                key={index}
                className={`thumbnail ${selectedImage === index ? 'active' : ''}`}
                onClick={() => setSelectedImage(index)}
              >
                <img src={img} alt={`${product.name} ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>

        <div className="product-info">
          <h1 className="product-title">{product.name}</h1>
          <div className="product-subtitle">{product.description}</div>

          <div className="product-rating">
            <Rate disabled value={product.rating} allowHalf />
            <span className="rating-text">{product.rating} 分</span>
            <Divider type="vertical" />
            <span className="sales-text">已售 {product.sales} 件</span>
          </div>

          <div className="product-price">
            <span className="current-price">¥{product.price}</span>
            {product.originalPrice && (
              <span className="original-price">¥{product.originalPrice}</span>
            )}
          </div>
          {product.originalPrice && (
            <Tag color="red">
              省 ¥{product.originalPrice - product.price}
            </Tag>
          )}

          {/* 颜色选择 */}
          {product.colors && product.colors.length > 0 && (
            <div className="product-options">
              <div className="option-label">颜色：</div>
              <Radio.Group value={selectedColor} onChange={(e) => setSelectedColor(e.target.value)}>
                <Space wrap>
                  {product.colors.map((color) => (
                    <Radio.Button key={color} value={color}>
                      {color}
                    </Radio.Button>
                  ))}
                </Space>
              </Radio.Group>
            </div>
          )}

          {/* 尺寸选择 */}
          {product.sizes && product.sizes.length > 0 && (
            <div className="product-options">
              <div className="option-label">规格：</div>
              <Radio.Group value={selectedSize} onChange={(e) => setSelectedSize(e.target.value)}>
                <Space wrap>
                  {product.sizes.map((size) => (
                    <Radio.Button key={size} value={size}>
                      {size}
                    </Radio.Button>
                  ))}
                </Space>
              </Radio.Group>
            </div>
          )}

          <div className="product-stock">
            <span className="stock-label">库存：</span>
            <span className="stock-value">{product.stock} 件</span>
          </div>

          <div className="product-quantity">
            <span className="quantity-label">数量：</span>
            <InputNumber
              min={1}
              max={product.stock}
              value={quantity}
              onChange={(value) => setQuantity(value || 1)}
            />
          </div>

          <div className="product-actions">
            <Button
              type="primary"
              size="large"
              icon={<ShoppingCartOutlined />}
              onClick={handleAddToCart}
              className="add-cart-btn"
            >
              加入购物车
            </Button>
            <Button
              type="primary"
              size="large"
              danger
              onClick={handleBuyNow}
              className="buy-now-btn"
            >
              立即购买
            </Button>
          </div>

          <div className="product-extra-actions">
            <Button icon={<HeartOutlined />} onClick={handleFavorite}>
              收藏
            </Button>
            <Button icon={<ShareAltOutlined />} onClick={handleShare}>
              分享
            </Button>
          </div>

          <div className="product-services">
            <div className="service-item">
              <SafetyOutlined />
              <span>正品保证</span>
            </div>
            <div className="service-item">
              <TruckOutlined />
              <span>极速配送</span>
            </div>
            <div className="service-item">
              <CustomerServiceOutlined />
              <span>7天无理由退换</span>
            </div>
          </div>
        </div>
      </div>

      <div className="product-detail-tabs">
        <Tabs items={tabItems} />
      </div>
    </div>
  );
};

export default ProductDetail;

