import React, { Component } from 'react';
import { loginApi } from '../services/api';
import {  Link } from 'react-router-dom';
import '../App.css';

export default class Login extends Component {
    state = {
      username:'',
      password: '',
    };
  
    Submit = async (evt) => {
      evt.preventDefault();
      const login = await loginApi(this.state.username, this.state.password);
      console.log(login);
     
  
    };
   Input = (e) => {
      const name = e.target.name;
      const value = e.target.value;
  
      if (name === 'username') {
        this.setState({
          username: value,
        });
      } else {
        this.setState({
          password: value,
        });
      }
    };
  
  
    render() {
        return (
            <div className='wrapper'>
                <div class="container">
                    <h1>Walla-Keb</h1>
                    <br></br>
                    <h2>Login</h2>

                    <form class='form' onSubmit={this.Submit}>
                        <div>
                            <label name="username">Username:</label>
                            <input name="username" type="text" onChange={this.Input} />
                        </div>
                        <div>
                            <label name="password">Password:</label>
                            <input name="password" type="password" onChange={this.Input} />
                        </div>
                        <div>
                            <button id='login-button'>Login</button>
                            <br></br>
                            <Link to='/register'>
                                <button class='login-button'>New Register</button>
                            </Link>
                        </div>
                    </form>

                </div>
                <ul class="bg-bubbles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        );
    }

}
