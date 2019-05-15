/*
 * @Author: saber2pr
 * @Date: 2019-05-14 22:18:45
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-05-15 22:18:32
 */
import { Job, Context } from '@saber2pr/koa'

export interface Unit {
  url: string
  callback: Function
  method: string
  origin: Object
}

export function mapUnitToJob(units: Unit[]): Job<Context>[] {
  return units.map<Job>(unit => async (ctx, next) => {
    const { url, method } = ctx.request
    if (url === unit.url && method === unit.method) {
      await unit.callback.apply(
        Object.assign(unit.origin, { ContextService: ctx })
      )
    } else {
      await next()
    }
  })
}
