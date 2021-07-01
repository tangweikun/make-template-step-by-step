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

## Step3 Making eslint and Prettier work together

```bash
yarn add eslint-config-prettier eslint-plugin-prettier -D
```

On the `.eslintrc.json` file, add the follow:
— Over “extends” section, add as the last extension:

```json
"extends":[
...
"plugin:prettier/recommended"
]
```

## Step4 VS Code: execute eslint + Prettier with auto fix in a file when save

[setting-eslint-and-prettier](https://javascript.plainenglish.io/setting-eslint-and-prettier-on-a-react-typescript-project-2021-22993565edf9)

- Create a `.vscode` folder on the root of the project
- Create a `settings.json` file inside .vscode/ folder and insert the follow code on it:

```json
{
  "editor.formatOnSave": true,
  "eslint.alwaysShowStatus": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "[javscript]": {
    "editor.defaultFormatter": "dbaeumer.vscode-eslint"
  },
  "[json]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
```
