/*
 * @Author: saber2pr
 * @Date: 2019-05-14 21:45:46
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-05-14 21:46:10
 */
import { Method } from '../../interface/controller'
import { KEY } from '../../common/constants/metakeys'

export function mapMethodToKey(method: Method): KEY.Controller {
  switch (method) {
    case 'GET':
      return KEY.Controller.GET
    case 'POST':
      return KEY.Controller.POST
    default:
      throw new TypeError()
  }
}
