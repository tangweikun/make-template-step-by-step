import { Switch, Route } from 'react-router-dom';
import P1 from 'src/pages/p1';
import P2 from 'pages/p2';

function Routers(): JSX.Element {
  return (
    <Switch>
      <Route exact path="/">
        <div>HomePage</div>
      </Route>
      <Route path="/r1">
        <P1 />
      </Route>
      <Route path="/r3/r4">
        <P2 />
      </Route>
      <Route path="/r2/:id">
        <div>R2</div>
      </Route>
    </Switch>
  );
}

export default Routers;
