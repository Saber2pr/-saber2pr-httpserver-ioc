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
@Controller('/api')
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
