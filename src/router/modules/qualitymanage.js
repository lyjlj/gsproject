/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const qualitymanageRouter = {
  path: '/qualitymanage',
  component: Layout,
  redirect: 'noRedirect',
  name: 'qualitymanage',
  meta: {
    title: '质量管理体系',
    icon: 'chart'
  },
  children: [
    {
      path: 'prepareset',
      component: () => import('@/views/qualitymanage/prepareset'),
      name: 'prepareset',
      meta: { title: '设备管理', noCache: true }
    },
    {
      path: 'resource',
      component: () => import('@/views/qualitymanage/resource'),
      name: 'resource',
      meta: { title: '人力资源', noCache: true }
    },
    {
      path: 'filemanage',
      component: () => import('@/views/qualitymanage/filemanage'),
      name: 'filemanage',
      meta: { title: '文件管理', noCache: true }
    },
    {
      path: 'quality',
      component: () => import('@/views/qualitymanage/quality'),
      name: 'quality',
      meta: { title: '质量管理', noCache: true }
    }

  ]
}

export default qualitymanageRouter
