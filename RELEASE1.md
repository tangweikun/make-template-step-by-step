## Step1: Initialize package.json

```bash
yarn init -y | npm init -y
```

## Step2: Add the necessary packages to the package.json

2.1 Install Developer Dependencies

- `@babel/core`
- `@babel/preset-env`
- `@babel/preset-react`
- `@babel/preset-typescript`
- `html-webpack-plugin` to create HTML files and serve your bundle.
- `typescript`
- `webpack`
- `webpack-cli`
- `webpack-dev-server`
- `ts-loader`
- `@types/react`
- `@types/react-dom`

```bash
yarn add @babel/core @babel/preset-env @babel/preset-react @babel/preset-typescript html-webpack-plugin typescript webpack webpack-cli webpack-dev-server ts-loader @types/react @types/react-dom -D
```

2.2 Install Dependencies

- `react`
- `react-dom`

```bash
yarn add react react-dom
```

## Step3: Add the necessary scripts

```bash
"scripts": {
  "start": "webpack serve --open",
},
```

## Step 4: Add the tsconfig for the typescript configurations

We need to create a tsconfig.json file in our root directory for typescript configurations. If you have typescript installed, the easiest way to generate this file is to use

```bash
npx tsc --init
```

This will add a tsconfig.json to your root directory with all the possible configurations. For this project, we will create a tsconfig.json file manually and add simple configuration options like

```json
{
  "compilerOptions": {
    "module": "commonjs" /* Specify module code generation: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', 'es2020', or 'ESNext'. */,
    "jsx": "react-jsx",
    "strict": true /* Enable all strict type-checking options. */,
    "skipLibCheck": true /* Skip type checking of declaration files. */,
    "forceConsistentCasingInFileNames": true /* Disallow inconsistently-cased references to the same file. */
  }
}
```

## Step 5: Webpack Configuration

Create a file called webpack.config.js in the root directory and add the following.

```js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              ['@babel/preset-react', { runtime: 'automatic' }], // runtime 去除后本地加载不到 React
            ],
          },
        },
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
    }),
  ],
  devServer: {
    port: 9000,
    open: true,
    hot: true,
    compress: true,
  },
};
```

## Step 6: Adding React

Finally, we need to add a react in the code. Just add an src folder in the root directory and create the following files.

- index.html
- index.tsx
- App.tsx

### index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
```

### index.tsx

```tsx
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
```

### App.tsx

```tsx
function App() {
  return <div>App</div>;
}

export default App;
```

### Step7 Run the webpack servers

`yarn dev`: This will use the webpack dev-server to create a dev server and will watch for your code changes and be recompiled every time you make a change.

```bash
yarn dev
```

`yarn build`: This command will build your code and generate a single bundle file and insert it into the html file generated.

```bash
yarn build
```
