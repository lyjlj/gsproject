/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const setsystemRouter = {
  path: '/setsystem',
  component: Layout,
  redirect: 'noRedirect',
  name: 'setsystem',
  meta: {
    title: '系统设置',
    icon: 'chart'
  },
  children: [
    {
      path: 'authorizelist',
      component: () => import('@/views/setsystem/authorizelist'),
      name: 'authorizelist',
      meta: { title: '用户机构授权列表', noCache: true }
    },
    {
      path: 'setsite',
      component: () => import('@/views/setsystem/setsite'),
      name: 'setsite',
      meta: { title: '站点设置', noCache: true }
    },
    {
      path: 'userlist',
      component: () => import('@/views/setsystem/userlist'),
      name: 'userlist',
      meta: { title: '用户列表', noCache: true }
    }

  ]
}

export default setsystemRouter
