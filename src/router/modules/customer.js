/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const customerRouter = {
  path: '/customer',
  component: Layout,
  redirect: 'noRedirect',
  name: 'customer',
  meta: {
    title: '客户管理',
    icon: 'chart'
  },
  children: [
    {
      path: 'manage',
      component: () => import('@/views/customer/manage'),
      name: 'manage',
      meta: { title: '客户管理', noCache: true }
    },
    {
      path: 'contact',
      component: () => import('@/views/customer/contact'),
      name: 'contact',
      meta: { title: '联系人管理', noCache: true }
    },
    {
      path: 'module',
      component: () => import('@/views/customer/module'),
      name: 'module',
      meta: { title: '模号管理', noCache: true }
    },
    {
      path: 'preference',
      component: () => import('@/views/customer/preference'),
      name: 'preference',
      meta: { title: '客户偏好', noCache: true }
    }
  ]
}

export default customerRouter
