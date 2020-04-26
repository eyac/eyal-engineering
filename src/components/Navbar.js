import React, { Fragment } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import { colors } from '../common/styles';
import Home from './Home';
import CustomComponent from './CustomComponent';
import Header from './Header';
import ToooltipInfo from './TooltipInfo'
import TogglerInfo from './TogglerInfo'

const Navbar = () => {
  return (
    <Fragment>
      <Router>
        <div className="nav">
          <ul>
            <li>
              <Link className="h-l" to="/">Home</Link>
            </li>
            <li>
              <Link className="h-l" to="/Tooltip">Tooltip</Link>
            </li>
            <li>
              <Link className="h-l" to="/Toggler">Toggler</Link>
            </li>
          </ul>
          <Header/>
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route exact path="/eyal-engineering">
              <Home/>
            </Route>
            <Route path="/Tooltip">
              <CustomComponent component={ToooltipInfo}/>
            </Route>
            <Route path="/Toggler">
              <CustomComponent component={TogglerInfo}/>
            </Route>
          </Switch>
        </div>
      </Router>
      {/*language=CSS*/}
      <style jsx global>{`
       .nav{
           position: absolute;
           width: 100%;
           top: 0;
           text-align: left;
           background-color: ${colors.black};
        }
        ul {
          list-style: none;
        }
        li {
          display: inline;
        }
        a{
           text-decoration: none;
           border: none;
           color: ${colors.white};
           cursor: pointer;
           border-radius: 17px;
           padding: 5px 15px;
           transition: background-color 0.35s ease;
           white-space: nowrap;
           font-weight: bold;
         }
    `}</style>
    </Fragment>
  );
};

export default Navbar;