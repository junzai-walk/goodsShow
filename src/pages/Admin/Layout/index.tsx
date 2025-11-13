import { useState } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import ProLayout, { PageContainer } from '@ant-design/pro-layout';
import {
  DashboardOutlined,
  ShoppingOutlined,
  ShopOutlined,
  BarChartOutlined,
  SettingOutlined,
  HomeOutlined,
} from '@ant-design/icons';
import { Dropdown } from 'antd';
import './index.css';

const AdminLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [pathname, setPathname] = useState(location.pathname);

  return (
    <div className="admin-layout">
      <ProLayout
        title="电商管理后台"
        logo={<ShopOutlined style={{ fontSize: 32 }} />}
        layout="mix"
        navTheme="realDark"
        fixedHeader
        fixSiderbar
        route={{
          path: '/admin',
          routes: [
            {
              path: '/admin/dashboard',
              name: '数据看板',
              icon: <DashboardOutlined />,
            },
            {
              path: '/admin/analytics',
              name: '数据分析',
              icon: <BarChartOutlined />,
            },
            {
              path: '/admin/products',
              name: '商品管理',
              icon: <ShoppingOutlined />,
            },
            {
              path: '/admin/orders',
              name: '订单管理',
              icon: <ShopOutlined />,
            },
            {
              path: '/admin/settings',
              name: '系统设置',
              icon: <SettingOutlined />,
            },
          ],
        }}
        location={{
          pathname,
        }}
        menuItemRender={(item, dom) => (
          <div
            onClick={() => {
              if (item.path) {
                setPathname(item.path);
                navigate(item.path);
              }
            }}
          >
            {dom}
          </div>
        )}
        avatarProps={{
          src: 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
          size: 'small',
          title: '管理员',
          render: (_props, dom) => {
            return (
              <Dropdown
                menu={{
                  items: [
                    {
                      key: 'home',
                      icon: <HomeOutlined />,
                      label: '返回首页',
                      onClick: () => navigate('/'),
                    },
                    {
                      key: 'logout',
                      label: '退出登录',
                    },
                  ],
                }}
              >
                {dom}
              </Dropdown>
            );
          },
        }}
        actionsRender={() => [
          <HomeOutlined
            key="home"
            style={{ fontSize: 20, cursor: 'pointer' }}
            onClick={() => navigate('/')}
          />,
        ]}
        headerTitleRender={(logo, title) => (
          <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={() => navigate('/admin')}>
            {logo}
            {title}
          </div>
        )}
      >
        <PageContainer>
          <Outlet />
        </PageContainer>
      </ProLayout>
    </div>
  );
};

export default AdminLayout;

