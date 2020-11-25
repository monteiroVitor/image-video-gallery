import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
//componentes
import Home from './views/Home';
import Video from './views/Video';
import Navbar from './components/Navbar/Navbar';
//rotas
import { routes } from './helpers/data';
function App() {
  return (
    <>
      <Navbar routes={routes} />
      <Switch>
        <Route path={'/'} exact component={Home} />
        <Route path={'/videos'} exact component={Video} />
        <Redirect to={'/'} />
      </Switch>
    </>
  );
}

export default App;
