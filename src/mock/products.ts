// 商品数据
import type { Product, Category, Banner } from '../types/product';
import { extendedProducts } from './productsExtended';

// 重新导出类型，以保持向后兼容
export type { Product, Category, Banner };

export const categories: Category[] = [
  { id: 1, name: '电子产品', icon: '📱' },
  { id: 2, name: '服装鞋包', icon: '👔' },
  { id: 3, name: '食品饮料', icon: '🍔' },
  { id: 4, name: '家居生活', icon: '🏠' },
  { id: 5, name: '美妆护肤', icon: '💄' },
  { id: 6, name: '运动户外', icon: '⚽' },
];

export const products: Product[] = [
  // 电子产品 (8个)
  {
    id: 1,
    name: 'iPhone 17 Pro Max',
    price: 9999,
    originalPrice: 10999,
    image: 'https://images.unsplash.com/photo-1696446702183-cbd50c2a8991?w=400',
    images: [
      'https://images.unsplash.com/photo-1696446702183-cbd50c2a8991?w=800',
      'https://images.unsplash.com/photo-1592286927505-2fd0f2aa4e3e?w=800',
      'https://images.unsplash.com/photo-1611472173362-3f53dbd65d80?w=800'
    ],
    category: '电子产品',
    sales: 15234,
    stock: 500,
    description: '钛金属设计，A17 Pro 芯片，专业级摄像系统',
    detailDescription: '全新 iPhone 17 Pro Max 采用航空级钛金属设计，搭载 A17 Pro 芯片，性能提升 20%。配备专业级三摄系统，支持 8K 视频录制。6.7 英寸 ProMotion 显示屏，120Hz 自适应刷新率。支持卫星通信，紧急情况下也能保持联系。',
    rating: 4.9,
    colors: ['钛金色', '深空黑', '银色', '蓝色'],
    sizes: ['128GB', '256GB', '512GB', '1TB'],
    specs: {
      '屏幕尺寸': '6.7英寸',
      '处理器': 'A17 Pro',
      '内存': '8GB',
      '电池容量': '4422mAh',
      '重量': '221g'
    }
  },
  {
    id: 2,
    name: 'MacBook Pro 14英寸',
    price: 15999,
    originalPrice: 17999,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400',
    images: [
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800',
      'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=800'
    ],
    category: '电子产品',
    sales: 8932,
    stock: 300,
    description: 'M3 Pro 芯片，18GB 内存，512GB 存储',
    detailDescription: 'MacBook Pro 14 英寸搭载 M3 Pro 芯片，性能强劲。Liquid Retina XDR 显示屏，支持 ProMotion 技术。最长 18 小时电池续航，满足全天工作需求。',
    rating: 4.8,
    colors: ['深空灰', '银色'],
    sizes: ['512GB', '1TB', '2TB'],
    specs: {
      '屏幕': '14.2英寸 Liquid Retina XDR',
      '芯片': 'Apple M3 Pro',
      '内存': '18GB',
      '存储': '512GB SSD',
      '重量': '1.6kg'
    }
  },
  {
    id: 3,
    name: 'AirPods Pro 2',
    price: 1899,
    originalPrice: 2199,
    image: 'https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=400',
    category: '电子产品',
    sales: 23456,
    stock: 1000,
    description: '主动降噪，空间音频，USB-C 充电',
    rating: 4.7,
    colors: ['白色'],
    specs: {
      '降噪': '主动降噪',
      '续航': '6小时（单次）',
      '充电接口': 'USB-C',
      '防水等级': 'IPX4'
    }
  },
  {
    id: 4,
    name: '无线蓝牙耳机',
    price: 299,
    originalPrice: 499,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400',
    category: '电子产品',
    sales: 18765,
    stock: 1500,
    description: '长续航，高音质，舒适佩戴',
    rating: 4.4,
    colors: ['黑色', '白色', '蓝色'],
    specs: {
      '续航时间': '30小时',
      '蓝牙版本': '5.3',
      '充电时间': '2小时'
    }
  },
  {
    id: 5,
    name: 'iPad Air 第五代',
    price: 4599,
    originalPrice: 4999,
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400',
    category: '电子产品',
    sales: 6543,
    stock: 450,
    description: 'M1 芯片，10.9英寸视网膜显示屏',
    rating: 4.8,
    colors: ['深空灰', '星光色', '粉色', '紫色', '蓝色'],
    sizes: ['64GB', '256GB'],
    specs: {
      '屏幕': '10.9英寸',
      '芯片': 'Apple M1',
      '摄像头': '1200万像素',
      '重量': '461g'
    }
  },
  {
    id: 6,
    name: '智能手表 Ultra',
    price: 3299,
    originalPrice: 3999,
    image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=400',
    category: '电子产品',
    sales: 9876,
    stock: 600,
    description: '钛金属表壳，双频GPS，100米防水',
    rating: 4.7,
    colors: ['钛金色', '深空黑'],
    specs: {
      '表壳尺寸': '49mm',
      '防水等级': '100米',
      '续航': '36小时',
      '屏幕': 'AMOLED'
    }
  },
  {
    id: 7,
    name: '4K 运动相机',
    price: 1299,
    originalPrice: 1799,
    image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400',
    category: '电子产品',
    sales: 4321,
    stock: 350,
    description: '4K 60fps，防抖技术，10米防水',
    rating: 4.6,
    colors: ['黑色'],
    specs: {
      '视频': '4K 60fps',
      '防水': '10米',
      '防抖': '电子防抖',
      '续航': '90分钟'
    }
  },
  {
    id: 8,
    name: '便携式投影仪',
    price: 2199,
    originalPrice: 2999,
    image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?w=400',
    category: '电子产品',
    sales: 3456,
    stock: 280,
    description: '1080P 高清，自动对焦，内置音响',
    rating: 4.5,
    specs: {
      '分辨率': '1080P',
      '亮度': '500 ANSI',
      '投影尺寸': '40-120英寸',
      '续航': '2.5小时'
    }
  },

  // 服装鞋包 (8个)
  {
    id: 11,
    name: '时尚休闲外套',
    price: 399,
    originalPrice: 599,
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400',
    category: '服装鞋包',
    sales: 5678,
    stock: 800,
    description: '纯棉面料，舒适透气，多色可选',
    rating: 4.5,
    colors: ['黑色', '灰色', '卡其色', '深蓝色'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    specs: {
      '材质': '100%纯棉',
      '版型': '宽松',
      '适用季节': '春秋'
    }
  },
  {
    id: 12,
    name: '商务正装衬衫',
    price: 299,
    originalPrice: 499,
    image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400',
    category: '服装鞋包',
    sales: 8765,
    stock: 950,
    description: '免烫面料，修身剪裁，职场必备',
    rating: 4.6,
    colors: ['白色', '浅蓝色', '粉色'],
    sizes: ['S', 'M', 'L', 'XL'],
    specs: {
      '材质': '棉混纺',
      '工艺': '免烫处理',
      '领型': '标准领'
    }
  },
  {
    id: 13,
    name: '牛仔裤 修身款',
    price: 359,
    originalPrice: 599,
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=400',
    category: '服装鞋包',
    sales: 12345,
    stock: 1200,
    description: '弹力牛仔布，修身显瘦，经典百搭',
    rating: 4.7,
    colors: ['深蓝色', '浅蓝色', '黑色'],
    sizes: ['28', '29', '30', '31', '32', '33', '34'],
    specs: {
      '材质': '98%棉 2%弹力纤维',
      '版型': '修身',
      '洗涤': '可机洗'
    }
  },
  {
    id: 14,
    name: '真皮商务公文包',
    price: 899,
    originalPrice: 1299,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400',
    category: '服装鞋包',
    sales: 3456,
    stock: 450,
    description: '头层牛皮，大容量设计，商务精英之选',
    rating: 4.8,
    colors: ['棕色', '黑色'],
    specs: {
      '材质': '头层牛皮',
      '尺寸': '40x30x10cm',
      '容量': '可放15寸笔记本'
    }
  },
  {
    id: 15,
    name: '时尚双肩包',
    price: 299,
    originalPrice: 499,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400',
    category: '服装鞋包',
    sales: 9876,
    stock: 1100,
    description: '防水面料，多隔层设计，通勤必备',
    rating: 4.5,
    colors: ['黑色', '灰色', '蓝色'],
    specs: {
      '材质': '防水尼龙',
      '容量': '20L',
      '功能': 'USB充电口'
    }
  },
  {
    id: 16,
    name: '运动休闲鞋',
    price: 459,
    originalPrice: 699,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400',
    category: '服装鞋包',
    sales: 15678,
    stock: 1500,
    description: '透气网面，轻便舒适，日常百搭',
    rating: 4.6,
    colors: ['白色', '黑色', '灰色'],
    sizes: ['39', '40', '41', '42', '43', '44'],
    specs: {
      '鞋面': '飞织网面',
      '鞋底': 'EVA缓震',
      '重量': '单只约250g'
    }
  },
  {
    id: 17,
    name: '真皮皮鞋 商务款',
    price: 699,
    originalPrice: 999,
    image: 'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=400',
    category: '服装鞋包',
    sales: 6543,
    stock: 680,
    description: '头层牛皮，手工制作，商务正装',
    rating: 4.7,
    colors: ['黑色', '棕色'],
    sizes: ['39', '40', '41', '42', '43', '44'],
    specs: {
      '材质': '头层牛皮',
      '工艺': '固特异工艺',
      '鞋底': '橡胶大底'
    }
  },
  {
    id: 18,
    name: '羊毛围巾',
    price: 199,
    originalPrice: 299,
    image: 'https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=400',
    category: '服装鞋包',
    sales: 8765,
    stock: 950,
    description: '100%羊毛，柔软保暖，多色可选',
    rating: 4.8,
    colors: ['灰色', '驼色', '黑色', '红色'],
    specs: {
      '材质': '100%羊毛',
      '尺寸': '180x30cm',
      '工艺': '手工编织'
    }
  },
  ...extendedProducts,
];

export const banners: Banner[] = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1200',
    title: '新品首发',
    subtitle: 'iPhone 17 系列全新上市',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1607082349566-187342175e2f?w=1200',
    title: '限时优惠',
    subtitle: '全场满减，最高立减1000元',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200',
    title: '品质生活',
    subtitle: '精选好物，品质保证',
  },
];

