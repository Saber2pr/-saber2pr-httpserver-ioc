/*
 * @Author: saber2pr
 * @Date: 2019-05-14 22:26:30
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-05-15 22:15:53
 */
import { Controller } from '../../interface/controller'
import { Unit } from '../http/koa'

export function transform(controller: Controller): Unit[] {
  return controller.routes.map<Unit>(({ path, callback, method, origin }) => ({
    url: controller.baseUrl + path,
    callback,
    method,
    origin
  }))
}
