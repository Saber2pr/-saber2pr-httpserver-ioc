/*
 * @Author: saber2pr
 * @Date: 2019-05-14 21:30:45
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-05-15 22:26:00
 */
import { Controller, Get,  ContextService } from '..'
import { Factory } from '../core'
import { Injectable, Inject } from '@saber2pr/ioc';

@Injectable()
class UserService {
  public getUserName() {
    return 'saber2pr!'
  }

  public getHello() {
    return 'Hello!'
  }
}

@Controller('/user')
class UserController {
  constructor(
    private ContextService: ContextService,
    @Inject('UserService') private UserService: UserService
  ) {}

  @Get('/login')
  public login() {
    this.ContextService.response.end(this.UserService.getUserName())
  }

  @Get('/hello')
  public hello() {
    this.ContextService.response.end(this.UserService.getHello())
  }
}

new Factory([UserController])
  .create()
  .listen(3001, () => console.log('http://localhost:3001'))
// http://localhost:3001/user/login
// http://localhost:3001/user/hello
