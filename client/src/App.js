import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import './App.css';
import NavBar from './components/NavBar';
import LandingPage from './components/LandingPage/LandingPage'
import Home from './components/Home';
import Charts from './components/Charts';
import WhatIf from './components/WhatIf';
import Learn from './components/Learn';
import Logout from './components/Logout';
import API from "./utils/API";

class App extends React.Component{

    state = {
        loggedIn: false,
        user: null
    }

    handleSignup = newUser => {
        API.signUp(newUser)
        .then(function(data){
            this.setState({
                user: data.data
            });
        });
    }

    handleLogin = event => {
        API.login()
        .then(function(data){
            this.setState({
                user: data.data
            });
        });
    }

    renderThis = () =>{
        if(this.state.loggedIn){
            return [
                
                    <Route key={"home"} exact path='/Home' component={Home} /*onEnter={requireAuth}*/ />,
                    <Route key={"charts"} exact path='/Charts' component={Charts} />,
                    <Route key={"whatIf"} exact path='/WhatIf' component={WhatIf} />,
                    <Route key={"learn"} exact path='/learn' component={Learn} />,
                    <Route key={"logout"} exact path='/logout' component={Logout} />
            ];
        }
        
        return <Redirect to={"/"}/>;
    }

    render(){
        return (
            <div>
                { this.state.loggedIn ? <NavBar /> : null }
                <Switch>
                    <Route exact path="/" render={ () => {
                        return <LandingPage signUp={this.handleSignup} signIn={this.handleLogin} />}} />
                    {this.renderThis()}
                </Switch> 
                
            </div>
        );
    }
}



export default App;