/*
 * @Author: saber2pr
 * @Date: 2019-05-14 21:28:04
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-05-14 22:28:52
 */
import { Routes, Method } from '../interface/controller'
import { Reflector } from '@saber2pr/reflect'
import { pathToProp } from './utils/pathToProp'
import { mapMethodToKey } from './utils/mapMethodToKey'

export function resolve(
  target: Object,
  key: string,
  method: Method,
  receiver: Routes
) {
  const path = Reflector.getMetadata<string>(
    mapMethodToKey(method),
    target,
    key
  )
  if (path) receiver.push({ method, path, callback: target[pathToProp(path)] })
}
