/*
 * @Author: saber2pr 
 * @Date: 2019-05-14 21:28:19 
 * @Last Modified by:   saber2pr 
 * @Last Modified time: 2019-05-14 21:28:19 
 */
import { KEY } from '../constants/metakeys'
import { DecoratorFactory } from './decorator.factory'

export function Get(path?: string): MethodDecorator {
  return DecoratorFactory(KEY.Controller.GET, path)
}

export function Post(path?: string): MethodDecorator {
  return DecoratorFactory(KEY.Controller.POST, path)
}
