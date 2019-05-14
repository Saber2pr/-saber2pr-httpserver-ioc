/*
 * @Author: saber2pr
 * @Date: 2019-05-14 21:28:10
 * @Last Modified by:   saber2pr
 * @Last Modified time: 2019-05-14 21:28:10
 */
import { Reflector } from '@saber2pr/reflect'
import { KEY } from '../constants/metakeys'

export function Controller(path?: string): ClassDecorator {
  return target =>
    Reflector.defineMetadata(KEY.Controller.BaseUrl, path, target)
}
