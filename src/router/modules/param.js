/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const setparamsRouter = {
  path: '/setparams',
  component: Layout,
  redirect: 'noRedirect',
  name: 'setparams',
  meta: {
    title: '检测参数相关设置',
    icon: 'chart'
  },
  children: [
    {
      path: 'paramdefine',
      component: () => import('@/views/setparams/paramdefine'),
      name: 'paramdefine',
      meta: { title: '检测参数定义', noCache: true }
    },
    {
      path: 'paramtype',
      component: () => import('@/views/setparams/paramtype'),
      name: 'paramtype',
      meta: { title: '检测类型', noCache: true }
    },

  ]
}

export default setparamsRouter
