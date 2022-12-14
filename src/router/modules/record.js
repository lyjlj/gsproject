/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const recordRouter = {
  path: '/record',
  component: Layout,
  redirect: 'noRedirect',
  name: 'record',
  meta: {
    title: '检测记录管理',
    icon: 'chart'
  },
  children: [
    {
      path: 'reportlist',
      component: () => import('@/views/record/reportlist'),
      name: 'reportlist',
      meta: { title: '统计报表', noCache: true }
    },
    {
      path: 'testlist',
      component: () => import('@/views/record/testlist'),
      name: 'testlist',
      meta: { title: '检测记录列表', noCache: true }
    },
    {
      path: 'testlog',
      component: () => import('@/views/record/testlog'),
      name: 'testlog',
      meta: { title: '检测参数日志', noCache: true }
    },
    {
      path: 'printlog',
      component: () => import('@/views/record/printlog'),
      name: 'printlog',
      meta: { title: '打印日志', noCache: true }
    }
  ]
}

export default recordRouter
