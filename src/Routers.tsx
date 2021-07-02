import { Switch, Route } from 'react-router-dom';

function Routers(): JSX.Element {
  return (
    <Switch>
      <Route exact path="/">
        <div>HomePage</div>
      </Route>
      <Route path="/r1">
        <div>R1</div>
      </Route>
      <Route path="/r3/r4">
        <div>R13333</div>
      </Route>
      <Route path="/r2/:id">
        <div>R2</div>
      </Route>
    </Switch>
  );
}

export default Routers;
