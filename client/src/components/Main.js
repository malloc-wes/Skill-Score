import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from '../components/LandingPage/LandingPage'
import Home from './Home';
import Charts from './Charts';
import WhatIf from './WhatIf';
import Learn from './Learn';
import Logout from './Logout';

const Main = () => (

    <main>
        <Switch>
            <Route exact path="/" component={LandingPage} />
             <Route exact path='/Home' component={Home} /*onEnter={requireAuth}*/ />
            <Route exact path='/Charts' component={Charts} />
            <Route exact path='/WhatIf' component={WhatIf} />
            <Route exact path='/learn' component={Learn} />
        <Route exact path='/logout' component={Logout} />
        </Switch> 
    </main>

)
export default Main;