import { createBrowserRouter } from 'react-router-dom';
import Shop1 from '../pages/Shop1';
import Shop2 from '../pages/Shop2';
import Shop3 from '../pages/Shop3';
import AdminLayout from '../pages/Admin/Layout';
import Dashboard from '../pages/Admin/Dashboard';
import ProductManage from '../pages/Admin/ProductManage';
import OrderManage from '../pages/Admin/OrderManage';
import Analytics from '../pages/Admin/Analytics';
import Settings from '../pages/Admin/Settings';
import Home from '../pages/Home';
import Login from '../pages/Login';
import ProductDetail from '../pages/ProductDetail';
import Cart from '../pages/Cart';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/cart',
    element: <Cart />,
  },
  {
    path: '/product/:id',
    element: <ProductDetail />,
  },
  {
    path: '/shop1',
    element: <Shop1 />,
  },
  {
    path: '/shop2',
    element: <Shop2 />,
  },
  {
    path: '/shop3',
    element: <Shop3 />,
  },
  {
    path: '/admin',
    element: <AdminLayout />,
    children: [
      {
        path: '',
        element: <Dashboard />,
      },
      {
        path: 'dashboard',
        element: <Dashboard />,
      },
      {
        path: 'products',
        element: <ProductManage />,
      },
      {
        path: 'orders',
        element: <OrderManage />,
      },
      {
        path: 'analytics',
        element: <Analytics />,
      },
      {
        path: 'settings',
        element: <Settings />,
      },
    ],
  },
]);

