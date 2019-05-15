/*
 * @Author: saber2pr 
 * @Date: 2019-05-15 20:51:02 
 * @Last Modified by:   saber2pr 
 * @Last Modified time: 2019-05-15 20:51:02 
 */
import { Reflector } from '@saber2pr/reflect'
import { KEY } from '../constants/metakeys'

export interface DepMeta {
  id: string
  index: number
}

export function Inject(id: string): ParameterDecorator {
  return (target, _, index) => {
    const deps =
      Reflector.getMetadata<DepMeta[]>(KEY.Injectable.META, target) || []
    deps.push({ id, index })
    Reflector.defineMetadata(KEY.Injectable.META, deps, target)
  }
}
