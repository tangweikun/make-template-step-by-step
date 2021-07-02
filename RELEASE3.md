## Step1: Add less, less-loader, style-loader, css-loader, antd

```bash
yarn add less less-loader style-loader css-loader -D
yarn add antd
```

在 webpack.config.js 中的 rules 中添加

```js
{
  test: /\.less$/,
  use: [
    'style-loader',
    'css-loader',
    { loader: 'less-loader', options: { lessOptions: { javascriptEnabled: true } } },
  ],
},
```
