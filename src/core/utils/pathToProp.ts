/*
 * @Author: saber2pr
 * @Date: 2019-05-14 21:42:35
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-05-14 21:57:04
 */
export function pathToProp(path: string) {
  if (path.startsWith('/')) {
    return path.slice(1)
  }
  return path
}
