/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const distributeRouter = {
  path: '/distribute',
  component: Layout,
  redirect: 'noRedirect',
  name: 'distribute',
  meta: {
    title: '分货',
    icon: 'chart'
  },
  children: [
    {
      path: 'disc',
      component: () => import('@/views/distribute/disc'),
      name: 'disc',
      meta: { title: '分盘', noCache: true }
    },
    {
      path: 'package',
      component: () => import('@/views/distribute/package'),
      name: 'package',
      meta: { title: '分包', noCache: true }
    },

  ]
}

export default distributeRouter
