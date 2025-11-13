// 商品类型定义
export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  images?: string[]; // 多张商品图片
  category: string;
  sales: number;
  stock: number;
  description: string;
  detailDescription?: string; // 详细描述
  rating: number;
  specs?: { [key: string]: string }; // 规格参数
  colors?: string[]; // 可选颜色
  sizes?: string[]; // 可选尺寸
}

// 分类类型定义
export interface Category {
  id: number;
  name: string;
  icon: string;
}

// 轮播图类型定义
export interface Banner {
  id: number;
  image: string;
  title: string;
  subtitle: string;
}
