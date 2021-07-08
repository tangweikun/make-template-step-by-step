import { BrowserRouter } from 'react-router-dom';
import Routers from 'src/Routers';
import 'antd/dist/antd.less';
import './App.css';
import 'src/i18n';

function App(): JSX.Element | null {
  return (
    <BrowserRouter>
      <Routers />
    </BrowserRouter>
  );
}

export default App;
