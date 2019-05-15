/*
 * @Author: saber2pr
 * @Date: 2019-05-14 21:30:45
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-05-14 22:52:40
 */
import { Controller, Saber, Post, Get, Factory } from '..'

@Controller('/user')
class UserController extends Saber.Controller {
  @Post('/register')
  public register() {
    this.response.end('register')
  }

  @Get('/login')
  public login() {
    this.response.end('login')
  }
}

@Controller()
class Hello extends Saber.Controller {
  @Get('/hello')
  hello() {
    this.response.end('hello')
  }
}

new Factory([UserController, Hello])
  .create()
  .listen(3001, () => console.log('http://localhost:3001'))
