// Dashboard 数据
export interface SalesData {
  date: string;
  sales: number;
  orders: number;
}

export interface CategorySales {
  category: string;
  value: number;
  percentage: number;
}

export interface RegionData {
  name: string;
  value: number;
}

export interface TopProduct {
  rank: number;
  name: string;
  sales: number;
  revenue: number;
  trend: 'up' | 'down';
}

// 销售趋势数据（最近30天）
export const salesTrendData: SalesData[] = [
  { date: '01-15', sales: 125000, orders: 856 },
  { date: '01-16', sales: 132000, orders: 923 },
  { date: '01-17', sales: 141000, orders: 1012 },
  { date: '01-18', sales: 138000, orders: 967 },
  { date: '01-19', sales: 145000, orders: 1034 },
  { date: '01-20', sales: 152000, orders: 1089 },
  { date: '01-21', sales: 148000, orders: 1056 },
  { date: '01-22', sales: 156000, orders: 1123 },
  { date: '01-23', sales: 163000, orders: 1178 },
  { date: '01-24', sales: 159000, orders: 1145 },
  { date: '01-25', sales: 167000, orders: 1201 },
  { date: '01-26', sales: 174000, orders: 1267 },
  { date: '01-27', sales: 171000, orders: 1234 },
  { date: '01-28', sales: 178000, orders: 1289 },
  { date: '01-29', sales: 185000, orders: 1345 },
  { date: '01-30', sales: 182000, orders: 1312 },
  { date: '01-31', sales: 189000, orders: 1378 },
  { date: '02-01', sales: 196000, orders: 1423 },
  { date: '02-02', sales: 193000, orders: 1389 },
  { date: '02-03', sales: 201000, orders: 1456 },
  { date: '02-04', sales: 208000, orders: 1512 },
  { date: '02-05', sales: 205000, orders: 1478 },
  { date: '02-06', sales: 213000, orders: 1534 },
  { date: '02-07', sales: 220000, orders: 1589 },
  { date: '02-08', sales: 217000, orders: 1556 },
  { date: '02-09', sales: 225000, orders: 1612 },
  { date: '02-10', sales: 232000, orders: 1667 },
  { date: '02-11', sales: 229000, orders: 1634 },
  { date: '02-12', sales: 237000, orders: 1689 },
  { date: '02-13', sales: 245000, orders: 1745 },
];

// 分类销售占比
export const categorySalesData: CategorySales[] = [
  { category: '电子产品', value: 458900, percentage: 35.2 },
  { category: '服装鞋包', value: 325600, percentage: 25.0 },
  { category: '食品饮料', value: 195400, percentage: 15.0 },
  { category: '家居生活', value: 156300, percentage: 12.0 },
  { category: '美妆护肤', value: 104200, percentage: 8.0 },
  { category: '运动户外', value: 65100, percentage: 4.8 },
];

// 地域分布数据
export const regionData: RegionData[] = [
  { name: '广东', value: 523400 },
  { name: '浙江', value: 412300 },
  { name: '江苏', value: 389200 },
  { name: '上海', value: 356700 },
  { name: '北京', value: 334500 },
  { name: '四川', value: 289100 },
  { name: '湖北', value: 245600 },
  { name: '福建', value: 223400 },
  { name: '山东', value: 198700 },
  { name: '其他', value: 332500 },
];

// 热销商品排行
export const topProducts: TopProduct[] = [
  { rank: 1, name: 'AirPods Pro 2', sales: 23456, revenue: 44536544, trend: 'up' },
  { rank: 2, name: '无线蓝牙耳机', sales: 18765, revenue: 5610735, trend: 'up' },
  { rank: 3, name: 'iPhone 17 Pro Max', sales: 15234, revenue: 152328666, trend: 'up' },
  { rank: 4, name: '运动跑鞋', sales: 12345, revenue: 7394655, trend: 'down' },
  { rank: 5, name: '高端护肤套装', sales: 11234, revenue: 10099366, trend: 'up' },
  { rank: 6, name: '有机咖啡豆', sales: 9876, revenue: 1264128, trend: 'up' },
  { rank: 7, name: 'MacBook Pro 14英寸', sales: 8932, revenue: 142869968, trend: 'down' },
  { rank: 8, name: '瑜伽垫套装', sales: 7654, revenue: 1523146, trend: 'up' },
  { rank: 9, name: '智能扫地机器人', sales: 6543, revenue: 19617657, trend: 'up' },
  { rank: 10, name: '时尚休闲外套', sales: 5678, revenue: 2265522, trend: 'down' },
];

// 实时统计数据
export const realtimeStats = {
  todaySales: 245000,
  todayOrders: 1745,
  todayUsers: 8923,
  todayRevenue: 3456789,
  salesGrowth: 15.8,
  ordersGrowth: 12.3,
  usersGrowth: 18.5,
  revenueGrowth: 16.2,
};

// 小时销售数据（今日）
export const hourlySalesData = [
  { hour: '00:00', sales: 3200 },
  { hour: '01:00', sales: 2100 },
  { hour: '02:00', sales: 1500 },
  { hour: '03:00', sales: 1200 },
  { hour: '04:00', sales: 1800 },
  { hour: '05:00', sales: 3500 },
  { hour: '06:00', sales: 5600 },
  { hour: '07:00', sales: 8900 },
  { hour: '08:00', sales: 12300 },
  { hour: '09:00', sales: 15600 },
  { hour: '10:00', sales: 18900 },
  { hour: '11:00', sales: 21200 },
  { hour: '12:00', sales: 19800 },
  { hour: '13:00', sales: 17500 },
  { hour: '14:00', sales: 16200 },
  { hour: '15:00', sales: 18700 },
  { hour: '16:00', sales: 20100 },
  { hour: '17:00', sales: 22400 },
  { hour: '18:00', sales: 24800 },
  { hour: '19:00', sales: 26500 },
  { hour: '20:00', sales: 28900 },
  { hour: '21:00', sales: 25600 },
  { hour: '22:00', sales: 19300 },
  { hour: '23:00', sales: 12800 },
];

