/*
 * @Author: saber2pr
 * @Date: 2019-05-14 21:28:24
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-05-14 22:28:39
 */
import { Reflector } from '@saber2pr/reflect'
import { KEY } from '../common/constants/metakeys'
import { Controller } from '../interface/controller'
import { resolve } from './resolve'

export function parse(Controller: { new (): any }): Controller {
  const baseUrl = Reflector.getMetadata<string>(
    KEY.Controller.BaseUrl,
    Controller
  )
  const target = new Controller()
  const methods = Object.keys(Object.getPrototypeOf(target))

  const routes = methods.reduce((receiver, key) => {
    resolve(target, key, 'GET', receiver)
    resolve(target, key, 'POST', receiver)
    return receiver
  }, [])

  return {
    baseUrl,
    routes
  }
}
