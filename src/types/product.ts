// 商品类型定义
export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  sales: number;
  stock: number;
  description: string;
  rating: number;
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
