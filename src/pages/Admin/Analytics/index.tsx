import { Card, Row, Col, Statistic, Table } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';
import ReactECharts from 'echarts-for-react';
import type { EChartsOption } from 'echarts';
import './index.css';

const Analytics = () => {
  // 超级科技感用户行为分析数据
  const userBehaviorOption: EChartsOption = {
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
    legend: {
      data: ['页面浏览', '商品点击', '加入购物车', '下单'],
      textStyle: {
        color: '#00f2fe',
        fontSize: 12,
        fontWeight: 600,
      },
      top: 10,
      itemGap: 20,
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
      data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
      axisLine: {
        lineStyle: {
          color: 'rgba(138, 43, 226, 0.5)',
          width: 2,
        },
      },
      axisLabel: {
        color: '#00f2fe',
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
        },
      },
      axisLabel: {
        color: '#00f2fe',
        fontSize: 11,
      },
      splitLine: {
        lineStyle: {
          color: 'rgba(138, 43, 226, 0.15)',
          type: 'dashed',
        },
      },
    },
    series: [
      {
        name: '页面浏览',
        type: 'bar',
        data: [3200, 3400, 3100, 3500, 3800, 4200, 4500],
        itemStyle: {
          color: {
            type: 'linear',
            x: 0, y: 0, x2: 0, y2: 1,
            colorStops: [
              { offset: 0, color: '#00f2fe' },
              { offset: 1, color: '#4facfe' },
            ],
          },
          borderRadius: [4, 4, 0, 0],
          shadowColor: 'rgba(0, 242, 254, 0.5)',
          shadowBlur: 10,
        },
      },
      {
        name: '商品点击',
        type: 'bar',
        data: [2100, 2300, 2000, 2400, 2600, 2900, 3100],
        itemStyle: {
          color: {
            type: 'linear',
            x: 0, y: 0, x2: 0, y2: 1,
            colorStops: [
              { offset: 0, color: '#00ff88' },
              { offset: 1, color: '#00d4aa' },
            ],
          },
          borderRadius: [4, 4, 0, 0],
          shadowColor: 'rgba(0, 255, 136, 0.5)',
          shadowBlur: 10,
        },
      },
      {
        name: '加入购物车',
        type: 'bar',
        data: [800, 900, 850, 950, 1100, 1300, 1400],
        itemStyle: {
          color: {
            type: 'linear',
            x: 0, y: 0, x2: 0, y2: 1,
            colorStops: [
              { offset: 0, color: '#ffd700' },
              { offset: 1, color: '#ffed4e' },
            ],
          },
          borderRadius: [4, 4, 0, 0],
          shadowColor: 'rgba(255, 215, 0, 0.5)',
          shadowBlur: 10,
        },
      },
      {
        name: '下单',
        type: 'bar',
        data: [320, 350, 310, 380, 420, 480, 520],
        itemStyle: {
          color: {
            type: 'linear',
            x: 0, y: 0, x2: 0, y2: 1,
            colorStops: [
              { offset: 0, color: '#ff0055' },
              { offset: 1, color: '#ff4d6d' },
            ],
          },
          borderRadius: [4, 4, 0, 0],
          shadowColor: 'rgba(255, 0, 85, 0.5)',
          shadowBlur: 10,
        },
      },
    ],
  };

  // 超级炫酷转化漏斗
  const funnelOption: EChartsOption = {
    backgroundColor: 'transparent',
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c}人 ({d}%)',
      backgroundColor: 'rgba(10, 14, 39, 0.9)',
      borderColor: 'rgba(138, 43, 226, 0.5)',
      borderWidth: 1,
      textStyle: {
        color: '#fff',
        fontSize: 12,
      },
    },
    series: [
      {
        name: '用户转化',
        type: 'funnel',
        left: '10%',
        width: '80%',
        minSize: '20%',
        maxSize: '100%',
        sort: 'descending',
        gap: 2,
        label: {
          show: true,
          position: 'inside',
          formatter: '{b}\n{c}人',
          color: '#fff',
          fontSize: 13,
          fontWeight: 600,
          textShadowColor: 'rgba(0, 0, 0, 0.8)',
          textShadowBlur: 5,
        },
        labelLine: {
          show: false,
        },
        itemStyle: {
          borderColor: 'rgba(10, 14, 39, 0.8)',
          borderWidth: 3,
          shadowBlur: 20,
          shadowColor: 'rgba(0, 0, 0, 0.5)',
        },
        emphasis: {
          label: {
            fontSize: 16,
          },
          itemStyle: {
            shadowBlur: 30,
            shadowColor: 'rgba(0, 242, 254, 0.8)',
          },
        },
        data: [
          {
            value: 4500,
            name: '访问',
            itemStyle: {
              color: {
                type: 'linear',
                x: 0, y: 0, x2: 1, y2: 0,
                colorStops: [
                  { offset: 0, color: '#00f2fe' },
                  { offset: 1, color: '#4facfe' },
                ],
              },
            },
          },
          {
            value: 3100,
            name: '浏览商品',
            itemStyle: {
              color: {
                type: 'linear',
                x: 0, y: 0, x2: 1, y2: 0,
                colorStops: [
                  { offset: 0, color: '#00ff88' },
                  { offset: 1, color: '#00d4aa' },
                ],
              },
            },
          },
          {
            value: 1400,
            name: '加入购物车',
            itemStyle: {
              color: {
                type: 'linear',
                x: 0, y: 0, x2: 1, y2: 0,
                colorStops: [
                  { offset: 0, color: '#ffd700' },
                  { offset: 1, color: '#ffed4e' },
                ],
              },
            },
          },
          {
            value: 800,
            name: '提交订单',
            itemStyle: {
              color: {
                type: 'linear',
                x: 0, y: 0, x2: 1, y2: 0,
                colorStops: [
                  { offset: 0, color: '#ff6b35' },
                  { offset: 1, color: '#f7931e' },
                ],
              },
            },
          },
          {
            value: 520,
            name: '支付成功',
            itemStyle: {
              color: {
                type: 'linear',
                x: 0, y: 0, x2: 1, y2: 0,
                colorStops: [
                  { offset: 0, color: '#ff0055' },
                  { offset: 1, color: '#ff4d6d' },
                ],
              },
            },
          },
        ],
      },
    ],
  };

  // 超级炫酷流量来源
  const trafficSourceOption: EChartsOption = {
    backgroundColor: 'transparent',
    tooltip: {
      trigger: 'item',
      backgroundColor: 'rgba(10, 14, 39, 0.9)',
      borderColor: 'rgba(0, 242, 254, 0.5)',
      borderWidth: 1,
      textStyle: {
        color: '#fff',
        fontSize: 12,
      },
    },
    legend: {
      orient: 'vertical',
      left: 20,
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
        name: '流量来源',
        type: 'pie',
        radius: ['45%', '75%'],
        center: ['60%', '50%'],
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
          formatter: '{b}\n{d}%',
          color: '#fff',
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
            shadowColor: 'rgba(0, 242, 254, 0.8)',
          },
        },
        data: [
          {
            value: 3500,
            name: '直接访问',
            itemStyle: {
              color: {
                type: 'linear',
                x: 0, y: 0, x2: 1, y2: 1,
                colorStops: [
                  { offset: 0, color: '#00f2fe' },
                  { offset: 1, color: '#4facfe' },
                ],
              },
            }
          },
          {
            value: 2800,
            name: '搜索引擎',
            itemStyle: {
              color: {
                type: 'linear',
                x: 0, y: 0, x2: 1, y2: 1,
                colorStops: [
                  { offset: 0, color: '#00ff88' },
                  { offset: 1, color: '#00d4aa' },
                ],
              },
            }
          },
          {
            value: 1800,
            name: '社交媒体',
            itemStyle: {
              color: {
                type: 'linear',
                x: 0, y: 0, x2: 1, y2: 1,
                colorStops: [
                  { offset: 0, color: '#ffd700' },
                  { offset: 1, color: '#ffed4e' },
                ],
              },
            }
          },
          {
            value: 1200,
            name: '广告投放',
            itemStyle: {
              color: {
                type: 'linear',
                x: 0, y: 0, x2: 1, y2: 1,
                colorStops: [
                  { offset: 0, color: '#ff0055' },
                  { offset: 1, color: '#ff4d6d' },
                ],
              },
            }
          },
          {
            value: 800,
            name: '其他',
            itemStyle: {
              color: {
                type: 'linear',
                x: 0, y: 0, x2: 1, y2: 1,
                colorStops: [
                  { offset: 0, color: '#8a2be2' },
                  { offset: 1, color: '#9d4edd' },
                ],
              },
            }
          },
        ],
      },
    ],
  };

  // 热门页面数据
  const hotPagesData = [
    { key: '1', page: '首页', pv: 12500, uv: 8900, avgTime: '2:35', bounceRate: '35%' },
    { key: '2', page: '商品列表', pv: 9800, uv: 6700, avgTime: '3:20', bounceRate: '28%' },
    { key: '3', page: '商品详情', pv: 8500, uv: 5200, avgTime: '4:15', bounceRate: '22%' },
    { key: '4', page: '购物车', pv: 3200, uv: 2800, avgTime: '1:45', bounceRate: '45%' },
    { key: '5', page: '订单确认', pv: 1800, uv: 1600, avgTime: '2:10', bounceRate: '18%' },
  ];

  const columns = [
    { title: '页面', dataIndex: 'page', key: 'page' },
    { title: '浏览量(PV)', dataIndex: 'pv', key: 'pv', sorter: (a: any, b: any) => a.pv - b.pv },
    { title: '访客数(UV)', dataIndex: 'uv', key: 'uv', sorter: (a: any, b: any) => a.uv - b.uv },
    { title: '平均停留时间', dataIndex: 'avgTime', key: 'avgTime' },
    { title: '跳出率', dataIndex: 'bounceRate', key: 'bounceRate' },
  ];

  return (
    <div className="analytics-container">
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12} md={6}>
          <Card className="stat-card">
            <Statistic title="转化率" value={11.6} precision={1} suffix="%" valueStyle={{ color: '#52c41a' }} prefix={<ArrowUpOutlined />} />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card className="stat-card">
            <Statistic title="平均客单价" value={328} precision={0} prefix="¥" valueStyle={{ color: '#1890ff' }} />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card className="stat-card">
            <Statistic title="复购率" value={28.5} precision={1} suffix="%" valueStyle={{ color: '#faad14' }} prefix={<ArrowUpOutlined />} />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card className="stat-card">
            <Statistic title="跳出率" value={32.8} precision={1} suffix="%" valueStyle={{ color: '#f5222d' }} prefix={<ArrowDownOutlined />} />
          </Card>
        </Col>
      </Row>

      <Row gutter={[16, 16]} style={{ marginTop: 16 }}>
        <Col xs={24} lg={12}>
          <Card title="用户行为分析" className="chart-card">
            <ReactECharts option={userBehaviorOption} style={{ height: 350 }} />
          </Card>
        </Col>
        <Col xs={24} lg={12}>
          <Card title="转化漏斗" className="chart-card">
            <ReactECharts option={funnelOption} style={{ height: 350 }} />
          </Card>
        </Col>
      </Row>

      <Row gutter={[16, 16]} style={{ marginTop: 16 }}>
        <Col xs={24} lg={12}>
          <Card title="流量来源分析" className="chart-card">
            <ReactECharts option={trafficSourceOption} style={{ height: 350 }} />
          </Card>
        </Col>
        <Col xs={24} lg={12}>
          <Card title="热门页面" className="chart-card">
            <Table columns={columns} dataSource={hotPagesData} pagination={false} size="small" />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Analytics;

