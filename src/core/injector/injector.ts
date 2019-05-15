/*
 * @Author: saber2pr
 * @Date: 2019-05-15 22:02:40
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-05-15 22:20:00
 */
import { Constructor } from '../../interface/constructor'
import { Reflector } from '@saber2pr/reflect'
import { KEY } from '../../common/constants/metakeys'
import { DepMeta } from '../../common/decorators'
import { MetaStore } from '../store/metadataStore'

export function Injector(target: Constructor) {
  const deps =
    Reflector.getMetadata<Array<Constructor>>(KEY.DESIGN.PARAMTYPES, target) ||
    []

  const tags =
    Reflector.getMetadata<DepMeta[]>(KEY.Injectable.META, target) || []

  tags.forEach(tag => {
    if (Reflector.hasMetadata(tag.id, MetaStore)) {
      deps[tag.index] = Reflector.getMetadata(tag.id, MetaStore)
    } else {
      throw new Error(`injected dep:${tag.id} not found`)
    }
  })

  const instances = deps.map(Injector)

  return new target(...instances)
}
