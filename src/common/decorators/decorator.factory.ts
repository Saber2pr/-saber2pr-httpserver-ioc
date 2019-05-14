/*
 * @Author: saber2pr
 * @Date: 2019-05-14 21:28:14
 * @Last Modified by:   saber2pr
 * @Last Modified time: 2019-05-14 21:28:14
 */
import { Reflector } from '@saber2pr/reflect'
import { KEY } from '../constants/metakeys'

export function DecoratorFactory(
  type: KEY.Controller,
  path: string
): MethodDecorator {
  return (target, key) => Reflector.defineMetadata(type, path, target, key)
}
