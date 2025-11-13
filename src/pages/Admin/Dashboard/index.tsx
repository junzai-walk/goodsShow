import { Row, Col, Card, Statistic, Table } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';
import { ProCard } from '@ant-design/pro-components';
import ReactECharts from 'echarts-for-react';
import {
  realtimeStats,
  salesTrendData,
  categorySalesData,
  topProducts,
  hourlySalesData,
} from '../../../mock/dashboard';
import './index.css';

const Dashboard = () => {
  // 超级科技感销售趋势图配置
  const salesTrendOption = {
    backgroundColor: 'transparent',
    tooltip: {
      trigger: 'axis',
      backgroundColor: 'rgba(10, 14, 39, 0.9)',
      borderColor: 'rgba(0, 242, 254, 0.5)',
      borderWidth: 1,
      textStyle: {
        color: '#fff',
        fontSize: 12,
      },
      axisPointer: {
        type: 'cross',
        lineStyle: {
          color: 'rgba(0, 242, 254, 0.5)',
          type: 'dashed',
        },
        crossStyle: {
          color: 'rgba(0, 242, 254, 0.5)',
        },
      },
    },
    legend: {
      data: ['销售额', '订单量'],
      textStyle: {
        color: '#00f2fe',
        fontSize: 13,
        fontWeight: 600,
      },
      top: 10,
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      top: '15%',
      containLabel: true,
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: salesTrendData.map(item => item.date),
      axisLine: {
        lineStyle: {
          color: 'rgba(138, 43, 226, 0.5)',
          width: 2,
        }
      },
      axisLabel: {
        color: '#00f2fe',
        fontSize: 11,
        fontWeight: 600,
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: 'rgba(138, 43, 226, 0.1)',
          type: 'dashed',
        },
      },
    },
    yAxis: [
      {
        type: 'value',
        name: '销售额',
        nameTextStyle: {
          color: '#00f2fe',
          fontSize: 12,
          fontWeight: 600,
        },
        axisLine: {
          lineStyle: {
            color: 'rgba(138, 43, 226, 0.5)',
            width: 2,
          }
        },
        axisLabel: {
          color: '#00f2fe',
          fontSize: 11,
        },
        splitLine: {
          lineStyle: {
            color: 'rgba(138, 43, 226, 0.15)',
            type: 'dashed',
          }
        },
      },
      {
        type: 'value',
        name: '订单量',
        nameTextStyle: {
          color: '#00ff88',
          fontSize: 12,
          fontWeight: 600,
        },
        axisLine: {
          lineStyle: {
            color: 'rgba(0, 255, 136, 0.5)',
            width: 2,
          }
        },
        axisLabel: {
          color: '#00ff88',
          fontSize: 11,
        },
        splitLine: { show: false },
      },
    ],
    series: [
      {
        name: '销售额',
        type: 'line',
        smooth: true,
        data: salesTrendData.map(item => item.sales),
        symbolSize: 8,
        areaStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              { offset: 0, color: 'rgba(0, 242, 254, 0.4)' },
              { offset: 0.5, color: 'rgba(0, 242, 254, 0.2)' },
              { offset: 1, color: 'rgba(0, 242, 254, 0.05)' },
            ],
          },
        },
        lineStyle: {
          color: '#00f2fe',
          width: 3,
          shadowColor: 'rgba(0, 242, 254, 0.8)',
          shadowBlur: 10,
        },
        itemStyle: {
          color: '#00f2fe',
          borderColor: '#fff',
          borderWidth: 2,
          shadowColor: 'rgba(0, 242, 254, 0.8)',
          shadowBlur: 10,
        },
      },
      {
        name: '订单量',
        type: 'line',
        smooth: true,
        yAxisIndex: 1,
        data: salesTrendData.map(item => item.orders),
        symbolSize: 8,
        lineStyle: {
          color: '#00ff88',
          width: 3,
          shadowColor: 'rgba(0, 255, 136, 0.8)',
          shadowBlur: 10,
        },
        itemStyle: {
          color: '#00ff88',
          borderColor: '#fff',
          borderWidth: 2,
          shadowColor: 'rgba(0, 255, 136, 0.8)',
          shadowBlur: 10,
        },
      },
    ],
  };

  // 超级炫酷的分类销售占比饼图
  const categorySalesOption = {
    backgroundColor: 'transparent',
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c} ({d}%)',
      backgroundColor: 'rgba(10, 14, 39, 0.9)',
      borderColor: 'rgba(138, 43, 226, 0.5)',
      borderWidth: 1,
      textStyle: {
        color: '#fff',
        fontSize: 12,
      },
    },
    legend: {
      orient: 'vertical',
      right: 20,
      top: 'center',
      textStyle: {
        color: '#00f2fe',
        fontSize: 12,
        fontWeight: 600,
      },
      itemGap: 15,
    },
    series: [
      {
        name: '销售额',
        type: 'pie',
        radius: ['45%', '75%'],
        center: ['40%', '50%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 8,
          borderColor: 'rgba(10, 14, 39, 0.8)',
          borderWidth: 3,
          shadowBlur: 20,
          shadowColor: 'rgba(0, 0, 0, 0.5)',
        },
        label: {
          show: true,
          color: '#fff',
          formatter: '{b}\n{d}%',
          fontSize: 11,
          fontWeight: 600,
          textShadowColor: 'rgba(0, 0, 0, 0.8)',
          textShadowBlur: 5,
        },
        labelLine: {
          lineStyle: {
            color: 'rgba(0, 242, 254, 0.5)',
            width: 2,
          },
          smooth: 0.2,
          length: 10,
          length2: 20,
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 14,
            fontWeight: 'bold',
          },
          itemStyle: {
            shadowBlur: 30,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 242, 254, 0.8)',
          },
        },
        data: categorySalesData.map(item => ({
          value: item.value,
          name: item.category,
        })),
      },
    ],
    color: [
      {
        type: 'linear',
        x: 0, y: 0, x2: 1, y2: 1,
        colorStops: [
          { offset: 0, color: '#00f2fe' },
          { offset: 1, color: '#4facfe' },
        ],
      },
      {
        type: 'linear',
        x: 0, y: 0, x2: 1, y2: 1,
        colorStops: [
          { offset: 0, color: '#00ff88' },
          { offset: 1, color: '#00d4aa' },
        ],
      },
      {
        type: 'linear',
        x: 0, y: 0, x2: 1, y2: 1,
        colorStops: [
          { offset: 0, color: '#ffd700' },
          { offset: 1, color: '#ffed4e' },
        ],
      },
      {
        type: 'linear',
        x: 0, y: 0, x2: 1, y2: 1,
        colorStops: [
          { offset: 0, color: '#ff0055' },
          { offset: 1, color: '#ff4d6d' },
        ],
      },
      {
        type: 'linear',
        x: 0, y: 0, x2: 1, y2: 1,
        colorStops: [
          { offset: 0, color: '#8a2be2' },
          { offset: 1, color: '#9d4edd' },
        ],
      },
      {
        type: 'linear',
        x: 0, y: 0, x2: 1, y2: 1,
        colorStops: [
          { offset: 0, color: '#ff6b35' },
          { offset: 1, color: '#f7931e' },
        ],
      },
    ],
  };

  // 超级炫酷的小时销售数据柱状图
  const hourlySalesOption = {
    backgroundColor: 'transparent',
    tooltip: {
      trigger: 'axis',
      backgroundColor: 'rgba(10, 14, 39, 0.9)',
      borderColor: 'rgba(0, 242, 254, 0.5)',
      borderWidth: 1,
      textStyle: {
        color: '#fff',
        fontSize: 12,
      },
      axisPointer: {
        type: 'shadow',
        shadowStyle: {
          color: 'rgba(0, 242, 254, 0.1)',
        },
      },
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '8%',
      top: '10%',
      containLabel: true,
    },
    xAxis: {
      type: 'category',
      data: hourlySalesData.map(item => item.hour),
      axisLine: {
        lineStyle: {
          color: 'rgba(138, 43, 226, 0.5)',
          width: 2,
        }
      },
      axisLabel: {
        color: '#00f2fe',
        rotate: 45,
        fontSize: 11,
        fontWeight: 600,
      },
      splitLine: {
        show: false,
      },
    },
    yAxis: {
      type: 'value',
      axisLine: {
        lineStyle: {
          color: 'rgba(138, 43, 226, 0.5)',
          width: 2,
        }
      },
      axisLabel: {
        color: '#00f2fe',
        fontSize: 11,
      },
      splitLine: {
        lineStyle: {
          color: 'rgba(138, 43, 226, 0.15)',
          type: 'dashed',
        }
      },
    },
    series: [
      {
        name: '销售额',
        type: 'bar',
        data: hourlySalesData.map(item => item.sales),
        barWidth: '60%',
        itemStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              { offset: 0, color: '#00f2fe' },
              { offset: 0.5, color: '#4facfe' },
              { offset: 1, color: '#8a2be2' },
            ],
          },
          borderRadius: [8, 8, 0, 0],
          shadowColor: 'rgba(0, 242, 254, 0.5)',
          shadowBlur: 10,
        },
        emphasis: {
          itemStyle: {
            shadowBlur: 20,
            shadowColor: 'rgba(0, 242, 254, 0.8)',
          },
        },
      },
    ],
  };

  // 热销商品表格列
  const columns = [
    {
      title: '排名',
      dataIndex: 'rank',
      key: 'rank',
      width: 80,
      render: (rank: number) => (
        <span className={`rank-badge rank-${rank <= 3 ? rank : 'other'}`}>
          {rank}
        </span>
      ),
    },
    {
      title: '商品名称',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '销量',
      dataIndex: 'sales',
      key: 'sales',
      render: (sales: number) => sales.toLocaleString(),
    },
    {
      title: '销售额',
      dataIndex: 'revenue',
      key: 'revenue',
      render: (revenue: number) => `¥${revenue.toLocaleString()}`,
    },
    {
      title: '趋势',
      dataIndex: 'trend',
      key: 'trend',
      render: (trend: 'up' | 'down') =>
        trend === 'up' ? (
          <span style={{ color: '#52c41a' }}>
            <ArrowUpOutlined /> 上升
          </span>
        ) : (
          <span style={{ color: '#f5222d' }}>
            <ArrowDownOutlined /> 下降
          </span>
        ),
    },
  ];

  return (
    <div className="dashboard-container">
      {/* 统计卡片 */}
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12} lg={6}>
          <ProCard className="stat-card">
            <Statistic
              title="今日销售额"
              value={realtimeStats.todaySales}
              precision={0}
              valueStyle={{ color: '#1890ff' }}
              prefix="¥"
              suffix={
                <span className="growth-rate positive">
                  <ArrowUpOutlined /> {realtimeStats.salesGrowth}%
                </span>
              }
            />
          </ProCard>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <ProCard className="stat-card">
            <Statistic
              title="今日订单"
              value={realtimeStats.todayOrders}
              valueStyle={{ color: '#52c41a' }}
              suffix={
                <span className="growth-rate positive">
                  <ArrowUpOutlined /> {realtimeStats.ordersGrowth}%
                </span>
              }
            />
          </ProCard>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <ProCard className="stat-card">
            <Statistic
              title="今日访客"
              value={realtimeStats.todayUsers}
              valueStyle={{ color: '#faad14' }}
              suffix={
                <span className="growth-rate positive">
                  <ArrowUpOutlined /> {realtimeStats.usersGrowth}%
                </span>
              }
            />
          </ProCard>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <ProCard className="stat-card">
            <Statistic
              title="总营收"
              value={realtimeStats.todayRevenue}
              precision={0}
              valueStyle={{ color: '#722ed1' }}
              prefix="¥"
              suffix={
                <span className="growth-rate positive">
                  <ArrowUpOutlined /> {realtimeStats.revenueGrowth}%
                </span>
              }
            />
          </ProCard>
        </Col>
      </Row>

      {/* 图表区域 */}
      <Row gutter={[16, 16]} style={{ marginTop: 16 }}>
        <Col xs={24} lg={16}>
          <ProCard title="销售趋势" className="chart-card">
            <ReactECharts option={salesTrendOption} style={{ height: 400 }} />
          </ProCard>
        </Col>
        <Col xs={24} lg={8}>
          <ProCard title="分类销售占比" className="chart-card">
            <ReactECharts option={categorySalesOption} style={{ height: 400 }} />
          </ProCard>
        </Col>
      </Row>

      <Row gutter={[16, 16]} style={{ marginTop: 16 }}>
        <Col xs={24} lg={12}>
          <ProCard title="今日小时销售" className="chart-card">
            <ReactECharts option={hourlySalesOption} style={{ height: 350 }} />
          </ProCard>
        </Col>
        <Col xs={24} lg={12}>
          <ProCard title="热销商品排行" className="chart-card">
            <Table
              columns={columns}
              dataSource={topProducts}
              pagination={false}
              size="small"
              rowKey="rank"
            />
          </ProCard>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
