import React, {Component} from 'react';
import { Redirect } from "react-router-dom";

class Home extends Component  {

    render() {
        if(!this.props.loggedIn){
            return <Redirect to="/" />;
        }
        
        return (
          <div>  
            <h1>
                Home Page
            </h1>
       
        </div>
        );
    }

}

export default Home;