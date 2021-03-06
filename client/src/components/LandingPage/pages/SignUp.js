import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SignUp extends Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: '',
            name: '',
            username:'',
            edu:'',
            exp:'',
            city:'',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

        this.setState({
          [name]: value
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        console.log('The form was submitted with the following data:');
        console.log(this.state);

        this.props.signUp(this.state);
    }

    render() {
        return (
        <div className="FormCenter">
            <form onSubmit={this.handleSubmit} className="FormFields">
              <div className="FormField">
                <label className="FormField__Label" htmlFor="name">Full Name</label>
                <input type="text" id="name" className="FormField__Input" placeholder="Enter your full name" name="name" value={this.state.name} onChange={this.handleChange} />
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="username"> Username</label>
                <input type="text" id="username" className="FormField__Input" placeholder="Enter a username" name="username" value={this.state.username} onChange={this.handleChange} />
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="password">Password</label>
                <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange} />
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
                <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.handleChange} />
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="edu">Education</label>
                <input type="text" id="edu" className="FormField__Input" placeholder="Education level" name="edu" value={this.state.edu} onChange={this.handleChange} />
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="exp">Experience</label>
                <input type="text" id="exp" className="FormField__Input" placeholder="Experience level" name="exp" value={this.state.exp} onChange={this.handleChange} />
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="city">City</label>
                <input type="text" id="city" className="FormField__Input" placeholder="Enter your city" name="city" value={this.state.city} onChange={this.handleChange} />
              </div>
              <div className="FormField">
                  <button className="FormField__Button mr-20">Sign Up</button> <Link to="/sign-in" className="FormField__Link">I'm already member</Link>
              </div>
            </form>
          </div>
        );
    }
}

export default SignUp;