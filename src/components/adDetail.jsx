import React, { Component } from 'react';
import { adDetail } from '../services/api';
import '../App.css';

export default class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ads: {},
    };
    const id = this.props.match.params._id;
    this.DetailAd(id);
  }
  
  DetailAd = async (id) => {
    const detailAd = await adDetail(id);
    if (detailAd.error) {
      alert('Error');
      this.props.history.push('/anuncios');
    } else {
      this.setState({
        ads: detailAd.result
      })
      return detailAd.result;
    }
  }
    
  render() {
    const { ads } = this.state
    if (ads !== '') {
      return (
        <div className='wrapper'>
          <div className="">
            <div><h1>Detail:</h1></div>
            <br />
            <div className="card">
              <div className="card__image"> <img src={ads.photo} alt="AdImage" /></div>
              <div className="card__content">
                <div className="card__title"><h2>{ads.name}</h2></div>
                <p className="card__text"> <h2>Descriptión:</h2> {ads.description}  <hr />
                  <p><h3>Precio:{ads.price} </h3> </p>
                  <p><h3>Tipo:  {ads.type}</h3> </p>
                </p>
                <button className="btn btn--block card__btn">Edit</button>

              </div>
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

        </div>
      );
    } else {
      return <div>Please wait a Moment.</div>;
    }
  }
}
