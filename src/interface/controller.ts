/*
 * @Author: saber2pr
 * @Date: 2019-05-14 22:25:51
 * @Last Modified by:   saber2pr
 * @Last Modified time: 2019-05-14 22:25:51
 */
import { Context } from '@saber2pr/koa'

export type Method = 'GET' | 'POST'

export type Routes = Array<{
  method: Method
  path: string
  callback: (ctx: Context) => void
}>

export interface Controller {
  baseUrl: string
  routes: Routes
}
