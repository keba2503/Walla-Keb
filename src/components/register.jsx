import React, { Component } from 'react';
import { registerApi } from '../services/api';
import '../App.css';

  
export default class Register extends Component {
  state = {
    username:'',
    password: '',
  };

  Submit = async (evt) => {
    evt.preventDefault();
    const register = await registerApi(this.state.username, this.state.password);
    console.log(register);
    if (register.success) {
      this.props.history.push('/login');
    } else {
      alert(register.error);
    }

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
              <h2>Register</h2>

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
                  <button id='login-button'>New Register</button>
                </div>
              </form>
              <p>
                <small>

                </small>
              </p>
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
