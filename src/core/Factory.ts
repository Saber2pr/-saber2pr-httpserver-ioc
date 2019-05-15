/*
 * @Author: saber2pr
 * @Date: 2019-05-14 22:50:12
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-05-15 22:05:55
 */
import { Unit, mapUnitToJob } from './http/koa'
import { parse } from './parser/parse'
import { KoaBody, Koa, compose } from '@saber2pr/koa'
import { transform } from './parser/transform'
import { Constructor } from '../interface/constructor'

export class Factory {
  public constructor(private modules: Array<Constructor>) {
    this.units = [].concat(...this.modules.map(mod => transform(parse(mod))))
  }
  public instance: KoaBody
  private units: Unit[]
  public create() {
    this.instance = Koa().use(compose(...mapUnitToJob(this.units)))
    return this.instance
  }
}
