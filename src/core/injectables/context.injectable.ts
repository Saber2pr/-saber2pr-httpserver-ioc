/*
 * @Author: saber2pr
 * @Date: 2019-05-15 21:21:56
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-05-15 21:24:15
 */
import { Context } from '@saber2pr/koa'
import { Injectable } from '@saber2pr/ioc';

@Injectable()
export class ContextService {
  public request: Context['request']
  public response: Context['response']
}
