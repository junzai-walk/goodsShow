import { useState, useEffect } from 'react';
import { 
  Button, 
  InputNumber, 
  Checkbox, 
  Empty, 
  message, 
  Popconfirm,
  Card,
  Divider,
  Space,
  Tag
} from 'antd';
import { 
  DeleteOutlined, 
  ShoppingOutlined,
  HomeOutlined,
  MinusOutlined,
  PlusOutlined
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import type { Product } from '../../types/product';
import './index.css';

interface CartItem extends Product {
  quantity: number;
  checked: boolean;
}

const Cart = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [allChecked, setAllChecked] = useState(false);

  // 从 localStorage 加载购物车数据
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      const items = JSON.parse(savedCart).map((item: any) => ({
        ...item,
        checked: false,
      }));
      setCartItems(items);
    }
  }, []);

  // 保存购物车到 localStorage
  const saveCart = (items: CartItem[]) => {
    const itemsToSave = items.map(({ checked, ...item }) => item);
    localStorage.setItem('cart', JSON.stringify(itemsToSave));
    setCartItems(items);
  };

  // 更新商品数量
  const handleQuantityChange = (id: number, quantity: number) => {
    const newItems = cartItems.map(item =>
      item.id === id ? { ...item, quantity } : item
    );
    saveCart(newItems);
  };

  // 删除商品
  const handleRemove = (id: number) => {
    const newItems = cartItems.filter(item => item.id !== id);
    saveCart(newItems);
    message.success('已从购物车移除');
  };

  // 单选商品
  const handleCheckItem = (id: number, checked: boolean) => {
    const newItems = cartItems.map(item =>
      item.id === id ? { ...item, checked } : item
    );
    setCartItems(newItems);
    setAllChecked(newItems.every(item => item.checked));
  };

  // 全选/取消全选
  const handleCheckAll = (checked: boolean) => {
    const newItems = cartItems.map(item => ({ ...item, checked }));
    setCartItems(newItems);
    setAllChecked(checked);
  };

  // 删除选中商品
  const handleRemoveSelected = () => {
    const newItems = cartItems.filter(item => !item.checked);
    saveCart(newItems);
    message.success('已删除选中商品');
    setAllChecked(false);
  };

  // 计算选中商品总价
  const getTotalPrice = () => {
    return cartItems
      .filter(item => item.checked)
      .reduce((total, item) => total + item.price * item.quantity, 0);
  };

  // 计算选中商品数量
  const getSelectedCount = () => {
    return cartItems.filter(item => item.checked).length;
  };

  // 结算
  const handleCheckout = () => {
    const selectedItems = cartItems.filter(item => item.checked);
    if (selectedItems.length === 0) {
      message.warning('请选择要结算的商品');
      return;
    }
    message.success('结算功能开发中...');
  };

  // 继续购物
  const handleContinueShopping = () => {
    navigate('/');
  };

  // 查看商品详情
  const handleViewDetail = (id: number) => {
    navigate(`/product/${id}`);
  };

  if (cartItems.length === 0) {
    return (
      <div className="cart-empty">
        <Empty
          image={Empty.PRESENTED_IMAGE_SIMPLE}
          description="购物车是空的"
        >
          <Button type="primary" icon={<ShoppingOutlined />} onClick={handleContinueShopping}>
            去逛逛
          </Button>
        </Empty>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <div className="cart-header">
        <h1>
          <ShoppingOutlined /> 购物车
        </h1>
        <Button icon={<HomeOutlined />} onClick={() => navigate('/')}>
          返回首页
        </Button>
      </div>

      <div className="cart-content">
        <div className="cart-list">
          <div className="cart-list-header">
            <Checkbox
              checked={allChecked}
              onChange={(e) => handleCheckAll(e.target.checked)}
            >
              全选
            </Checkbox>
            <span className="header-title">商品信息</span>
            <span className="header-price">单价</span>
            <span className="header-quantity">数量</span>
            <span className="header-total">小计</span>
            <span className="header-action">操作</span>
          </div>

          {cartItems.map(item => (
            <Card key={item.id} className="cart-item">
              <div className="cart-item-content">
                <Checkbox
                  checked={item.checked}
                  onChange={(e) => handleCheckItem(item.id, e.target.checked)}
                />

                <div className="item-info" onClick={() => handleViewDetail(item.id)}>
                  <img src={item.image} alt={item.name} className="item-image" />
                  <div className="item-details">
                    <div className="item-name">{item.name}</div>
                    <div className="item-desc">{item.description}</div>
                    <Tag color="blue">{item.category}</Tag>
                  </div>
                </div>

                <div className="item-price">
                  <span className="current-price">¥{item.price}</span>
                  {item.originalPrice && (
                    <span className="original-price">¥{item.originalPrice}</span>
                  )}
                </div>

                <div className="item-quantity">
                  <InputNumber
                    min={1}
                    max={item.stock}
                    value={item.quantity}
                    onChange={(value) => handleQuantityChange(item.id, value || 1)}
                    addonBefore={<MinusOutlined />}
                    addonAfter={<PlusOutlined />}
                  />
                  <div className="stock-info">库存 {item.stock} 件</div>
                </div>

                <div className="item-total">
                  ¥{(item.price * item.quantity).toFixed(2)}
                </div>

                <div className="item-action">
                  <Popconfirm
                    title="确定要删除这件商品吗？"
                    onConfirm={() => handleRemove(item.id)}
                    okText="确定"
                    cancelText="取消"
                  >
                    <Button type="link" danger icon={<DeleteOutlined />}>
                      删除
                    </Button>
                  </Popconfirm>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="cart-summary">
          <Card className="summary-card">
            <h3>订单摘要</h3>
            <Divider />

            <div className="summary-item">
              <span>商品件数：</span>
              <span>{getSelectedCount()} 件</span>
            </div>

            <div className="summary-item">
              <span>商品总价：</span>
              <span className="price-text">¥{getTotalPrice().toFixed(2)}</span>
            </div>

            <div className="summary-item">
              <span>运费：</span>
              <span className="free-shipping">免运费</span>
            </div>

            <Divider />

            <div className="summary-total">
              <span>应付总额：</span>
              <span className="total-price">¥{getTotalPrice().toFixed(2)}</span>
            </div>

            <Button
              type="primary"
              size="large"
              block
              onClick={handleCheckout}
              className="checkout-btn"
            >
              结算 ({getSelectedCount()})
            </Button>

            <Button
              size="large"
              block
              onClick={handleContinueShopping}
              style={{ marginTop: 10 }}
            >
              继续购物
            </Button>
          </Card>

          <Card className="tips-card" style={{ marginTop: 20 }}>
            <h4>温馨提示</h4>
            <ul className="tips-list">
              <li>✓ 全场包邮，满199元免运费</li>
              <li>✓ 支持7天无理由退换货</li>
              <li>✓ 正品保证，假一赔十</li>
              <li>✓ 24小时客服在线服务</li>
            </ul>
          </Card>
        </div>
      </div>

      <div className="cart-footer">
        <div className="footer-left">
          <Checkbox
            checked={allChecked}
            onChange={(e) => handleCheckAll(e.target.checked)}
          >
            全选
          </Checkbox>
          <Popconfirm
            title="确定要删除选中的商品吗？"
            onConfirm={handleRemoveSelected}
            okText="确定"
            cancelText="取消"
            disabled={getSelectedCount() === 0}
          >
            <Button
              type="link"
              danger
              disabled={getSelectedCount() === 0}
            >
              删除选中商品
            </Button>
          </Popconfirm>
        </div>

        <div className="footer-right">
          <Space size="large">
            <span>
              已选择 <span className="selected-count">{getSelectedCount()}</span> 件商品
            </span>
            <span>
              总价：<span className="footer-total-price">¥{getTotalPrice().toFixed(2)}</span>
            </span>
            <Button
              type="primary"
              size="large"
              onClick={handleCheckout}
            >
              去结算
            </Button>
          </Space>
        </div>
      </div>
    </div>
  );
};

export default Cart;

