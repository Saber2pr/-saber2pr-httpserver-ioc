# @saber2pr/httpserver-ioc

> httpserver-ioc framework.

> use @saber2pr/reflect.

```bash
# from npm
npm install @saber2pr/httpserver-ioc

# from github
git clone https://github.com/Saber2pr/-saber2pr-httpserver-ioc.git
```

## Feature

> classMeta -(parse)-> astNode -(transform)-> unitListener

```ts
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
```

---

## start

```bash
npm install
```

```bash
npm start

npm run dev

```

> Author: saber2pr

---

## develope and test

> you should write ts in /src

> you should make test in /src/test

> export your core in /src/index.ts!
