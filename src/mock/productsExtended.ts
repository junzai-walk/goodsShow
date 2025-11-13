// 扩展商品数据 - 食品饮料、家居生活、美妆护肤、运动户外
import type { Product } from '../types/product';

export const extendedProducts: Product[] = [
  // 食品饮料 (8个)
  {
    id: 21,
    name: '有机咖啡豆',
    price: 128,
    originalPrice: 168,
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400',
    category: '食品饮料',
    sales: 9876,
    stock: 2000,
    description: '精选阿拉比卡豆，中度烘焙，香醇浓郁',
    rating: 4.8,
    specs: {
      '产地': '哥伦比亚',
      '烘焙度': '中度',
      '规格': '500g',
      '保质期': '12个月'
    }
  },
  {
    id: 22,
    name: '进口红酒 干红',
    price: 299,
    originalPrice: 499,
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=400',
    category: '食品饮料',
    sales: 5432,
    stock: 800,
    description: '法国波尔多产区，醇厚口感',
    rating: 4.7,
    specs: {
      '产地': '法国波尔多',
      '年份': '2020',
      '酒精度': '13.5%',
      '容量': '750ml'
    }
  },
  {
    id: 23,
    name: '有机绿茶',
    price: 168,
    originalPrice: 238,
    image: 'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=400',
    category: '食品饮料',
    sales: 7654,
    stock: 1500,
    description: '明前龙井，清香回甘，有机认证',
    rating: 4.9,
    specs: {
      '产地': '浙江杭州',
      '等级': '特级',
      '规格': '250g',
      '采摘时间': '明前'
    }
  },
  {
    id: 24,
    name: '进口巧克力礼盒',
    price: 199,
    originalPrice: 299,
    image: 'https://images.unsplash.com/photo-1511381939415-e44015466834?w=400',
    category: '食品饮料',
    sales: 12345,
    stock: 950,
    description: '比利时进口，多种口味，送礼佳品',
    rating: 4.8,
    specs: {
      '产地': '比利时',
      '规格': '500g',
      '口味': '12种混合',
      '保质期': '12个月'
    }
  },
  {
    id: 25,
    name: '坚果大礼包',
    price: 158,
    originalPrice: 228,
    image: 'https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=400',
    category: '食品饮料',
    sales: 18765,
    stock: 2200,
    description: '每日坚果，营养健康，独立小包装',
    rating: 4.7,
    specs: {
      '规格': '750g (30小包)',
      '种类': '核桃、腰果、杏仁等',
      '保质期': '6个月'
    }
  },
  {
    id: 26,
    name: '蜂蜜礼盒',
    price: 188,
    originalPrice: 268,
    image: 'https://images.unsplash.com/photo-1587049352846-4a222e784acc?w=400',
    category: '食品饮料',
    sales: 6543,
    stock: 1100,
    description: '天然蜂蜜，无添加，营养丰富',
    rating: 4.8,
    specs: {
      '产地': '新西兰',
      '规格': '500g x 2瓶',
      '类型': '麦卢卡蜂蜜',
      '保质期': '24个月'
    }
  },
  {
    id: 27,
    name: '橄榄油 特级初榨',
    price: 128,
    originalPrice: 188,
    image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400',
    category: '食品饮料',
    sales: 8765,
    stock: 1300,
    description: '西班牙进口，冷榨工艺，健康之选',
    rating: 4.7,
    specs: {
      '产地': '西班牙',
      '等级': '特级初榨',
      '容量': '750ml',
      '酸度': '≤0.8%'
    }
  },
  {
    id: 28,
    name: '燕麦片 即食',
    price: 68,
    originalPrice: 98,
    image: 'https://images.unsplash.com/photo-1517673132405-a56a62b18caf?w=400',
    category: '食品饮料',
    sales: 23456,
    stock: 3000,
    description: '澳洲进口，高纤维，营养早餐',
    rating: 4.6,
    specs: {
      '产地': '澳大利亚',
      '规格': '1kg',
      '类型': '即食燕麦',
      '保质期': '12个月'
    }
  },

  // 家居生活 (8个)
  {
    id: 31,
    name: '智能扫地机器人',
    price: 2999,
    originalPrice: 3999,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400',
    category: '家居生活',
    sales: 6543,
    stock: 400,
    description: 'AI 导航，自动集尘，扫拖一体',
    rating: 4.7,
    specs: {
      '吸力': '4000Pa',
      '续航': '180分钟',
      '水箱': '300ml',
      '功能': '扫拖一体'
    }
  },
  {
    id: 32,
    name: '空气净化器',
    price: 1899,
    originalPrice: 2599,
    image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400',
    category: '家居生活',
    sales: 8765,
    stock: 550,
    description: 'HEPA滤网，除甲醛，静音运行',
    rating: 4.8,
    specs: {
      'CADR值': '600m³/h',
      '适用面积': '60-80㎡',
      '噪音': '≤35dB',
      '滤网': 'H13级HEPA'
    }
  },
  {
    id: 33,
    name: '乳胶床垫',
    price: 3999,
    originalPrice: 5999,
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=400',
    category: '家居生活',
    sales: 4321,
    stock: 280,
    description: '天然乳胶，透气舒适，护脊设计',
    rating: 4.9,
    sizes: ['1.5m', '1.8m', '2.0m'],
    specs: {
      '材质': '天然乳胶',
      '厚度': '20cm',
      '硬度': '中等偏软',
      '保修': '10年'
    }
  },
  {
    id: 34,
    name: '智能电饭煲',
    price: 899,
    originalPrice: 1299,
    image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=400',
    category: '家居生活',
    sales: 12345,
    stock: 750,
    description: 'IH加热，24小时预约，多种烹饪模式',
    rating: 4.7,
    specs: {
      '容量': '5L',
      '加热方式': 'IH电磁加热',
      '内胆': '不粘涂层',
      '功能': '24小时预约'
    }
  },
  {
    id: 35,
    name: '北欧风台灯',
    price: 299,
    originalPrice: 499,
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400',
    category: '家居生活',
    sales: 9876,
    stock: 1200,
    description: '护眼LED，无频闪，三档调光',
    rating: 4.6,
    colors: ['白色', '黑色', '木色'],
    specs: {
      '光源': 'LED',
      '色温': '3000-5000K',
      '功率': '12W',
      '调光': '三档'
    }
  },
  {
    id: 36,
    name: '真空保温杯',
    price: 199,
    originalPrice: 299,
    image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400',
    category: '家居生活',
    sales: 15678,
    stock: 1800,
    description: '316不锈钢，24小时保温，大容量',
    rating: 4.7,
    colors: ['银色', '黑色', '粉色', '蓝色'],
    specs: {
      '材质': '316不锈钢',
      '容量': '500ml',
      '保温': '24小时',
      '保冷': '12小时'
    }
  },
  {
    id: 37,
    name: '多功能收纳柜',
    price: 599,
    originalPrice: 899,
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=400',
    category: '家居生活',
    sales: 5432,
    stock: 450,
    description: '实木框架，大容量，简约设计',
    rating: 4.5,
    colors: ['原木色', '白色', '胡桃色'],
    specs: {
      '材质': '实木+板材',
      '尺寸': '80x40x120cm',
      '层数': '5层',
      '承重': '每层20kg'
    }
  },
  {
    id: 38,
    name: '香薰加湿器',
    price: 259,
    originalPrice: 399,
    image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=400',
    category: '家居生活',
    sales: 11234,
    stock: 980,
    description: '超声波雾化，静音运行，氛围灯',
    rating: 4.6,
    colors: ['白色', '粉色'],
    specs: {
      '容量': '300ml',
      '雾化量': '30ml/h',
      '噪音': '≤30dB',
      '定时': '1-8小时'
    }
  },

  // 美妆护肤 (8个)
  {
    id: 41,
    name: '高端护肤套装',
    price: 899,
    originalPrice: 1299,
    image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400',
    category: '美妆护肤',
    sales: 11234,
    stock: 500,
    description: '深层补水，抗衰老，天然成分',
    rating: 4.9,
    specs: {
      '套装内容': '洁面+水+乳+精华+面霜',
      '适用肤质': '所有肤质',
      '功效': '补水保湿抗衰老',
      '产地': '法国'
    }
  },
  {
    id: 42,
    name: '玻尿酸精华液',
    price: 399,
    originalPrice: 599,
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400',
    category: '美妆护肤',
    sales: 18765,
    stock: 850,
    description: '高浓度玻尿酸，深层补水，淡化细纹',
    rating: 4.8,
    specs: {
      '容量': '30ml',
      '成分': '玻尿酸、烟酰胺',
      '功效': '补水保湿',
      '使用方法': '早晚使用'
    }
  },
  {
    id: 43,
    name: '防晒霜 SPF50+',
    price: 199,
    originalPrice: 299,
    image: 'https://images.unsplash.com/photo-1571875257727-256c39da42af?w=400',
    category: '美妆护肤',
    sales: 23456,
    stock: 1500,
    description: '物理防晒，清爽不油腻，防水防汗',
    rating: 4.7,
    specs: {
      'SPF值': 'SPF50+ PA++++',
      '容量': '50ml',
      '类型': '物理防晒',
      '防水': '80分钟'
    }
  },
  {
    id: 44,
    name: '口红套装',
    price: 299,
    originalPrice: 499,
    image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400',
    category: '美妆护肤',
    sales: 15678,
    stock: 920,
    description: '丝绒质地，持久不脱色，多色可选',
    rating: 4.8,
    colors: ['正红色', '豆沙色', '玫瑰色', '橘色', '裸色'],
    specs: {
      '质地': '丝绒哑光',
      '持久度': '8小时',
      '套装': '5支装',
      '成分': '植物精华'
    }
  },
  {
    id: 45,
    name: '面膜礼盒',
    price: 259,
    originalPrice: 399,
    image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=400',
    category: '美妆护肤',
    sales: 19876,
    stock: 1200,
    description: '多效合一，补水美白，舒缓修护',
    rating: 4.7,
    specs: {
      '数量': '30片',
      '功效': '补水、美白、修护',
      '材质': '蚕丝面膜',
      '保质期': '3年'
    }
  },
  {
    id: 46,
    name: '眼霜 抗皱紧致',
    price: 459,
    originalPrice: 699,
    image: 'https://images.unsplash.com/photo-1617897903246-719242758050?w=400',
    category: '美妆护肤',
    sales: 8765,
    stock: 650,
    description: '淡化细纹，紧致提拉，去黑眼圈',
    rating: 4.8,
    specs: {
      '容量': '20ml',
      '功效': '抗皱、紧致、去黑眼圈',
      '成分': '视黄醇、胜肽',
      '适用': '25岁以上'
    }
  },
  {
    id: 47,
    name: '洗面奶 氨基酸',
    price: 89,
    originalPrice: 139,
    image: 'https://images.unsplash.com/photo-1556229010-aa9e5d93b2e0?w=400',
    category: '美妆护肤',
    sales: 34567,
    stock: 2500,
    description: '温和清洁，不紧绷，敏感肌可用',
    rating: 4.6,
    specs: {
      '容量': '150ml',
      '成分': '氨基酸表活',
      'pH值': '弱酸性',
      '适用': '所有肤质'
    }
  },
  {
    id: 48,
    name: '香水 淡香水',
    price: 599,
    originalPrice: 899,
    image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=400',
    category: '美妆护肤',
    sales: 6543,
    stock: 480,
    description: '清新花香，持久留香，优雅气质',
    rating: 4.9,
    specs: {
      '容量': '50ml',
      '香调': '花香调',
      '留香': '6-8小时',
      '产地': '法国'
    }
  },

  // 运动户外 (8个)
  {
    id: 51,
    name: '运动跑鞋',
    price: 599,
    originalPrice: 899,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400',
    category: '运动户外',
    sales: 12345,
    stock: 600,
    description: '轻便透气，缓震科技，专业运动鞋',
    rating: 4.6,
    colors: ['黑色', '白色', '蓝色', '红色'],
    sizes: ['39', '40', '41', '42', '43', '44', '45'],
    specs: {
      '鞋面': '飞织网面',
      '中底': 'Boost缓震',
      '鞋底': '橡胶耐磨',
      '重量': '单只约280g'
    }
  },
  {
    id: 52,
    name: '瑜伽垫套装',
    price: 199,
    originalPrice: 299,
    image: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=400',
    category: '运动户外',
    sales: 7654,
    stock: 900,
    description: '环保材质，防滑耐用，附赠收纳袋',
    rating: 4.6,
    colors: ['紫色', '粉色', '蓝色', '绿色'],
    specs: {
      '材质': 'TPE环保材质',
      '尺寸': '183x61cm',
      '厚度': '6mm',
      '附件': '收纳袋+绑带'
    }
  },
  {
    id: 53,
    name: '哑铃套装',
    price: 399,
    originalPrice: 599,
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400',
    category: '运动户外',
    sales: 5432,
    stock: 550,
    description: '可调节重量，环保橡胶，家用健身',
    rating: 4.7,
    specs: {
      '重量': '5-30kg可调',
      '材质': '铸铁+橡胶',
      '套装': '一对',
      '调节': '快速调节'
    }
  },
  {
    id: 54,
    name: '户外登山包',
    price: 459,
    originalPrice: 699,
    image: 'https://images.unsplash.com/photo-1622260614153-03223fb72052?w=400',
    category: '运动户外',
    sales: 4321,
    stock: 420,
    description: '大容量，防水透气，人体工学设计',
    rating: 4.8,
    colors: ['黑色', '军绿色', '橙色'],
    specs: {
      '容量': '50L',
      '材质': '防水尼龙',
      '背负': '人体工学',
      '重量': '1.2kg'
    }
  },
  {
    id: 55,
    name: '速干运动T恤',
    price: 159,
    originalPrice: 259,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400',
    category: '运动户外',
    sales: 18765,
    stock: 1500,
    description: '速干透气，吸汗排湿，运动必备',
    rating: 4.5,
    colors: ['黑色', '白色', '灰色', '蓝色', '红色'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    specs: {
      '材质': '聚酯纤维',
      '功能': '速干吸汗',
      '版型': '修身',
      '适用': '跑步、健身'
    }
  },
  {
    id: 56,
    name: '智能运动手环',
    price: 299,
    originalPrice: 499,
    image: 'https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=400',
    category: '运动户外',
    sales: 23456,
    stock: 1800,
    description: '心率监测，睡眠分析，50米防水',
    rating: 4.7,
    colors: ['黑色', '蓝色', '粉色'],
    specs: {
      '屏幕': '1.1英寸AMOLED',
      '续航': '14天',
      '防水': '5ATM',
      '功能': '心率、睡眠、运动'
    }
  },
  {
    id: 57,
    name: '羽毛球拍套装',
    price: 359,
    originalPrice: 599,
    image: 'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=400',
    category: '运动户外',
    sales: 6543,
    stock: 680,
    description: '碳纤维材质，轻量化设计，专业级',
    rating: 4.6,
    specs: {
      '材质': '碳纤维',
      '重量': '85g',
      '套装': '2支拍+3个球+拍包',
      '适用': '初中级'
    }
  },
  {
    id: 58,
    name: '游泳装备套装',
    price: 259,
    originalPrice: 399,
    image: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?w=400',
    category: '运动户外',
    sales: 8765,
    stock: 750,
    description: '泳镜+泳帽+耳塞，防雾防水，舒适佩戴',
    rating: 4.5,
    colors: ['黑色', '蓝色', '粉色'],
    specs: {
      '套装': '泳镜+泳帽+耳塞+鼻夹',
      '泳镜': '防雾镀膜',
      '泳帽': '硅胶材质',
      '适用': '成人'
    }
  },
];

