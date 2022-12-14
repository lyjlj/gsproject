/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const receiveRouter = {
  path: '/receive',
  component: Layout,
  redirect: 'noRedirect',
  name: 'receive',
  meta: {
    title: '收发',
    icon: 'chart'
  },
  children: [
    {
      path: 'createorder',
      component: () => import('@/views/receive/createorder'),
      name: 'createorder',
      meta: { title: '新建委托单', noCache: true }
    },
    {
      path: 'orderlist',
      component: () => import('@/views/receive/orderList'),
      name: 'orderList',
      meta: { title: '委托单列表', noCache: true }
    },
    {
      path: 'deliver',
      component: () => import('@/views/receive/deliver'),
      name: 'deliver',
      meta: { title: '发货', noCache: true }
    }
  ]
}

export default receiveRouter
