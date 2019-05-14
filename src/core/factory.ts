/*
 * @Author: saber2pr
 * @Date: 2019-05-14 22:50:12
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-05-14 22:57:24
 */
import { Unit, mapUnitToJob } from './http/koa'
import { transform } from './transform'
import { parse } from './parse'
import { KoaBody, Koa, compose } from '@saber2pr/koa'

export class Factory {
  public constructor(private modules: Array<{ new (): any }>) {
    this.units = [].concat(...this.modules.map(mod => transform(parse(mod))))
  }
  public instance: KoaBody
  private units: Unit[]
  public create() {
    this.instance = Koa().use(compose(...mapUnitToJob(this.units)))
    return this.instance
  }
}
