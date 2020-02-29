import React, { Component } from 'react';
import '../App.css';


const TAGS = [
  {
    id: "id_motor",
    name: "Motor"
  },
  {
    id: "id_work",
    name: "Work"
  },
  {
    id: "id_lifestyle",
    name: "Lifestyle"
  },
  {
    id: "id_mobile",
    name: "Mobile"
  }
];

export default class Adfilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
    tagsAd: TAGS[0].id
  };
}

handleSelectChange = event => {
  this.setState({ tagsAd: event.target.value });
};

  render() {

    const {tagsAd} = this.state;
    return (
      <div className='wrapper-2'>
        <div className="container-2">
          <h1>Walla-Keb</h1>
          <br></br>
          <h2>Search Ads</h2>
          <form className='form' onSubmit={this.Submit}>
            <div>
              <label name="username">Ads</label>
              <input name="username" type="text" onChange={this.Input} />
            </div>
            <div>
              <link rel="stylesheet" href="" />
              <button className='login-button'>Search</button>
              <br />
              <label className='login-button' htmlFor="">Tags:</label>
              <select className='login-button' value={tagsAd} onChange={this.handleSelectChange}>
                {TAGS.map(tagsAd => (
                  <option value={tagsAd.id}>{tagsAd.name}</option>
                ))}
              </select>
            </div>
          </form>
        </div>
        <ul className="bg-bubbles">
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