/*
 * 角色管理模块
 */

import axios from '../axios'

// 保存
export const save = (data) => {
  return axios({
    url: '/role/save',
    method: 'post',
    data
  })
}
// 删除
export const batchDelete = (data) => {
  return axios({
    url: '/role/delete',
    method: 'post',
    data
  })
}
// 分页查询
export const findPage = (data) => {
  return axios({
    url: '/role/findPage',
    method: 'post',
    data
  })
}
// 查询全部
export const findAll = () => {
  return axios({
    url: '/role/findAll',
    method: 'get'
  })
}
