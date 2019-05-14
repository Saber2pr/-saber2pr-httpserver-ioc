/*
 * @Author: saber2pr
 * @Date: 2019-05-14 22:18:45
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-05-14 22:57:30
 */
import { Job, Context } from '@saber2pr/koa'

export interface Unit {
  url: string
  callback: (ctx: Context) => any
  method: string
}

export function mapUnitToJob(units: Unit[]): Job<Context>[] {
  return units.map<Job>(unit => async (ctx, next) => {
    const { url, method } = ctx.request
    if (url === unit.url && method === unit.method) {
      await unit.callback.apply(ctx)
    } else {
      await next()
    }
  })
}
