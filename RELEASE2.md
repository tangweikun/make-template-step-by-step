## Step1: Add prettier(Formatting rules)

<!-- TODO:在.prettierrc 中集成默认设置 -->

```bash
yarn add prettier -D
```

创建 .prettierrc 配置文件如下

```json
{
  "semi": true,
  "singleQuote": true,
  "trailingComma": "all",
  "printWidth": 120
}
```

## Step2: Add eslint(Code-quality rules)

[setup eslint](https://andrebnassis.medium.com/setting-eslint-on-a-react-typescript-project-2021-1190a43ffba)
[setup eslint](https://www.scien.cx/2021/05/31/how-to-integrate-eslint-with-your-react-typescript-project-2021/)

2.1 Install eslint

```bash
yarn add eslint -D
```

2.2 Setup eslint

```bash
npx eslint --init
```
