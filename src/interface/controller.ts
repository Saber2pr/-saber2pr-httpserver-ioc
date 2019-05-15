/*
 * @Author: saber2pr
 * @Date: 2019-05-14 22:25:51
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-05-15 22:16:23
 */
export type Method = 'GET' | 'POST' | 'PUT' | 'DELETE'

export type Routes = Array<{
  method: Method
  path: string
  callback: Function
  origin: Object
}>

export interface Controller {
  baseUrl: string
  routes: Routes
}
