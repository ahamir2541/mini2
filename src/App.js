import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './css/App.css';

// COMPONENTS
import CSStransition from './components/CSStransition';
import Tgroup from './components/tgroup';
import TransitionComp from './components/Transition';
import TransitionGroup from './components/TransitionGroup';
import Loop from './components/Loop';

const App = () => {
  return(
    <BrowserRouter>
      <div>
        <div className="anim_index">
          <Link to="/transition">Transition</Link>
          <Link to="/csstransition">CSStransition</Link>
          <Link to="/tgroup">Transitions group</Link>
          <Link to="/tgroup2">Transitions group 2</Link>
          <Link to="/loop">Loop</Link>
        </div>
        <Route path="/transition" component={TransitionComp}></Route>
        <Route path="/csstransition" component={CSStransition}></Route>
        <Route path="/tgroup" component={Tgroup}></Route>
        <Route path="/tgroup2" component={TransitionGroup}></Route>
        <Route path="/loop" component={Loop}></Route>
      </div>
    </BrowserRouter>
  )
}

export default App;
