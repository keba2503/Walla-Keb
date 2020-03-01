import React, { Component } from 'react';
import { adApi, tags } from '../services/api';
import { Link } from "react-router-dom";
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

export default class Ads extends Component {
    constructor(props) {
      super(props);
      this.state = {
        ads: '',
        tags: '',
        name: '',
        tagsAd: TAGS[0].id
      };
    }
  
  async componentDidMount() {
    const adslist = await adApi();
    this.setState({
      tags: await tags(),
    });
    if (adslist.success) {
      this.setState({
        ads: adslist.results,
      });
    } else {
      return alert('Not logged in');
    }
  }

  filterChange = event => {
    this.setState({ tagsAd: event.target.value });
  };
  
  updateFilter = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }


  filter = async (evt) => {
    evt.preventDefault();
    const apiFilter = `?${this.state.name ? `name=${this.state.name}&` : ''}`;
    const results = await adApi(apiFilter);
    this.setState(state => {
      const ads = results.results
      return { ads }
    })
  }

  render() {  
    const {tagsAd, ads, name } = this.state;

    if (ads !== '') {
      return (
        <div> 

          <div className='wrapper-2'>
            <div className="container-2">
              <h1>Walla-Keb</h1>
              <br></br>
              <h2>Search Ads</h2>
              <form className='form' onSubmit={this.filter}>
                <div>
                  <label name="username">Ads</label>
                  <input type='text' name='name' value={name} onChange={this.updateFilter} />
                  <button type='submit' >Search</button>
                </div>
                <div>
                  <link rel="stylesheet" href="" />                  
                  <br />
                  <label className='login-button' htmlFor="">Tags:</label>
                  <select className='login-button' value={tagsAd} onChange={this.filterChange}>
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
      <div className="cards">
      {ads.map((ad) => {
    return (    
  <li key className="cards__item">
    <div className="card">
      <div className="card__image"> <img src={ad.photo} alt="AdImage" /></div>
      <div className="card__content">
        <div className="card__title"><h2>{ad.name}</h2></div>
        <p className="card__text"> <h2>Descriptión:</h2> {ad.description}  <hr/>
        <p><h3>Precio:{ad.price} </h3> </p>
          <p><h3>Tipo:  {ad.type}</h3> </p>
        Perspiciatis doloribus distinctio, ducimus at labore voluptatum iure impedit.
         Officia ratione corrupti facere porro eaque suscipit, iure esse in, sit dolore doloribus!  
        
         </p>
         <Link to={`/detail/${ad._id}`}>
        <button className="btn btn--block card__btn">Detail</button>
        </Link>
      </div>
    </div>
  </li>   
 
    );
  })
  }
     </div>   
        </div>
      );
    } else {
      return <div>Please wait a Moment.</div>;
    }
  }
  }
  