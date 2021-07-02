import { Button } from 'antd';
import 'antd/dist/antd.less';
import './App.css';

function App(): JSX.Element | null {
  return (
    <div className="wrapper">
      App
      <Button type="primary">Antd</Button>
    </div>
  );
}

export default App;
