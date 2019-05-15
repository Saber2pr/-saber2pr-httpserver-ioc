/*
 * @Author: saber2pr
 * @Date: 2019-05-15 20:45:02
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-05-15 21:02:32
 */
import { Reflector } from '@saber2pr/reflect'
import { MetaStore } from '../../core/store/metadataStore'

export function Injectable(id?: string): ClassDecorator {
  return target => {
    const token = id || target.name
    if (Reflector.hasMetadata(token, MetaStore)) throw new TypeError()
    Reflector.defineMetadata(token, target, MetaStore)
  }
}
