/*
 * @Author: saber2pr
 * @Date: 2019-05-14 21:28:24
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-05-15 22:03:24
 */
import { Reflector } from '@saber2pr/reflect'
import { KEY } from '../../common/constants/metakeys'
import { Controller } from '../../interface/controller'
import { resolve } from './resolve'
import { Injector } from '@saber2pr/ioc'

export function parse(Controller: { new (): any }): Controller {
  const baseUrl = Reflector.getMetadata<string>(
    KEY.Controller.BaseUrl,
    Controller
  )

  const target = Injector(Controller)
  const methods = Object.keys(Object.getPrototypeOf(target))

  const routes = methods.reduce((receiver, key) => {
    resolve(target, key, 'GET', receiver)
    resolve(target, key, 'POST', receiver)
    resolve(target, key, 'DELETE', receiver)
    resolve(target, key, 'PUT', receiver)
    return receiver
  }, [])

  return {
    baseUrl,
    routes
  }
}
