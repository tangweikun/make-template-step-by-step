import { Button } from 'antd';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Routers from './Routers';
import 'antd/dist/antd.less';
import './App.css';

function App(): JSX.Element | null {
  return (
    <BrowserRouter>
      {/* App
      <Button type="primary">Antd</Button> */}
      <Routers />
    </BrowserRouter>
  );
}

export default App;
