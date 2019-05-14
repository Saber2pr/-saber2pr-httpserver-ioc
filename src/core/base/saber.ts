/*
 * @Author: saber2pr
 * @Date: 2019-05-14 22:32:42
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-05-14 22:36:26
 */
import { Context } from '@saber2pr/koa'

export namespace Saber {
  export abstract class Controller {
    protected readonly request: Context['request']
    protected readonly response: Context['response']
  }
}
