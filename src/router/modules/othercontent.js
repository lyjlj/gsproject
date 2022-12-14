/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const othercontentRouter = {
  path: '/othercontent',
  component: Layout,
  redirect: 'noRedirect',
  name: 'othercontent',
  meta: {
    title: '其他',
    icon: 'chart'
  },
  children: [
    {
      path: 'download',
      component: () => import('@/views/othercontent/download'),
      name: 'download',
      meta: { title: '下载中心', noCache: true }
    },
    

  ]
}

export default othercontentRouter
